import { TextField, Typography } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { useState } from 'react';

const ContactSection = () => {
    const [fileName, setFileName] = useState('');

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        setFileName(file ? file.name : '');
    };


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
                        <form action="">
                            <div className="row">
                                <div className="col-md-6 wp-mt-20">

                                    <TextField id="outlined-basic" label="Enter Name" variant="standard" required fullWidth
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

                                    <TextField id="outlined-basic" label="Enter Email" variant="standard" required fullWidth sx={{
                                        '& .MuiInput-underline:after': {
                                            borderBottomColor: '#ff7a3a',
                                        },
                                        '& .MuiInputLabel-root.Mui-focused': {
                                            color: '#ff7a3a',
                                        },
                                    }} />
                                </div>
                                <div className="col-md-6  wp-mt-20">

                                    <TextField id="outlined-basic" label="Enter Mobile" variant="standard" required fullWidth sx={{
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
                                            id="demo-simple-select"
                                            variant='standard'
                                        // value={age}
                                        // label="Age"
                                        // onChange={handleChange}
                                        >
                                            <MenuItem value={10}>Web</MenuItem>
                                            <MenuItem value={20}>Mobile App</MenuItem>
                                            <MenuItem value={30}>E Commerce</MenuItem>
                                            <MenuItem value={40}>CMS System</MenuItem>
                                            <MenuItem value={50}>CRM System</MenuItem>
                                        </Select>
                                    </FormControl>

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
                                    <TextField id="outlined-basic" label="Enter Message" variant="standard" required fullWidth multiline
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
                            <div className="row  wp-mt-20 text-center">
                                <a href="#" class="mt-3 mt-lg-0 banner-solid-btn wp-pb-14 wp-pt-14 wp-pl-18 wp-pr-18"><span>Submit</span></a>
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