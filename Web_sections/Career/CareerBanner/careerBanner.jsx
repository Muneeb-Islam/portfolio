import { _send_subscriber_email } from '@/DAL/Form';
import { CircularProgress, TextField, Typography } from '@mui/material';
import { useRouter } from 'next/router';
import { useSnackbar } from 'notistack';
import { useState } from 'react';
const CareerSection = () => {
    const [fileName, setFileName] = useState('');
    const [fileRef, setFileRef] = useState("");
    const { enqueueSnackbar } = useSnackbar();
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);
    const [inputs, setInputs] = useState({
        name: "",
        mobile_number: "",
        email: "",
        cover_letter: "",
        applied_position: "",

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
        const appliedPosition = inputs.applied_position.trim();
        if (!name || name[0] !== name[0].toUpperCase()) {
            enqueueSnackbar('First letter of the Name must be capitalized.', { variant: 'error' });
            return;
        }
        if (!appliedPosition || appliedPosition[0] !== appliedPosition[0].toUpperCase()) {
            enqueueSnackbar('First letter of the Applied Position must be capitalized.', { variant: 'error' });
            return;
        }
        // if (!fileRef) {
        //     enqueueSnackbar('Please upload a resume file before submitting.', { variant: 'error' });
        //     return;
        // }
        setIsLoading(true);

        const formData = new FormData();
        formData.append("form_type", "job_position");
        formData.append("name", inputs.name);
        formData.append("mobile_number", inputs.mobile_number);
        formData.append("email", inputs.email);
        formData.append("cover_letter", inputs.cover_letter);
        formData.append("applied_position", inputs.applied_position);
        if (fileRef) {
            formData.append("file", fileRef);
        }
        // console.log(...formData, "kjbjkbjk")
        const resp = await _send_subscriber_email(formData);

        if (resp.code === 200) {
            enqueueSnackbar('Your job application has been submitted successfully!', { variant: "success" });
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
                <CircularProgress sx={{ color: "var(--wb-website-theme-secondary-color)" }} />

            </div>
        );
    }

    return (
        <section className="contact_1 mt-3 mt-lg-4 pt-60 pb-60">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <div className="text-center text-lg-start form-main-wrapper">
                            <h4>Job Application Form</h4>
                            <h2>Please <span className='font-style'>Fill Out the Form Below</span> to Submit Your <span className='font-style'>Job Application!</span></h2>
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
                                                borderBottomColor: 'var(--wb-menu-hover-color)',
                                            },
                                            '& .MuiInputLabel-root.Mui-focused': {
                                                color: 'var(--wb-menu-hover-color)',
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
                                                borderBottomColor: 'var(--wb-menu-hover-color)',
                                            },
                                            '& .MuiInputLabel-root.Mui-focused': {
                                                color: 'var(--wb-menu-hover-color)',
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
                                                borderBottomColor: 'var(--wb-menu-hover-color)',
                                            },
                                            '& .MuiInputLabel-root.Mui-focused': {
                                                color: 'var(--wb-menu-hover-color)',
                                            },
                                        }} />
                                </div>
                                <div className="col-md-6  wp-mt-20">

                                    <TextField label="Applied Position" variant="standard"
                                        name='applied_position'
                                        id="applied_position"
                                        value={inputs?.applied_position}
                                        onChange={handleChangeInputsState}
                                        fullWidth required sx={{
                                            '& .MuiInput-underline:after': {
                                                borderBottomColor: 'var(--wb-menu-hover-color)',
                                            },
                                            '& .MuiInputLabel-root.Mui-focused': {
                                                color: 'var(--wb-menu-hover-color)',
                                            },
                                        }} />
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
                                    <TextField id="cover_letter" label="Cover Letter" variant="standard"
                                        name="cover_letter"
                                        value={inputs.cover_letter}
                                        onChange={handleChangeInputsState}
                                        required fullWidth multiline
                                        rows={4} sx={{
                                            '& .MuiInput-underline:after': {
                                                borderBottomColor: 'var(--wb-menu-hover-color)',
                                            },
                                            '& .MuiInputLabel-root.Mui-focused': {
                                                color: 'var(--wb-menu-hover-color)',
                                            },
                                        }} />

                                </div>
                            </div>
                            <div className="row justify-content-center wp-mt-20 text-center">
                                <div className='col-6 col-md-12'>
                                    <button type="submit" className="w-100 contained-button  border-0">
                                        <span>Submit</span>
                                    </button>


                                </div>
                            </div>

                        </form>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default CareerSection;