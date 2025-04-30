import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import * as React from 'react';
const PortfolioSection = () => {
    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <section className='pt-3 pt-lg-5 portfolio_wrapper'
        >
            <div className="container">
                <div className="row justify-content-center">
                    <Box sx={{ width: '100%', typography: 'body1' }}>
                        <TabContext value={value}>
                            <div className='row align-items-center'>
                                <div className='col-lg-6 tab-heading'>
                                    <p>Our Work</p>
                                    <h1>Portfolio</h1>
                                </div>
                                <div className='col-lg-6 pt-3 pt-lg-0'>
                                    <Box sx={{ overflowX: 'auto', whiteSpace: 'nowrap' }}>
                                        <TabList
                                            onChange={handleChange}
                                            aria-label="Styled tabs"
                                            TabIndicatorProps={{ style: { display: 'none' } }}
                                            sx={{
                                                display: 'inline-flex', // Make sure TabList does not wrap
                                                '& .MuiTab-root': {
                                                    textTransform: 'none',
                                                    border: '1px solid #ccc',
                                                    borderRadius: '3.125rem',
                                                    mx: 0.5,
                                                    px: 2,
                                                    py: 1,
                                                    color: '#333',
                                                    backgroundColor: '#f9f9f9',
                                                    fontWeight: 500,
                                                    '&.Mui-selected': {
                                                        backgroundColor: '#1b8e3d',
                                                        color: '#fff',
                                                        borderColor: '#1b8e3d',
                                                    },
                                                    '&:hover': {
                                                        backgroundColor: '#ff7a3a',
                                                        borderColor: '#ff7a3a',
                                                    },
                                                },
                                            }}
                                        >
                                            <Tab label="All" value="1" />
                                            <Tab label="Website" value="2" />
                                            <Tab label="Mobile App" value="3" />
                                            <Tab label="CMS System" value="4" />
                                            <Tab label="CRM System" value="5" />
                                        </TabList>
                                    </Box>

                                </div>
                            </div>
                            <TabPanel value="1" sx={{ padding: 0 }} className='pt-0 pt-lg-2'>
                                <div className='row'>
                                    <div className='col-md-6 col-lg-4 pt-3 pt-lg-5'>
                                        <div className='item-image'>
                                            <a href="#">
                                                <img src="/assets/app-img1.png" alt="" className='img-fluid' />
                                            </a>
                                        </div>
                                        <div className="item-info">
                                            <h4><a href="https://play.google.com/store/apps/details?id=com.revolve" target="_blank">Revolve Dating</a></h4>
                                            <p>ios, design</p>
                                        </div>
                                    </div>
                                    <div className='col-md-6 col-lg-4 pt-3 pt-lg-5'>
                                        <div className='item-image'>
                                            <a href="#">
                                                <img src="/assets/app-img2.png" alt="" className='img-fluid' />
                                            </a>
                                        </div>
                                        <div className="item-info">
                                            <h4>
                                                <a href="https://play.google.com/store/apps/details?id=shy7lo.com.shy7lo" target="_blank">Shy7lo</a>
                                            </h4>
                                            <p>ios, design</p>
                                        </div>
                                    </div>
                                    <div className='col-md-6 col-lg-4 pt-3 pt-lg-5'>
                                        <div className='item-image'>
                                            <a href="#">
                                                <img src="/assets/app-img3.png" alt="" className='img-fluid' />
                                            </a>
                                        </div>
                                        <div className="item-info">
                                            <h4>
                                                <a href="#">WeFix</a>
                                            </h4>
                                            <p>ios, design</p>
                                        </div>
                                    </div>
                                    <div className='col-md-6 col-lg-4 pt-3 pt-lg-5'>
                                        <div className='item-image'>
                                            <a href="#">
                                                <img src="/assets/app-img4.png" alt="" className='img-fluid' />
                                            </a>
                                        </div>
                                        <div className="item-info">
                                            <h4>
                                                <a href="https://play.google.com/store/apps/details?id=app.mangle.com" target="_blank">Mangle</a>
                                            </h4>
                                            <p>ios, design</p>
                                        </div>
                                    </div>
                                    <div className='col-md-6 col-lg-4 pt-3 pt-lg-5'>
                                        <div className='item-image'>
                                            <a href="#">
                                                <img src="/assets/app-img5.png" alt="" className='img-fluid' />
                                            </a>
                                        </div>
                                        <div className="item-info">
                                            <h4>
                                                <a href="https://play.google.com/store/apps/details?id=com.kindminds" target="_blank">Informed Minds</a>
                                            </h4>
                                            <p>ios, design</p>
                                        </div>
                                    </div>
                                    <div className='col-md-6 col-lg-4 pt-3 pt-lg-5'>
                                        <div className='item-image'>
                                            <a href="#">
                                                <img src="/assets/app-img6.png" alt="" className='img-fluid' />
                                            </a>
                                        </div>
                                        <div className="item-info">
                                            <h4>
                                                <a href="https://play.google.com/store/apps/details?id=com.idillionaire.app" target="_blank">Idillionaire</a>
                                            </h4>
                                            <p>ios, design</p>
                                        </div>
                                    </div>
                                    <div className='col-md-6 col-lg-4 pt-3 pt-lg-5'>
                                        <div className='item-image'>
                                            <a href="#">
                                                <img src="/assets/app-img7.jpg" alt="" className='img-fluid' />
                                            </a>
                                        </div>
                                        <div className="item-info">
                                            <h4>
                                                <a href="https://dynamitedigital.info" target="_blank">Dynamite Digital</a>
                                            </h4>
                                            <p>Dynamic Php Responsive Template</p>
                                        </div>
                                    </div>
                                    <div className='col-md-6 col-lg-4 pt-3 pt-lg-5'>
                                        <div className='item-image'>
                                            <a href="#">
                                                <img src="/assets/app-img8.jpg" alt="" className='img-fluid' />
                                            </a>
                                        </div>
                                        <div className="item-info">
                                            <h4>
                                                <a href="https://5678elite.training/" target="_blank">Elite Training</a>
                                            </h4>
                                            <p>Responsive Website</p>
                                        </div>
                                    </div>
                                    <div className='col-md-6 col-lg-4 pt-3 pt-lg-5'>
                                        <div className='item-image'>
                                            <a href="#">
                                                <img src="/assets/app-img9.jpg" alt="" className='img-fluid' />
                                            </a>
                                        </div>
                                        <div className="item-info">
                                            <h4>
                                                <a href="https://sarahcon.com/" target="_blank">Sarahcon</a>
                                            </h4>
                                            <p>Dynamic Responsive Website</p>
                                        </div>
                                    </div>
                                    <div className='col-md-6 col-lg-4 pt-3 pt-lg-5'>
                                        <div className='item-image'>
                                            <a href="#">
                                                <img src="/assets/app-img10.jpg" alt="" className='img-fluid' />
                                            </a>
                                        </div>
                                        <div className="item-info">
                                            <h4>
                                                <a href="http://irishlanguagelearning.com/" target="_blank">Irish Language Learning</a>
                                            </h4>
                                            <p>Dynamic Responsive Website</p>
                                        </div>
                                    </div>
                                    <div className='col-md-6 col-lg-4 pt-3 pt-lg-5'>
                                        <div className='item-image'>
                                            <a href="#">
                                                <img src="/assets/app-img11.jpg" alt="" className='img-fluid' />
                                            </a>
                                        </div>
                                        <div className="item-info">
                                            <h4>
                                                <a href="https://techfios.com/" target="_blank">Techfios</a>
                                            </h4>
                                            <p>Dynamic Responsive Website</p>
                                        </div>
                                    </div>
                                </div>
                            </TabPanel>
                            <TabPanel value="2">
                                <div className='row'>
                                    <div className='col-md-6 col-lg-4 pt-3 pt-lg-5'>
                                        <div className='item-image'>
                                            <a href="#">
                                                <img src="/assets/app-img7.jpg" alt="" className='img-fluid' />
                                            </a>
                                        </div>
                                        <div className="item-info">
                                            <h4>
                                                <a href="https://dynamitedigital.info" target="_blank">Dynamite Digital</a>
                                            </h4>
                                            <p>Dynamic Php Responsive Template</p>
                                        </div>
                                    </div>
                                    <div className='col-md-6 col-lg-4 pt-3 pt-lg-5'>
                                        <div className='item-image'>
                                            <a href="#">
                                                <img src="/assets/app-img8.jpg" alt="" className='img-fluid' />
                                            </a>
                                        </div>
                                        <div className="item-info">
                                            <h4>
                                                <a href="https://5678elite.training/" target="_blank">Elite Training</a>
                                            </h4>
                                            <p>Responsive Website</p>
                                        </div>
                                    </div>
                                    <div className='col-md-6 col-lg-4 pt-3 pt-lg-5'>
                                        <div className='item-image'>
                                            <a href="#">
                                                <img src="/assets/app-img9.jpg" alt="" className='img-fluid' />
                                            </a>
                                        </div>
                                        <div className="item-info">
                                            <h4>
                                                <a href="https://sarahcon.com/" target="_blank">Sarahcon</a>
                                            </h4>
                                            <p>Dynamic Responsive Website</p>
                                        </div>
                                    </div>
                                    <div className='col-md-6 col-lg-4 pt-3 pt-lg-5'>
                                        <div className='item-image'>
                                            <a href="#">
                                                <img src="/assets/app-img10.jpg" alt="" className='img-fluid' />
                                            </a>
                                        </div>
                                        <div className="item-info">
                                            <h4>
                                                <a href="http://irishlanguagelearning.com/" target="_blank">Irish Language Learning</a>
                                            </h4>
                                            <p>Dynamic Responsive Website</p>
                                        </div>
                                    </div>
                                    <div className='col-md-6 col-lg-4 pt-3 pt-lg-5'>
                                        <div className='item-image'>
                                            <a href="#">
                                                <img src="/assets/app-img11.jpg" alt="" className='img-fluid' />
                                            </a>
                                        </div>
                                        <div className="item-info">
                                            <h4>
                                                <a href="https://techfios.com/" target="_blank">Techfios</a>
                                            </h4>
                                            <p>Dynamic Responsive Website</p>
                                        </div>
                                    </div>
                                </div>
                            </TabPanel>
                            <TabPanel value="3">
                                <div className='row'>
                                    <div className='col-md-6 col-lg-4 pt-3 pt-lg-5'>
                                        <div className='item-image'>
                                            <a href="#">
                                                <img src="/assets/app-img1.png" alt="" className='img-fluid' />
                                            </a>
                                        </div>
                                        <div className="item-info">
                                            <h4><a href="https://play.google.com/store/apps/details?id=com.revolve" target="_blank">Revolve Dating</a></h4>
                                            <p>ios, design</p>
                                        </div>
                                    </div>
                                    <div className='col-md-6 col-lg-4 pt-3 pt-lg-5'>
                                        <div className='item-image'>
                                            <a href="#">
                                                <img src="/assets/app-img2.png" alt="" className='img-fluid' />
                                            </a>
                                        </div>
                                        <div className="item-info">
                                            <h4>
                                                <a href="https://play.google.com/store/apps/details?id=shy7lo.com.shy7lo" target="_blank">Shy7lo</a>
                                            </h4>
                                            <p>ios, design</p>
                                        </div>
                                    </div>
                                    <div className='col-md-6 col-lg-4 pt-3 pt-lg-5'>
                                        <div className='item-image'>
                                            <a href="#">
                                                <img src="/assets/app-img3.png" alt="" className='img-fluid' />
                                            </a>
                                        </div>
                                        <div className="item-info">
                                            <h4>
                                                <a href="#">WeFix</a>
                                            </h4>
                                            <p>ios, design</p>
                                        </div>
                                    </div>
                                    <div className='col-md-6 col-lg-4 pt-3 pt-lg-5'>
                                        <div className='item-image'>
                                            <a href="#">
                                                <img src="/assets/app-img4.png" alt="" className='img-fluid' />
                                            </a>
                                        </div>
                                        <div className="item-info">
                                            <h4>
                                                <a href="https://play.google.com/store/apps/details?id=app.mangle.com" target="_blank">Mangle</a>
                                            </h4>
                                            <p>ios, design</p>
                                        </div>
                                    </div>
                                    <div className='col-md-6 col-lg-4 pt-3 pt-lg-5'>
                                        <div className='item-image'>
                                            <a href="#">
                                                <img src="/assets/app-img5.png" alt="" className='img-fluid' />
                                            </a>
                                        </div>
                                        <div className="item-info">
                                            <h4>
                                                <a href="https://play.google.com/store/apps/details?id=com.kindminds" target="_blank">Informed Minds</a>
                                            </h4>
                                            <p>ios, design</p>
                                        </div>
                                    </div>
                                    <div className='col-md-6 col-lg-4 pt-3 pt-lg-5'>
                                        <div className='item-image'>
                                            <a href="#">
                                                <img src="/assets/app-img6.png" alt="" className='img-fluid' />
                                            </a>
                                        </div>
                                        <div className="item-info">
                                            <h4>
                                                <a href="https://play.google.com/store/apps/details?id=com.idillionaire.app" target="_blank">Idillionaire</a>
                                            </h4>
                                            <p>ios, design</p>
                                        </div>
                                    </div></div>
                            </TabPanel>
                            <TabPanel value="4"></TabPanel>
                            <TabPanel value="5"></TabPanel>
                        </TabContext>
                    </Box>

                </div>
            </div>
        </section>
    );
};

export default PortfolioSection;