"use client";
import { sendEmailKey } from '@/config/config';
// import { send_email } from '@/DAL/Form';
import { Icon } from '@iconify/react'
import { sendMail } from 'mailcub';
import { useSnackbar } from 'notistack';
import React, { useState } from 'react'

let emptyFormData = {
  name: "",
  email: "",
  project_type: "",
  budget: "",
  message: "",
}

export default function ProfConnect() {
  const { enqueueSnackbar } = useSnackbar();
  const [formData, setFormData] = useState(emptyFormData);
  const [loading, setLoading] = useState(false);

  const projectTypeValue =
    formData.project_type && formData.project_type !== "Project Type"
      ? formData.project_type
      : "---";

  const budgetValue =
    formData.budget && formData.budget !== "Budget Range"
      ? formData.budget
      : "---";

  const tempHtml = `<div style="margin: 0; padding: 0; background: #f8fafc; font-family: Arial, Helvetica, sans-serif;">
<div style="max-width: 700px; margin: 0 auto; padding: 34px 16px;">
<div style="background: #09091f; border-radius: 24px 24px 0 0; padding: 30px; color: #ffffff; background-image: linear-gradient(135deg,#09091f 0%,#11113a 55%,#26235c 100%);">
<h1 style="margin: 0; font-size: 30px; line-height: 1.25; font-weight: 900; color: #ffffff;">New Project Inquiry</h1>
<p style="margin: 12px 0 0; font-size: 15px; line-height: 1.7; color: #cbd5e1;">A new client submitted a SaaS, web app, or mobile app project request from your portfolio website.</p>
</div>
<div style="background: #ffffff; border: 1px solid #e5e7eb; border-top: 0; border-radius: 0 0 24px 24px; padding: 30px; box-shadow: 0 18px 45px rgba(15,23,42,0.10);">
<h2 style="margin: 0 0 18px; font-size: 18px; color: #0f172a; font-weight: 900;">Project Details</h2>
<table style="width: 100%; border-collapse: separate; border-spacing: 0 12px;">
<tbody>
<tr>
<td style="width: 38%; padding: 16px; background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 14px 0 0 14px; color: #64748b; font-size: 13px; font-weight: bold;">Client Name</td>
<td style="padding: 16px; background: #f8fafc; border: 1px solid #e2e8f0; border-left: 0; border-radius: 0 14px 14px 0; color: #0f172a; font-size: 15px; font-weight: 800;">${formData.name || "Not provided"}</td>
</tr>
<tr>
<td style="padding: 16px; background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 14px 0 0 14px; color: #64748b; font-size: 13px; font-weight: bold;">Email Address</td>
<td style="padding: 16px; background: #f8fafc; border: 1px solid #e2e8f0; border-left: 0; border-radius: 0 14px 14px 0; font-size: 15px; font-weight: 800;"><a style="color: #4f46e5; text-decoration: none;" href="mailto:${formData.email}"> ${formData.email || "Not provided"} </a></td>
</tr>
<tr>
<td style="padding: 16px; background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 14px 0 0 14px; color: #64748b; font-size: 13px; font-weight: bold;">Project Type</td>
<td style="padding: 16px; background: #f8fafc; border: 1px solid #e2e8f0; border-left: 0; border-radius: 0 14px 14px 0; color: #0f172a; font-size: 15px; font-weight: 800;">${projectTypeValue}</td>
</tr>
<tr>
<td style="padding: 16px; background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 14px 0 0 14px; color: #64748b; font-size: 13px; font-weight: bold;">Budget Range</td>
<td style="padding: 16px; background: #f8fafc; border: 1px solid #e2e8f0; border-left: 0; border-radius: 0 14px 14px 0; color: #0f172a; font-size: 15px; font-weight: 800;">${budgetValue}</td>
</tr>
</tbody>
</table>
<div style="margin-top: 26px;">
<p style="margin: 0 0 10px; color: #6366f1; font-size: 12px; font-weight: 900; letter-spacing: 1.5px; text-transform: uppercase;">Client Message</p>
<div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 18px; padding: 20px;">
<p style="margin: 0; color: #334155; font-size: 15px; line-height: 1.8;">${formData.message || "No message provided."}</p>
</div>
</div>
<p style="margin: 22px 0 0; text-align: center; color: #94a3b8; font-size: 12px;">This inquiry was submitted from the portfolio contact form.</p>
</div>
</div>
</div>`;

  async function handleFormSubmit(e) {
    e.preventDefault();
    setLoading(true);

    const email_body = {
      email_from: "muneebislamportfolio@devflips.com",
      receiver: "shahid-anwar@metalogixtech.com",
      subject: `New Project Inquiry | ${formData.project_type || "Project"
        } | ${formData.name || "Portfolio Lead"}`,
      html: tempHtml,
    };

    try {
      console.log("submitting........", email_body);

      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(email_body),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data?.message || "Email sending failed");
      }

      console.log("Email sent:", data);

      enqueueSnackbar("Email Sent Successfully", {
        variant: "success",
      });

      setFormData(emptyFormData);
    } catch (err) {
      console.error("Error:", err);

      enqueueSnackbar("Error Occurred while sending Email", {
        variant: "error",
      });
    } finally {
      setLoading(false);
    }
  }

  function onUpdatedForm(e) {
    let tempFieldName = e.target.name;
    let tempValue = e.target.value;
    // console.log(tempFieldName + ": ", tempValue);

    let tempObj = {
      ...formData,
      [tempFieldName]: tempValue,
    }
    setFormData(tempObj);
  }


  return (
    <section id="contact" className="bg-white pb-20">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.4fr_0.8fr] lg:px-8">
        <div>
          <h2 className="text-2xl font-black text-slate-950">
            Let’s Connect
          </h2>
          <div className="mt-6 space-y-4 text-sm text-slate-600">
            <p className="flex items-center gap-3">
              <Icon icon="mdi:email-outline" className="text-xl text-indigo-500" />
              muneebch6@gmail.com
            </p>
            <p className="flex items-center gap-3">
              <Icon icon="mdi:phone-outline" className="text-xl text-indigo-500" />
              +92 303 4099186
            </p>
            <p className="flex items-center gap-3">
              <Icon icon="mdi:map-marker-outline" className="text-xl text-indigo-500" />
              <div className='flex-1 flex flex-col'>
                <span>
                  Sahiwal, Punjab, Pakistan
                </span>
                <span>
                  Available for remote projects worldwide
                </span>
              </div>
            </p>
          </div>
        </div>

        <form onSubmit={handleFormSubmit} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl">
          <h2 className="text-2xl font-black text-slate-950">
            Start Your SaaS, Web App, or Mobile App Project
          </h2>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <input
              type="text"
              placeholder="Your Name"
              name='name'
              required
              value={formData.name}
              onChange={onUpdatedForm}
              className="rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-indigo-500"
            />
            <input
              type="email"
              placeholder="Your Email"
              name='email'
              required
              value={formData.email}
              onChange={onUpdatedForm}
              className="rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-indigo-500"
            />
            <select className="rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-indigo-500"
              name='project_type'
              value={formData.project_type}
              onChange={onUpdatedForm}
              required
            >
              <option>Project Type</option>
              <option>SaaS Platform</option>
              <option>Web Application</option>
              <option>Mobile App</option>
              <option>Admin Dashboard</option>
            </select>
            <select className="rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-indigo-500"
              name='budget'
              value={formData.budget}
              onChange={onUpdatedForm}>
              <option>Budget Range</option>
              <option>$500 - $1,000</option>
              <option>$1,000 - $3,000</option>
              <option>$3,000 - $5,000</option>
              <option>$5,000+</option>
            </select>
          </div>
          <textarea
            rows="5"
            placeholder="Your Message"
            className="mt-4 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-indigo-500"
            name='message'
            required
            value={formData.message}
            onChange={onUpdatedForm}
          />
          <button
            type="submit"
            className="mt-5 inline-flex items-center gap-2 rounded-xl bg-indigo-500 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-indigo-500/25 transition hover:bg-indigo-600"
          >
            Start a Project
            {loading ? <Icon icon="eos-icons:bubble-loading" /> : <Icon icon="mdi:send" />}
          </button>
        </form>

        <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
          <Icon icon="mdi:clock-outline" className="text-4xl text-indigo-500" />
          <h3 className="mt-4 text-xl font-black text-slate-950">
            I usually reply within 24 hours
          </h3>
          <p className="mt-3 text-sm leading-6 text-slate-600">
            Tell me about your project, and I’ll get back to you with the next steps.
          </p>
        </div>
      </div>
    </section>
  )
}
