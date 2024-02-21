import { useState } from "react";

const PlanCompare = () => {
  const [showTable, setShowTable] = useState(false);

  const toggleTable = () => {
    setShowTable(!showTable);
  };

  return (
    <section className="plan-compare">
      <div className="container">
        <div className="row justify-content-lg-start justify-content-center">
          <div className="col-lg-3 col-xl-2">
            <h2>Compare pricing plans</h2>
          </div>
          <div className="col-lg-3 col-xl-2 col-md-4 mt-lg-0 mt-4">
            <div className="plan-compare-card h-100 text-start ">
              <div className="pb-5">
                <h3>Free</h3>
                <p>For small projects</p>
                <h6>Includes to 10 users</h6>
              </div>
              <div className="plan-btn-div plan-btn-div-2">
                <a className="plan-btn-btn compare-btn-btn">Sign Up</a>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-xl-2 col-md-4 mt-lg-0 mt-4">
            <div className="plan-compare-card h-100 text-start ">
              <div className="pb-5">
                <h3>Starter</h3>
                <p>For growing teams</p>
                <h6>Includes to 30 users</h6>
              </div>
              <div className="plan-btn-div plan-btn-div-2">
                <a className="plan-btn-btn compare-btn-btn">Start Free trial</a>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-xl-2 col-md-4 mt-lg-0 mt-4">
            <div className="plan-compare-card h-100 text-start ">
              <div className="pb-5">
                <h3>Standard</h3>
                <p>For mid-sized companies</p>
                <h6>Unlimited users</h6>
              </div>
              <div className="plan-btn-div plan-btn-div-2">
                <a className="plan-btn-btn compare-btn-btn plan-btn-fill">
                  Start Free trial
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-xl-2 col-md-4 mt-lg-0 mt-4">
            <div className="plan-compare-card h-100 text-start ">
              <div className="pb-5">
                <h3>Premium</h3>
                <p>For larger companies</p>
                <h6>Unlimited users</h6>
              </div>
              <div className="plan-btn-div plan-btn-div-2">
                <a className="plan-btn-btn compare-btn-btn">Start Free trial</a>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="mt-5 text-center pt-5">
          <a
            className="plan-btn-btn compare-btn-btn w-auto"
            onClick={toggleTable}
          >
            {!showTable ? (
              <>
                View All Plan Features
                <i class="fa-solid fa-chevron-down ps-2"></i>
              </>
            ) : (
              <>
                Hide plan Features
                <i class="fa-solid fa-chevron-up ps-2"></i>
              </>
            )}
          </a>
        </div> */}
        <div className="d-none d-lg-block ">
          <div className="row mt-5 ">
            <div className="pb-4">
              <h3>Project Management</h3>
            </div>
            <table className="table table-bordered ms-2">
              <thead>
                <tr>
                  <th scope="col" className="ps-1">
                    Team Management
                  </th>
                  <td scope="col" className="text-center">
                    <i className="fa-solid fa-check"></i>
                  </td>
                  <td scope="col" className="text-center">
                    <i className="fa-solid fa-check"></i>
                  </td>
                  <td scope="col" className="text-center">
                    <i className="fa-solid fa-check"></i>
                  </td>
                  <td scope="col" className="text-center">
                    <i className="fa-solid fa-check"></i>
                  </td>
                  <td scope="col" className="text-center border-right-0">
                    <i className="fa-solid fa-check"></i>
                  </td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row" className="ps-1">
                    Projects
                  </th>
                  <td className="text-center">1</td>
                  <td className="text-center">5</td>
                  <td className="text-center">100</td>
                  <td className="text-center">Unlimited</td>
                  <td className="text-center border-right-0">Unlimited</td>
                </tr>
                <tr>
                  <th scope="row" className="ps-1">
                    Board
                  </th>
                  <td scope="col" className="text-center">
                    <i className="fa-solid fa-check"></i>
                  </td>
                  <td scope="col" className="text-center">
                    <i className="fa-solid fa-check"></i>
                  </td>
                  <td scope="col" className="text-center">
                    <i className="fa-solid fa-check"></i>
                  </td>
                  <td scope="col" className="text-center">
                    <i className="fa-solid fa-check"></i>
                  </td>
                  <td scope="col" className="text-center border-right-0">
                    <i className="fa-solid fa-minus"></i>
                  </td>
                </tr>
                <tr>
                  <th scope="row" className="ps-1">
                    Gantt chart
                  </th>
                  <td scope="col" className="text-center">
                    <i className="fa-solid fa-minus"></i>
                  </td>
                  <td scope="col" className="text-center">
                    <i className="fa-solid fa-minus"></i>
                  </td>
                  <td scope="col" className="text-center">
                    <i className="fa-solid fa-check"></i>
                  </td>
                  <td scope="col" className="text-center">
                    <i className="fa-solid fa-check"></i>
                  </td>
                  <td scope="col" className="text-center border-right-0">
                    <i className="fa-solid fa-check"></i>
                  </td>
                </tr>
                <tr>
                  <th scope="row" className="ps-1">
                    Burndown chart
                  </th>
                  <td scope="col" className="text-center">
                    <i className="fa-solid fa-minus"></i>
                  </td>
                  <td scope="col" className="text-center">
                    <i className="fa-solid fa-minus"></i>
                  </td>
                  <td scope="col" className="text-center">
                    <i className="fa-solid fa-check"></i>
                  </td>
                  <td scope="col" className="text-center">
                    <i className="fa-solid fa-check"></i>
                  </td>
                  <td scope="col" className="text-center border-right-0">
                    <i className="fa-solid fa-check"></i>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="row mt-5">
            <div className="pb-4">
              <h3>Issue Management</h3>
            </div>
            <table className="table table-bordered ms-2">
              <thead>
                <tr>
                  <th scope="col" className="ps-1">
                    Issues
                  </th>
                  <td scope="col" className="text-center">
                    <i className="fa-solid fa-check"></i>
                  </td>
                  <td scope="col" className="text-center">
                    <i className="fa-solid fa-check"></i>
                  </td>
                  <td scope="col" className="text-center">
                    <i className="fa-solid fa-check"></i>
                  </td>
                  <td scope="col" className="text-center">
                    <i className="fa-solid fa-check"></i>
                  </td>
                  <td scope="col" className="text-center border-right-0">
                    <i className="fa-solid fa-check"></i>
                  </td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row" className="ps-1">
                    Add issues via email
                  </th>
                  <td scope="col" className="text-center">
                    <i className="fa-solid fa-check"></i>
                  </td>
                  <td scope="col" className="text-center">
                    <i className="fa-solid fa-check"></i>
                  </td>
                  <td scope="col" className="text-center">
                    <i className="fa-solid fa-check"></i>
                  </td>
                  <td scope="col" className="text-center">
                    <i className="fa-solid fa-check"></i>
                  </td>
                  <td scope="col" className="text-center border-right-0">
                    <i className="fa-solid fa-minus"></i>
                  </td>
                </tr>
                <tr>
                  <th scope="row" className="ps-1">
                    Issue Summaries
                  </th>
                  <td scope="col" className="text-center">
                    <i className="fa-solid fa-check"></i>
                  </td>
                  <td scope="col" className="text-center">
                    <i className="fa-solid fa-check"></i>
                  </td>
                  <td scope="col" className="text-center">
                    <i className="fa-solid fa-check"></i>
                  </td>
                  <td scope="col" className="text-center">
                    <i className="fa-solid fa-check"></i>
                  </td>
                  <td scope="col" className="text-center border-right-0">
                    <i className="fa-solid fa-minus"></i>
                  </td>
                </tr>
                <tr>
                  <th scope="row" className="ps-1">
                    Subtasking
                  </th>
                  <td scope="col" className="text-center">
                    <i className="fa-solid fa-minus"></i>
                  </td>
                  <td scope="col" className="text-center">
                    <i className="fa-solid fa-minus"></i>
                  </td>
                  <td scope="col" className="text-center">
                    <i className="fa-solid fa-minus"></i>
                  </td>
                  <td scope="col" className="text-center">
                    <i className="fa-solid fa-check"></i>
                  </td>

                  <td scope="col" className="text-center border-right-0">
                    <i className="fa-solid fa-check"></i>
                  </td>
                </tr>
                <tr>
                  <th scope="row" className="ps-1">
                    Custom status
                  </th>
                  <td scope="col" className="text-center">
                    <i className="fa-solid fa-minus"></i>
                  </td>

                  <td scope="col" className="text-center">
                    <i className="fa-solid fa-check"></i>
                  </td>
                  <td scope="col" className="text-center">
                    <i className="fa-solid fa-check"></i>
                  </td>
                  <td scope="col" className="text-center ">
                    <i className="fa-solid fa-check"></i>
                  </td>
                  <td scope="col" className="text-center border-right-0">
                    <i className="fa-solid fa-minus"></i>
                  </td>
                </tr>
                <tr>
                  <th scope="row" className="ps-1">
                    Template
                  </th>
                  <td scope="col" className="text-center">
                    <i className="fa-solid fa-minus"></i>
                  </td>

                  <td scope="col" className="text-center">
                    <i className="fa-solid fa-check"></i>
                  </td>
                  <td scope="col" className="text-center">
                    <i className="fa-solid fa-check"></i>
                  </td>
                  <td scope="col" className="text-center">
                    <i className="fa-solid fa-check"></i>
                  </td>
                  <td scope="col" className="text-center border-right-0">
                    <i className="fa-solid fa-minus"></i>
                  </td>
                </tr>
                <tr>
                  <th scope="row" className="ps-1">
                    Custom fields
                  </th>
                  <td scope="col" className="text-center">
                    <i className="fa-solid fa-minus"></i>
                  </td>
                  <td scope="col" className="text-center">
                    <i className="fa-solid fa-minus"></i>
                  </td>
                  <td scope="col" className="text-center">
                    <i className="fa-solid fa-minus"></i>
                  </td>
                  <td scope="col" className="text-center">
                    <i className="fa-solid fa-check"></i>
                  </td>

                  <td scope="col" className="text-center border-right-0">
                    <i className="fa-solid fa-check"></i>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="row mt-5">
            <div className="pb-4">
              <h3>Code Review & Collaboration</h3>
            </div>
            <table className="table table-bordered ms-2">
              <thead>
                <tr>
                  <th scope="col" className="ps-1">
                    Git
                  </th>
                  <td scope="col" className="text-center">
                    <i className="fa-solid fa-check"></i>
                  </td>
                  <td scope="col" className="text-center">
                    <i className="fa-solid fa-check"></i>
                  </td>
                  <td scope="col" className="text-center">
                    <i className="fa-solid fa-check"></i>
                  </td>
                  <td scope="col" className="text-center">
                    <i className="fa-solid fa-check"></i>
                  </td>
                  <td scope="col" className="text-center border-right-0">
                    <i className="fa-solid fa-check"></i>
                  </td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row" className="ps-1">
                    Subversion
                  </th>
                  <td scope="col" className="text-center">
                    <i className="fa-solid fa-check"></i>
                  </td>
                  <td scope="col" className="text-center">
                    <i className="fa-solid fa-check"></i>
                  </td>
                  <td scope="col" className="text-center">
                    <i className="fa-solid fa-check"></i>
                  </td>
                  <td scope="col" className="text-center">
                    <i className="fa-solid fa-check"></i>
                  </td>
                  <td scope="col" className="text-center border-right-0">
                    <i className="fa-solid fa-check"></i>
                  </td>
                </tr>
                <tr>
                  <th scope="row" className="ps-1">
                    Wiki
                  </th>
                  <td scope="col" className="text-center">
                    <i className="fa-solid fa-check"></i>
                  </td>
                  <td scope="col" className="text-center">
                    <i className="fa-solid fa-check"></i>
                  </td>
                  <td scope="col" className="text-center">
                    <i className="fa-solid fa-check"></i>
                  </td>
                  <td scope="col" className="text-center">
                    <i className="fa-solid fa-check"></i>
                  </td>
                  <td scope="col" className="text-center border-right-0">
                    <i className="fa-solid fa-minus"></i>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="row mt-5">
            <div className="pb-4">
              <h3>Security</h3>
            </div>
            <table className="table table-bordered ms-2">
              <thead>
                <tr>
                  <th scope="col" className="ps-1">
                    2FA
                  </th>
                  <td scope="col" className="text-center">
                    <i className="fa-solid fa-check"></i>
                  </td>
                  <td scope="col" className="text-center">
                    <i className="fa-solid fa-check"></i>
                  </td>
                  <td scope="col" className="text-center">
                    <i className="fa-solid fa-check"></i>
                  </td>
                  <td scope="col" className="text-center">
                    <i className="fa-solid fa-check"></i>
                  </td>
                  <td scope="col" className="text-center border-right-0">
                    <i className="fa-solid fa-minus"></i>
                  </td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row" className="ps-1">
                    Hosting on backlog.com
                  </th>
                  <td scope="col" className="text-center">
                    <i className="fa-solid fa-check"></i>
                  </td>
                  <td scope="col" className="text-center">
                    <i className="fa-solid fa-check"></i>
                  </td>
                  <td scope="col" className="text-center">
                    <i className="fa-solid fa-check"></i>
                  </td>
                  <td scope="col" className="text-center">
                    <i className="fa-solid fa-check"></i>
                  </td>
                  <td scope="col" className="text-center border-right-0">
                    <i className="fa-solid fa-minus"></i>
                  </td>
                </tr>
                <tr>
                  <th scope="row" className="ps-1">
                    Force-Two Factor Authentication
                  </th>
                  <td scope="col" className="text-center">
                    <i className="fa-solid fa-minus"></i>
                  </td>
                  <td scope="col" className="text-center">
                    <i className="fa-solid fa-minus"></i>
                  </td>
                  <td scope="col" className="text-center">
                    <i className="fa-solid fa-minus"></i>
                  </td>
                  <td scope="col" className="text-center">
                    <i className="fa-solid fa-check"></i>
                  </td>
                  <td scope="col" className="text-center border-right-0">
                    <i className="fa-solid fa-minus"></i>
                  </td>
                </tr>
                <tr>
                  <th scope="row" className="ps-1">
                    Active directory
                  </th>
                  <td scope="col" className="text-center">
                    <i className="fa-solid fa-minus"></i>
                  </td>
                  <td scope="col" className="text-center">
                    <i className="fa-solid fa-minus"></i>
                  </td>
                  <td scope="col" className="text-center">
                    <i className="fa-solid fa-minus"></i>
                  </td>
                  <td scope="col" className="text-center">
                    <i className="fa-solid fa-minus"></i>
                  </td>
                  <td scope="col" className="text-center border-right-0">
                    <i className="fa-solid fa-check"></i>
                  </td>
                </tr>
                <tr>
                  <th scope="row" className="ps-1">
                    Access control
                  </th>
                  <td scope="col" className="text-center">
                    <i className="fa-solid fa-minus"></i>
                  </td>
                  <td scope="col" className="text-center">
                    <i className="fa-solid fa-minus"></i>
                  </td>
                  <td scope="col" className="text-center">
                    50 IP addresses
                  </td>
                  <td scope="col" className="text-center">
                    100 IP addresses
                  </td>
                  <td scope="col" className="text-center border-right-0">
                    Unlimited
                  </td>
                </tr>
                <tr>
                  <th scope="row" className="ps-1">
                    Self-hosted
                  </th>
                  <td scope="col" className="text-center">
                    <i className="fa-solid fa-minus"></i>
                  </td>
                  <td scope="col" className="text-center">
                    <i className="fa-solid fa-minus"></i>
                  </td>
                  <td scope="col" className="text-center">
                    <i className="fa-solid fa-minus"></i>
                  </td>
                  <td scope="col" className="text-center">
                    <i className="fa-solid fa-minus"></i>
                  </td>

                  <td scope="col" className="text-center border-right-0">
                    <i className="fa-solid fa-check"></i>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="row mt-5">
            <div className="pb-4">
              <h3>Support</h3>
            </div>
            <table className="table table-bordered ms-2">
              <thead>
                <tr>
                  <th scope="col" className="ps-1">
                    Email
                  </th>
                  <td scope="col" className="text-center">
                    <i className="fa-solid fa-check"></i>
                  </td>
                  <td scope="col" className="text-center">
                    <i className="fa-solid fa-check"></i>
                  </td>
                  <td scope="col" className="text-center">
                    <i className="fa-solid fa-check"></i>
                  </td>
                  <td scope="col" className="text-center">
                    <i className="fa-solid fa-check"></i>
                  </td>
                  <td scope="col" className="text-center border-right-0">
                    <i className="fa-solid fa-check"></i>
                  </td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row" className="ps-1">
                    Live chat
                  </th>
                  <td scope="col" className="text-center">
                    <i className="fa-solid fa-check"></i>
                  </td>
                  <td scope="col" className="text-center">
                    <i className="fa-solid fa-check"></i>
                  </td>
                  <td scope="col" className="text-center">
                    <i className="fa-solid fa-check"></i>
                  </td>
                  <td scope="col" className="text-center">
                    <i className="fa-solid fa-check"></i>
                  </td>
                  <td scope="col" className="text-center border-right-0">
                    <i className="fa-solid fa-check"></i>
                  </td>
                </tr>
                <tr>
                  <th scope="row" className="ps-1">
                    1:1 Online Training Session
                  </th>
                  <td scope="col" className="text-center">
                    <i className="fa-solid fa-minus"></i>
                  </td>
                  <td scope="col" className="text-center">
                    <i className="fa-solid fa-minus"></i>
                  </td>
                  <td scope="col" className="text-center">
                    <i className="fa-solid fa-check"></i>
                  </td>
                  <td scope="col" className="text-center">
                    <i className="fa-solid fa-check"></i>
                  </td>
                  <td scope="col" className="text-center border-right-0">
                    <i className="fa-solid fa-check"></i>
                  </td>
                </tr>
                <tr>
                  <th scope="row" className="ps-1">
                    Dedicated customer success associate
                  </th>
                  <td scope="col" className="text-center">
                    <i className="fa-solid fa-minus"></i>
                  </td>
                  <td scope="col" className="text-center">
                    <i className="fa-solid fa-minus"></i>
                  </td>
                  <td scope="col" className="text-center">
                    <i className="fa-solid fa-minus"></i>
                  </td>
                  <td scope="col" className="text-center">
                    <i className="fa-solid fa-check"></i>
                  </td>
                  <td scope="col" className="text-center border-right-0">
                    <i className="fa-solid fa-check"></i>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="row mt-5">
            <div className="pb-4">
              <h3>Storage & Attachments</h3>
            </div>
            <table className="table table-bordered ms-2">
              <thead>
                <tr>
                  <th scope="col" className="ps-1">
                    Total storage
                  </th>
                  <td scope="col" className="text-center">
                    100 MB
                  </td>
                  <td scope="col" className="text-center">
                    1 GB
                  </td>
                  <td scope="col" className="text-center">
                    30 GB
                  </td>
                  <td scope="col" className="text-center">
                    100 GB
                  </td>
                  <td scope="col" className="text-center border-right-0">
                    Unlimited
                  </td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row" className="ps-1">
                    No. of attachments in issues
                  </th>
                  <td scope="col" className="text-center">
                    1 file
                  </td>
                  <td scope="col" className="text-center">
                    10 files
                  </td>
                  <td scope="col" className="text-center">
                    30 files
                  </td>
                  <td scope="col" className="text-center">
                    50 files
                  </td>
                  <td scope="col" className="text-center border-right-0">
                    Unlimited
                  </td>
                </tr>
                <tr>
                  <th scope="row" className="ps-1">
                    Attachment size in issues (per file)
                  </th>
                  <td scope="col" className="text-center">
                    5 MB
                  </td>
                  <td scope="col" className="text-center">
                    10 MB
                  </td>
                  <td scope="col" className="text-center">
                    10 MB
                  </td>
                  <td scope="col" className="text-center">
                    10 MB
                  </td>
                  <td scope="col" className="text-center border-right-0">
                    10 MB
                  </td>
                </tr>
                <tr>
                  <th scope="row" className="ps-1">
                    No. of attachments in files (inside project)
                  </th>
                  <td scope="col" className="text-center">
                    Unlimited
                  </td>
                  <td scope="col" className="text-center">
                    Unlimited
                  </td>
                  <td scope="col" className="text-center">
                    Unlimited
                  </td>
                  <td scope="col" className="text-center">
                    Unlimited
                  </td>
                  <td scope="col" className="text-center border-right-0">
                    Unlimited
                  </td>
                </tr>
                <tr>
                  <th scope="row" className="ps-1">
                    Attachment size in files (per file)
                  </th>
                  <td scope="col" className="text-center">
                    100 MB
                  </td>
                  <td scope="col" className="text-center">
                    1 GB
                  </td>
                  <td scope="col" className="text-center">
                    1 GB
                    <span>3 GB on WebDAV</span>
                  </td>
                  <td scope="col" className="text-center">
                    1 GB
                    <span>3 GB on WebDAV</span>
                  </td>
                  <td scope="col" className="text-center border-right-0">
                    500MB
                    <span>No limit on WebDAV</span>
                  </td>
                </tr>
                <tr>
                  <th scope="row" className="ps-1">
                    No. of attachments per Wiki page
                  </th>
                  <td scope="col" className="text-center">
                    <i className="fa-solid fa-minus"></i>
                  </td>
                  <td scope="col" className="text-center">
                    10
                  </td>
                  <td scope="col" className="text-center">
                    30
                  </td>
                  <td scope="col" className="text-center">
                    50
                  </td>
                  <td scope="col" className="text-center border-right-0">
                    Unlimited
                  </td>
                </tr>
                <tr>
                  <th scope="row" className="ps-1">
                    Attachment size in wiki
                  </th>
                  <td scope="col" className="text-center">
                    <i className="fa-solid fa-minus"></i>
                  </td>
                  <td scope="col" className="text-center">
                    1M
                  </td>
                  <td scope="col" className="text-center">
                    10M
                  </td>
                  <td scope="col" className="text-center">
                    10MB
                  </td>
                  <td scope="col" className="text-center border-right-0">
                    10MB
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="row mt-5">
            <div className="pb-4">
              <h3>Mobile</h3>
            </div>
            <table className="table table-bordered ms-2">
              <thead>
                <tr>
                  <th scope="col" className="ps-1">
                    iOS app
                  </th>
                  <td scope="col" className="text-center">
                    <i className="fa-solid fa-check"></i>
                  </td>
                  <td scope="col" className="text-center">
                    <i className="fa-solid fa-check"></i>
                  </td>
                  <td scope="col" className="text-center">
                    <i className="fa-solid fa-check"></i>
                  </td>
                  <td scope="col" className="text-center">
                    <i className="fa-solid fa-check"></i>
                  </td>
                  <td scope="col" className="text-center border-right-0">
                    <i className="fa-solid fa-minus"></i>
                  </td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="col" className="ps-1">
                    Android app
                  </th>
                  <td scope="col" className="text-center">
                    <i className="fa-solid fa-check"></i>
                  </td>
                  <td scope="col" className="text-center">
                    <i className="fa-solid fa-check"></i>
                  </td>
                  <td scope="col" className="text-center">
                    <i className="fa-solid fa-check"></i>
                  </td>
                  <td scope="col" className="text-center">
                    <i className="fa-solid fa-check"></i>
                  </td>
                  <td scope="col" className="text-center border-right-0">
                    <i className="fa-solid fa-minus"></i>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlanCompare;
