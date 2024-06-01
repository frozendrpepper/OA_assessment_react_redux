import React, { useEffect } from 'react';
import '../style/CustomerDataWrapper.css';

import { CustomerDataType, CustomerDetailsType, SalesType } from '../common/Types';
import CustomerJson from '../data/stackline_frontend_assessment_data_2021.json';
import { fetchCustomerData, resetCustomerData } from '../slices/CustomerDataSlice';
import { Box, Grid } from '@mui/material';
import { RootState } from '../app/store';
import { useDispatch, useSelector } from 'react-redux';
import CustomerChartTable from './CustomerChartTable';
import CustomerDetails from './CustomerDetails';

export default function CustomerDataWrapper() {
    const dispatch = useDispatch();
    const customerData: CustomerDataType = useSelector(
        (state: RootState) => state.customerData.data);

    const customerDetails: CustomerDetailsType = {
        image: customerData.image, 
        subtitle: customerData.subtitle,
        brand: customerData.brand,
        details: customerData.details,
        tags: customerData.tags
    };

    const customerSales: {sales: SalesType[]} = {
        sales: customerData.sales
    }

    useEffect(() => {
        dispatch(fetchCustomerData(CustomerJson as unknown as CustomerDataType[]));

        return () => {
            resetCustomerData();
        }
    }, []);

    return (
        <Box>
            <Grid container alignItems="stretch">
                <Grid item xs={2.5} pl={2} mt={4} className='customer-details-grid'>
                    <CustomerDetails customerDetails={customerDetails}/>
                </Grid>
                <Grid item xs={9.5} pl={2} pr={2} mt={4} className='customer-chart-table-grid'>
                    <CustomerChartTable customerSales={customerSales}/>
                </Grid>
            </Grid>
        </Box>
    );
}
