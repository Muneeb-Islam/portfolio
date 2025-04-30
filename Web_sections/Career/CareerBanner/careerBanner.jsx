import { TextField, Typography } from '@mui/material';
import { useState } from 'react';
const CareerSection = () => {
    const [fileName, setFileName] = useState('');

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        setFileName(file ? file.name : '');
    };

    return (
        <section className="contact_1 main_section pt-2 pt-lg-5">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-7">
                        <div className="wb-editor-block text-start form-main-wrapper">
                            <h6>Job Application Form</h6>
                            <h1>Please Fill Out the Form Below to Submit Your Job Application!</h1>
                        </div>
                        <form action="">
                            <div className="row">
                                <div className="col-md-6 wp-mt-20">
                                    <TextField id="standard-basic" label="Enter Name" variant="standard" fullWidth required sx={{
                                        '& .MuiInput-underline:after': {
                                            borderBottomColor: '#ff7a3a',
                                        },
                                        '& .MuiInputLabel-root.Mui-focused': {
                                            color: '#ff7a3a',
                                        },
                                    }} />
                                </div>
                                <div className="col-md-6  wp-mt-20">
                                    <TextField id="standard-basic" label="Enter Email" variant="standard" fullWidth required sx={{
                                        '& .MuiInput-underline:after': {
                                            borderBottomColor: '#ff7a3a',
                                        },
                                        '& .MuiInputLabel-root.Mui-focused': {
                                            color: '#ff7a3a',
                                        },
                                    }} />
                                </div>
                                <div className="col-md-6  wp-mt-20">
                                    <TextField id="standard-basic" label="Enter Mobile" variant="standard" fullWidth required sx={{
                                        '& .MuiInput-underline:after': {
                                            borderBottomColor: '#ff7a3a',
                                        },
                                        '& .MuiInputLabel-root.Mui-focused': {
                                            color: '#ff7a3a',
                                        },
                                    }} />
                                </div>
                                <div className="col-md-6  wp-mt-20">

                                    <TextField id="standard-basic" label="Applied Position" variant="standard" fullWidth required sx={{
                                        '& .MuiInput-underline:after': {
                                            borderBottomColor: '#ff7a3a',
                                        },
                                        '& .MuiInputLabel-root.Mui-focused': {
                                            color: '#ff7a3a',
                                        },
                                    }} />
                                </div>
                                <div className='col-12 wp-mt-20'>
                                    <span style={{ fontWeight: "400" }}>Upload Resume *</span>
                                    <div className='upload-files mt-3'>
                                        <input
                                            accept="*"
                                            style={{ display: 'none' }}
                                            id="upload-file"
                                            className=''
                                            type="file"
                                            onChange={handleFileChange}
                                        />
                                        <label htmlFor="upload-file">
                                            <button className='form-btn'>
                                                Choose File
                                            </button>
                                        </label>
                                        <Typography variant="body2" className='ms-1' sx={{ fontWeight: "400", fontSize: "1rem" }}>
                                            {fileName || 'No file chosen'}
                                        </Typography>

                                    </div>
                                </div>
                                <div className="col-md-12  wp-mt-20">
                                    <TextField id="standard-basic" label="Cover Letter" variant="standard" fullWidth multiline
                                        rows={4} required sx={{
                                            '& .MuiInput-underline:after': {
                                                borderBottomColor: '#ff7a3a',
                                            },
                                            '& .MuiInputLabel-root.Mui-focused': {
                                                color: '#ff7a3a',
                                            },
                                        }} />

                                </div>
                            </div>
                            <div className="row  wp-mt-20 text-center">
                                <a href="#" class="mt-3 mt-lg-0 banner-solid-btn wp-pb-14 wp-pt-14 wp-pl-18 wp-pr-18"><span>Submit</span></a>
                            </div>

                        </form>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default CareerSection;