import { _send_subscriber_email } from '@/DAL/Form';
import { CircularProgress, TextField, Typography } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { useRouter } from 'next/router';
import { useSnackbar } from 'notistack';
import { useState } from 'react';

const ContactSection = () => {
    const [fileName, setFileName] = useState('');
    const [fileRef, setFileRef] = useState("");
    console.log(fileRef, "fileReffileRef")
    const { enqueueSnackbar } = useSnackbar();
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);
    const [inputs, setInputs] = useState({
        name: "",
        mobile_number: "",
        email: "",
        message: "",
        select_requirement: ""
    });
    const handleChangeInputsState = (e) => {
        const { name, value } = e.target;
        if (name === "mobile_number") {
            if (/^[\d+\-() ]*$/.test(value)) {
                setInputs((prevState) => ({
                    ...prevState,
                    [name]: value,
                }));
            }
        } else {
            setInputs((prevState) => ({
                ...prevState,
                [name]: value,
            }));
        }
    };
    const handleFileChange = (event) => {
        const file = event.target.files[0];
        console.log(file, "eventfileeeeeeeeeeeeeeeeeee")
        setFileName(file ? file.name : '');
        setFileRef(file);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const name = inputs.name.trim();
        if (!name || name[0] !== name[0].toUpperCase()) {
            enqueueSnackbar('First letter of the Name must be capitalized.', { variant: 'error' });
            return;
        }
        // if (!fileRef) {
        //     enqueueSnackbar('Please upload a resume file before submitting.', { variant: 'error' });
        //     return;
        // }
        setIsLoading(true);

        const formData = new FormData();
        formData.append("form_type", "ask_a_question");
        formData.append("name", inputs.name);
        formData.append("mobile_number", inputs.mobile_number);
        formData.append("email", inputs.email);
        formData.append("message", inputs.message);
        formData.append("select_requirement", inputs.select_requirement);
        if (fileRef) {
            formData.append("file", fileRef);
        }
        // console.log(...formData, "kjbjkbjk")
        const resp = await _send_subscriber_email(formData);

        if (resp.code === 200) {
            enqueueSnackbar('Your question has been submitted successfully!', { variant: "success" });
            router.push("/")
        } else {
            enqueueSnackbar(resp.message, { variant: "error" });
            setIsLoading(false);
        }
    };
    if (isLoading) {
        return (
            <div
                className="d-flex justify-content-center align-items-center mt-5 pt-5"
                style={{ minHeight: "80vh" }}
            >
                <CircularProgress sx={{ color: "#1b8e3d" }} />

            </div>
        );
    }


    return (
        <section className="contact_1 main_section m-40" id="contact">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-6">
                        <div className="wb-editor-block text-start form-main-wrapper">
                            <h6>CONTACT NOW</h6>
                            <h2>Have Question? Write a Message</h2>
                            <p>We will catch you as early as we receive the message</p>
                        </div>
                        <form onSubmit={handleSubmit}>
                            <div className="row">
                                <div className="col-md-6 wp-mt-20">

                                    <TextField id="name" label="Enter Name" variant="standard" required fullWidth
                                        name="name"
                                        value={inputs.name}
                                        onChange={handleChangeInputsState}
                                        sx={{
                                            '& .MuiInput-underline:after': {
                                                borderBottomColor: '#ff7a3a',
                                            },
                                            '& .MuiInputLabel-root.Mui-focused': {
                                                color: '#ff7a3a',
                                            },
                                        }} />
                                </div>
                                <div className="col-md-6  wp-mt-20 ">

                                    <TextField id="email" label="Enter Email" variant="standard"
                                        name="email"
                                        value={inputs.email}
                                        onChange={handleChangeInputsState}
                                        required fullWidth sx={{
                                            '& .MuiInput-underline:after': {
                                                borderBottomColor: '#ff7a3a',
                                            },
                                            '& .MuiInputLabel-root.Mui-focused': {
                                                color: '#ff7a3a',
                                            },
                                        }} />
                                </div>
                                <div className="col-md-6  wp-mt-20">

                                    <TextField id="outlined-basic"
                                        name="mobile_number"
                                        value={inputs.mobile_number}
                                        onChange={handleChangeInputsState}

                                        label="Enter Mobile" variant="standard" required fullWidth sx={{
                                            '& .MuiInput-underline:after': {
                                                borderBottomColor: '#ff7a3a',
                                            },
                                            '& .MuiInputLabel-root.Mui-focused': {
                                                color: '#ff7a3a',
                                            },
                                        }} />
                                </div>
                                <div className="col-md-6  wp-mt-20">
                                    <FormControl fullWidth required sx={{
                                        '& .MuiInput-underline:after': {
                                            borderBottomColor: '#ff7a3a',
                                        },
                                        '& .MuiInputLabel-root.Mui-focused': {
                                            color: '#ff7a3a',
                                        },
                                    }}>
                                        <InputLabel id="demo-simple-select-label">Select Requirement</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="select_requirement"
                                            variant="standard"
                                            value={inputs.select_requirement}
                                            name="select_requirement"
                                            onChange={handleChangeInputsState}
                                        >
                                            <MenuItem value="Web">Web</MenuItem>
                                            <MenuItem value="Mobile App">Mobile App</MenuItem>
                                        </Select>

                                    </FormControl>

                                </div>
                                <div className='col-12 wp-mt-20'>
                                    <span style={{ fontWeight: "400" }}>Upload Resume</span>
                                    <div className='upload-files mt-3'>
                                        <input
                                            accept=".pdf,.doc,.docx,.txt,.rtf,.odt,.xlsx,.xls,.csv"
                                            style={{ display: 'none' }}
                                            id="upload-file"
                                            className=''
                                            type="file"
                                            onChange={handleFileChange}
                                        />
                                        <label htmlFor="upload-file">
                                            <a className='form-btn'>
                                                Choose File
                                            </a>
                                        </label>
                                        <Typography variant="body2" className='ms-1' sx={{ fontWeight: "400", fontSize: "1rem" }}>
                                            {fileName || 'No file chosen'}
                                        </Typography>

                                    </div>
                                </div>
                                <div className="col-md-12  wp-mt-20">
                                    <TextField id="message" label="Enter Message" variant="standard"
                                        name="message"
                                        value={inputs.message}
                                        onChange={handleChangeInputsState}
                                        required fullWidth multiline
                                        rows={4} sx={{
                                            '& .MuiInput-underline:after': {
                                                borderBottomColor: '#ff7a3a',
                                            },
                                            '& .MuiInputLabel-root.Mui-focused': {
                                                color: '#ff7a3a',
                                            },
                                        }} />

                                </div>
                            </div>
                            <div className="row justify-content-center wp-mt-20 text-center">
                                <div className='col-6 col-md-12'>
                                    {/* <a href="#" class="w-100 banner-solid-btn wp-pb-18 wp-pt-18 wp-pl-18 wp-pr-18"><span>Submit</span></a> */}
                                    <button type="submit" className="w-100 banner-solid-btn wp-pb-18 wp-pt-18 wp-pl-18 wp-pr-18 border-0">
                                        <span>Submit</span>
                                    </button>


                                </div>
                            </div>

                        </form>
                    </div>
                    <div className="col-lg-5 mt-5 mt-lg-0">
                        <div className="info-card">
                            <div className="fw-bold font-size-md d-flex align-items-center"><i
                                className="fas fa-phone-alt font-size-md"></i>
                                <span className="mx-2">Phone:</span>
                            </div>
                            <div className="info-body wb-editor-block">
                                <p>Assistance hours: Monday – Friday, 9 am to 6 pm</p>
                                <a href="tel:03044278167">(+92)000 0000 000</a>
                            </div>
                        </div>
                        <div className="info-card mt-4">
                            <div className="fw-bold font-size-md d-flex align-items-center"><i
                                className="fas fa-envelope font-size-md"></i>
                                <span className="mx-2">Email:</span>
                            </div>
                            <div className="info-body wb-editor-block">
                                <p>Our support team will get back to you in 24-h during standard business hours.</p>
                                <a href="mailto:bytepulse@gmail.com">bytepulse@gmail.com</a>
                            </div>
                        </div>
                        <div className="info-card mt-4">
                            <div className="fw-bold font-size-md d-flex align-items-center"><i
                                className="fa fa-address-card font-size-md"></i>
                                <span className="mx-2">Address:</span>
                            </div>
                            <div className="info-body wb-editor-block">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, vitae?</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;