import React from 'react';
import '../style/CustomerDetails.css';
import { CustomerDetailsType } from '../common/Types';
import { Grid } from '@mui/material';

type CustomerDetailsPropType = {
    customerDetails: CustomerDetailsType;
}

export default function CustomerDetails(props: CustomerDetailsPropType) {
    const {
        brand,
        details,
        image,
        subtitle,
        tags
    } = props.customerDetails;

    return (
        <div className='customer-details-container'>
            <div className='customer-logo-container'>
                <img src={image} alt="Customer logo" className='customer-logo' />
            </div>
            <div 
                className='customer-brand-container' 
                data-testid='customer-brand-container'
            >
                {brand}
            </div>
            <div 
                className='customer-subtitle-container'
                data-testid='customer-subtitle-container'
            >
                {subtitle}
            </div>
            <hr />
            <Grid container className='customer-tag-container'>
                {tags.map(tag => {
                    return (
                        <>
                            <Grid item xs={3} ml={1} mr={1} mt={2} className='tag-box'>
                                {tag}
                            </Grid>
                        </>
                    );
                })}
            </Grid>
            <hr />
        </div>
    )
}
