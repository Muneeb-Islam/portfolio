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
                    <div className='tab-heading text-center'>
                        {/* <p>Our Work</p> */}
                        <h2>Portfolio</h2>
                    </div>
                    <Box sx={{ width: '100%', typography: 'body1' }}>
                        <TabContext value={value}>
                            <div className='row align-items-center wp-mt-40'>
                                {/* <div className='col-lg-6 tab-heading'>
                                    <p>Our Work</p>
                                    <h1>Portfolio</h1>
                                </div> */}
                                <div className='col-lg-12 pt-3 pt-lg-0'>
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
                                            <a href="/portfolio-detail">
                                                <img src="/assets/app-img1.png" alt="" className='img-fluid' />
                                            </a>
                                        </div>
                                        <div className="item-info">
                                            <h4><a href="/portfolio-detail" target="_blank">Seamless Connectivity</a></h4>
                                            <p>ios, design</p>
                                        </div>
                                    </div>
                                    <div className='col-md-6 col-lg-4 pt-3 pt-lg-5'>
                                        <div className='item-image'>
                                            <a href="/portfolio-detail">
                                                <img src="/assets/app-img2.png" alt="" className='img-fluid' />
                                            </a>
                                        </div>
                                        <div className="item-info">
                                            <h4>
                                                <a href="/portfolio-detail" target="_blank">Smart Living, Simplified</a>
                                            </h4>
                                            <p>ios, design</p>
                                        </div>
                                    </div>
                                    <div className='col-md-6 col-lg-4 pt-3 pt-lg-5'>
                                        <div className='item-image'>
                                            <a href="/portfolio-detail">
                                                <img src="/assets/app-img3.png" alt="" className='img-fluid' />
                                            </a>
                                        </div>
                                        <div className="item-info">
                                            <h4>
                                                <a href="/portfolio-detail">Power in Your Pocket</a>
                                            </h4>
                                            <p>ios, design</p>
                                        </div>
                                    </div>
                                    <div className='col-md-6 col-lg-4 pt-3 pt-lg-5'>
                                        <div className='item-image'>
                                            <a href="/portfolio-detail">
                                                <img src="/assets/app-img4.png" alt="" className='img-fluid' />
                                            </a>
                                        </div>
                                        <div className="item-info">
                                            <h4>
                                                <a href="/portfolio-detail" target="_blank">Tap. Explore. Enjoy.</a>
                                            </h4>
                                            <p>ios, design</p>
                                        </div>
                                    </div>
                                    <div className='col-md-6 col-lg-4 pt-3 pt-lg-5'>
                                        <div className='item-image'>
                                            <a href="/portfolio-detail">
                                                <img src="/assets/app-img5.png" alt="" className='img-fluid' />
                                            </a>
                                        </div>
                                        <div className="item-info">
                                            <h4>
                                                <a href="/portfolio-detail" target="_blank">Experience Innovation</a>
                                            </h4>
                                            <p>ios, design</p>
                                        </div>
                                    </div>
                                    <div className='col-md-6 col-lg-4 pt-3 pt-lg-5'>
                                        <div className='item-image'>
                                            <a href="/portfolio-detail">
                                                <img src="/assets/app-img6.png" alt="" className='img-fluid' />
                                            </a>
                                        </div>
                                        <div className="item-info">
                                            <h4>
                                                <a href="/portfolio-detail" target="_blank">Next-Gen Convenience</a>
                                            </h4>
                                            <p>ios, design</p>
                                        </div>
                                    </div>
                                    <div className='col-md-6 col-lg-4 pt-3 pt-lg-5'>
                                        <div className='item-image'>
                                            <a href="/portfolio-detail">
                                                <img src="/assets/app-img7.png" alt="" className='img-fluid' />
                                            </a>
                                        </div>
                                        <div className="item-info">
                                            <h4>
                                                <a href="/portfolio-detail" target="_blank">Design That Delivers</a>
                                            </h4>
                                            <p>Php Responsive Template</p>
                                        </div>
                                    </div>
                                    <div className='col-md-6 col-lg-4 pt-3 pt-lg-5'>
                                        <div className='item-image'>
                                            <a href="/portfolio-detail">
                                                <img src="/assets/app-img8.png" alt="" className='img-fluid' />
                                            </a>
                                        </div>
                                        <div className="item-info">
                                            <h4>
                                                <a href="/portfolio-detail" target="_blank">Built for Impact</a>
                                            </h4>
                                            <p>Responsive Website</p>
                                        </div>
                                    </div>
                                    <div className='col-md-6 col-lg-4 pt-3 pt-lg-5'>
                                        <div className='item-image'>
                                            <a href="/portfolio-detail">
                                                <img src="/assets/app-img9.png" alt="" className='img-fluid' />
                                            </a>
                                        </div>
                                        <div className="item-info">
                                            <h4>
                                                <a href="/portfolio-detail" target="_blank">Web Power, Unleashed</a>
                                            </h4>
                                            <p>Responsive Website</p>
                                        </div>
                                    </div>
                                    <div className='col-md-6 col-lg-4 pt-3 pt-lg-5'>
                                        <div className='item-image'>
                                            <a href="/portfolio-detail">
                                                <img src="/assets/app-img10.png" alt="" className='img-fluid' />
                                            </a>
                                        </div>
                                        <div className="item-info">
                                            <h4>
                                                <a href="/portfolio-detail" target="_blank">Crafted for Growth</a>
                                            </h4>
                                            <p>Responsive Website</p>
                                        </div>
                                    </div>
                                    <div className='col-md-6 col-lg-4 pt-3 pt-lg-5'>
                                        <div className='item-image'>
                                            <a href="/portfolio-detail">
                                                <img src="/assets/app-img11.png" alt="" className='img-fluid' />
                                            </a>
                                        </div>
                                        <div className="item-info">
                                            <h4>
                                                <a href="/portfolio-detail" target="_blank">Where Ideas Go Live</a>
                                            </h4>
                                            <p>Responsive Website</p>
                                        </div>
                                    </div>
                                </div>
                            </TabPanel>
                            <TabPanel value="2">
                                <div className='row'>
                                    <div className='col-md-6 col-lg-4 pt-3 pt-lg-5'>
                                        <div className='item-image'>
                                            <a href="/portfolio-detail">
                                                <img src="/assets/app-img7.png" alt="" className='img-fluid' />
                                            </a>
                                        </div>
                                        <div className="item-info">
                                            <h4>
                                                <a href="/portfolio-detail" target="_blank">Design That Delivers</a>
                                            </h4>
                                            <p>Php Responsive Template</p>
                                        </div>
                                    </div>
                                    <div className='col-md-6 col-lg-4 pt-3 pt-lg-5'>
                                        <div className='item-image'>
                                            <a href="/portfolio-detail">
                                                <img src="/assets/app-img8.png" alt="" className='img-fluid' />
                                            </a>
                                        </div>
                                        <div className="item-info">
                                            <h4>
                                                <a href="/portfolio-detail" target="_blank">Built for Impact</a>
                                            </h4>
                                            <p>Responsive Website</p>
                                        </div>
                                    </div>
                                    <div className='col-md-6 col-lg-4 pt-3 pt-lg-5'>
                                        <div className='item-image'>
                                            <a href="/portfolio-detail">
                                                <img src="/assets/app-img9.png" alt="" className='img-fluid' />
                                            </a>
                                        </div>
                                        <div className="item-info">
                                            <h4>
                                                <a href="/portfolio-detail" target="_blank">Web Power, Unleashed</a>
                                            </h4>
                                            <p>Responsive Website</p>
                                        </div>
                                    </div>
                                    <div className='col-md-6 col-lg-4 pt-3 pt-lg-5'>
                                        <div className='item-image'>
                                            <a href="/portfolio-detail">
                                                <img src="/assets/app-img10.png" alt="" className='img-fluid' />
                                            </a>
                                        </div>
                                        <div className="item-info">
                                            <h4>
                                                <a href="/portfolio-detail" target="_blank">Crafted for Growth</a>
                                            </h4>
                                            <p>Responsive Website</p>
                                        </div>
                                    </div>
                                    <div className='col-md-6 col-lg-4 pt-3 pt-lg-5'>
                                        <div className='item-image'>
                                            <a href="/portfolio-detail">
                                                <img src="/assets/app-img11.png" alt="" className='img-fluid' />
                                            </a>
                                        </div>
                                        <div className="item-info">
                                            <h4>
                                                <a href="/portfolio-detail" target="_blank">Where Ideas Go Live</a>
                                            </h4>
                                            <p>Responsive Website</p>
                                        </div>
                                    </div>
                                </div>
                            </TabPanel>
                            <TabPanel value="3">
                                <div className='row'>
                                    <div className='col-md-6 col-lg-4 pt-3 pt-lg-5'>
                                        <div className='item-image'>
                                            <a href="/portfolio-detail">
                                                <img src="/assets/app-img1.png" alt="" className='img-fluid' />
                                            </a>
                                        </div>
                                        <div className="item-info">
                                            <h4><a href="/portfolio-detail" target="_blank">Seamless Connectivity</a></h4>
                                            <p>ios, design</p>
                                        </div>
                                    </div>
                                    <div className='col-md-6 col-lg-4 pt-3 pt-lg-5'>
                                        <div className='item-image'>
                                            <a href="/portfolio-detail">
                                                <img src="/assets/app-img2.png" alt="" className='img-fluid' />
                                            </a>
                                        </div>
                                        <div className="item-info">
                                            <h4>
                                                <a href="/portfolio-detail" target="_blank">Smart Living, Simplified</a>
                                            </h4>
                                            <p>ios, design</p>
                                        </div>
                                    </div>
                                    <div className='col-md-6 col-lg-4 pt-3 pt-lg-5'>
                                        <div className='item-image'>
                                            <a href="/portfolio-detail">
                                                <img src="/assets/app-img3.png" alt="" className='img-fluid' />
                                            </a>
                                        </div>
                                        <div className="item-info">
                                            <h4>
                                                <a href="/portfolio-detail">Power in Your Pocket</a>
                                            </h4>
                                            <p>ios, design</p>
                                        </div>
                                    </div>
                                    <div className='col-md-6 col-lg-4 pt-3 pt-lg-5'>
                                        <div className='item-image'>
                                            <a href="/portfolio-detail">
                                                <img src="/assets/app-img4.png" alt="" className='img-fluid' />
                                            </a>
                                        </div>
                                        <div className="item-info">
                                            <h4>
                                                <a href="/portfolio-detail" target="_blank">Tap. Explore. Enjoy.</a>
                                            </h4>
                                            <p>ios, design</p>
                                        </div>
                                    </div>
                                    <div className='col-md-6 col-lg-4 pt-3 pt-lg-5'>
                                        <div className='item-image'>
                                            <a href="/portfolio-detail">
                                                <img src="/assets/app-img5.png" alt="" className='img-fluid' />
                                            </a>
                                        </div>
                                        <div className="item-info">
                                            <h4>
                                                <a href="/portfolio-detail" target="_blank">Experience Innovation</a>
                                            </h4>
                                            <p>ios, design</p>
                                        </div>
                                    </div>
                                    <div className='col-md-6 col-lg-4 pt-3 pt-lg-5'>
                                        <div className='item-image'>
                                            <a href="/portfolio-detail">
                                                <img src="/assets/app-img6.png" alt="" className='img-fluid' />
                                            </a>
                                        </div>
                                        <div className="item-info">
                                            <h4>
                                                <a href="/portfolio-detail" target="_blank">Next-Gen Convenience</a>
                                            </h4>
                                            <p>ios, design</p>
                                        </div>
                                    </div></div>
                            </TabPanel>
                            <TabPanel value="4">
                                <div className='row'>
                                    <div className='col-md-6 col-lg-4 pt-3 pt-lg-5'>
                                        <div className='item-image'>
                                            <a href="/portfolio-detail">
                                                <img src="/assets/app-img7.png" alt="" className='img-fluid' />
                                            </a>
                                        </div>
                                        <div className="item-info">
                                            <h4>
                                                <a href="/portfolio-detail" target="_blank">Design That Delivers</a>
                                            </h4>
                                            <p>Php Responsive Template</p>
                                        </div>
                                    </div>
                                    <div className='col-md-6 col-lg-4 pt-3 pt-lg-5'>
                                        <div className='item-image'>
                                            <a href="/portfolio-detail">
                                                <img src="/assets/app-img8.png" alt="" className='img-fluid' />
                                            </a>
                                        </div>
                                        <div className="item-info">
                                            <h4>
                                                <a href="/portfolio-detail" target="_blank">Built for Impact</a>
                                            </h4>
                                            <p>Responsive Website</p>
                                        </div>
                                    </div>
                                    <div className='col-md-6 col-lg-4 pt-3 pt-lg-5'>
                                        <div className='item-image'>
                                            <a href="/portfolio-detail">
                                                <img src="/assets/app-img9.png" alt="" className='img-fluid' />
                                            </a>
                                        </div>
                                        <div className="item-info">
                                            <h4>
                                                <a href="/portfolio-detail" target="_blank">Web Power, Unleashed</a>
                                            </h4>
                                            <p>Responsive Website</p>
                                        </div>
                                    </div>
                                    <div className='col-md-6 col-lg-4 pt-3 pt-lg-5'>
                                        <div className='item-image'>
                                            <a href="/portfolio-detail">
                                                <img src="/assets/app-img10.png" alt="" className='img-fluid' />
                                            </a>
                                        </div>
                                        <div className="item-info">
                                            <h4>
                                                <a href="/portfolio-detail" target="_blank">Crafted for Growth</a>
                                            </h4>
                                            <p>Responsive Website</p>
                                        </div>
                                    </div>
                                    <div className='col-md-6 col-lg-4 pt-3 pt-lg-5'>
                                        <div className='item-image'>
                                            <a href="/portfolio-detail">
                                                <img src="/assets/app-img11.png" alt="" className='img-fluid' />
                                            </a>
                                        </div>
                                        <div className="item-info">
                                            <h4>
                                                <a href="/portfolio-detail" target="_blank">Where Ideas Go Live</a>
                                            </h4>
                                            <p>Responsive Website</p>
                                        </div>
                                    </div>
                                </div>
                            </TabPanel>
                            <TabPanel value="5">
                                <div className='row'>
                                    <div className='col-md-6 col-lg-4 pt-3 pt-lg-5'>
                                        <div className='item-image'>
                                            <a href="/portfolio-detail">
                                                <img src="/assets/app-img1.png" alt="" className='img-fluid' />
                                            </a>
                                        </div>
                                        <div className="item-info">
                                            <h4><a href="/portfolio-detail" target="_blank">Seamless Connectivity</a></h4>
                                            <p>ios, design</p>
                                        </div>
                                    </div>
                                    <div className='col-md-6 col-lg-4 pt-3 pt-lg-5'>
                                        <div className='item-image'>
                                            <a href="/portfolio-detail">
                                                <img src="/assets/app-img2.png" alt="" className='img-fluid' />
                                            </a>
                                        </div>
                                        <div className="item-info">
                                            <h4>
                                                <a href="/portfolio-detail" target="_blank">Smart Living, Simplified</a>
                                            </h4>
                                            <p>ios, design</p>
                                        </div>
                                    </div>
                                    <div className='col-md-6 col-lg-4 pt-3 pt-lg-5'>
                                        <div className='item-image'>
                                            <a href="/portfolio-detail">
                                                <img src="/assets/app-img3.png" alt="" className='img-fluid' />
                                            </a>
                                        </div>
                                        <div className="item-info">
                                            <h4>
                                                <a href="/portfolio-detail">Power in Your Pocket</a>
                                            </h4>
                                            <p>ios, design</p>
                                        </div>
                                    </div>
                                    <div className='col-md-6 col-lg-4 pt-3 pt-lg-5'>
                                        <div className='item-image'>
                                            <a href="/portfolio-detail">
                                                <img src="/assets/app-img4.png" alt="" className='img-fluid' />
                                            </a>
                                        </div>
                                        <div className="item-info">
                                            <h4>
                                                <a href="/portfolio-detail" target="_blank">Tap. Explore. Enjoy.</a>
                                            </h4>
                                            <p>ios, design</p>
                                        </div>
                                    </div>
                                    <div className='col-md-6 col-lg-4 pt-3 pt-lg-5'>
                                        <div className='item-image'>
                                            <a href="/portfolio-detail">
                                                <img src="/assets/app-img5.png" alt="" className='img-fluid' />
                                            </a>
                                        </div>
                                        <div className="item-info">
                                            <h4>
                                                <a href="/portfolio-detail" target="_blank">Experience Innovation</a>
                                            </h4>
                                            <p>ios, design</p>
                                        </div>
                                    </div>
                                    <div className='col-md-6 col-lg-4 pt-3 pt-lg-5'>
                                        <div className='item-image'>
                                            <a href="/portfolio-detail">
                                                <img src="/assets/app-img6.png" alt="" className='img-fluid' />
                                            </a>
                                        </div>
                                        <div className="item-info">
                                            <h4>
                                                <a href="/portfolio-detail" target="_blank">Next-Gen Convenience</a>
                                            </h4>
                                            <p>ios, design</p>
                                        </div>
                                    </div></div>
                            </TabPanel>
                        </TabContext>
                    </Box>

                </div>
            </div>
        </section>
    );
};

export default PortfolioSection;