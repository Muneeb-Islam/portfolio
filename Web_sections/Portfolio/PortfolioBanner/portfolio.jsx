import { portfolioItems } from '@/Components/portfolioData/portfolioData';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import * as React from 'react';

const PortfolioSection = () => {
    const [value, setValue] = React.useState('All');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    // Get unique categories from portfolioItems
    const categories = [...new Set(portfolioItems.map(item => item.category))];

    // Filter items based on selected tab
    const filteredItems = value === 'All'
        ? portfolioItems
        : portfolioItems.filter(item => item.category === value);

    return (
        <section className='portfolio_wrapper mt-3 mt-lg-4 pb-60'>
            <div className="container">
                <div className="row justify-content-center">
                    <div className='tab-heading text-center'>
                        <h2>Portfolio</h2>
                    </div>
                    <Box sx={{ width: '100%', typography: 'body1' }}>
                        <TabContext value={value}>
                            <div className='row align-items-center wp-mt-40'>
                                <div className='col-lg-12 pt-3 pt-lg-0'>
                                    <Box sx={{ overflowX: 'auto', whiteSpace: 'nowrap' }}>
                                        <TabList
                                            onChange={handleChange}
                                            aria-label="Styled tabs"
                                            TabIndicatorProps={{ style: { display: 'none' } }}
                                            sx={{
                                                display: 'inline-flex',
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
                                                        backgroundColor: 'var(--wb-website-theme-secondary-color)',
                                                        color: '#fff',
                                                        borderColor: 'var(--wb-website-theme-secondary-color)',
                                                    },
                                                    '&:hover': {
                                                        backgroundColor: 'var(--wb-menu-hover-color)',
                                                        borderColor: 'var(--wb-menu-hover-color)',
                                                    },
                                                },
                                            }}
                                        >
                                            <Tab label="All" value="All" />
                                            {categories.map((category, index) => (
                                                <Tab label={category} value={category} key={index} />
                                            ))}
                                        </TabList>
                                    </Box>
                                </div>
                            </div>

                            <TabPanel value={value} sx={{ padding: 0 }} className='pt-0 pt-lg-2'>
                                <div className='row'>
                                    {filteredItems.map(item => (
                                        <div className='col-md-6 col-lg-4 pt-3 pt-lg-5' key={item.id}>
                                            <div className='item-image'>
                                                <a href={`/portfolio/${item.slug}`}>
                                                    <img src={item.image} alt={item.title} className='img-fluid' />
                                                </a>
                                            </div>
                                            <div className="item-info">
                                                <h3>
                                                    <a href={`/portfolio/${item.slug}`} target="_blank">{item.title}</a>
                                                </h3>
                                                <p>{item.shortDecription}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </TabPanel>
                        </TabContext>
                    </Box>
                </div>
            </div>
        </section>
    );
};

export default PortfolioSection;
