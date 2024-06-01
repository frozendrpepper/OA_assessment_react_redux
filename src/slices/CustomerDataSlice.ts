import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CustomerDataType } from '../common/Types';

const initialState: { data: CustomerDataType } = {
    data: {
        id: '',
        title: '',
        image: '',
        subtitle: '',
        brand: '',
        reviews: [],
        retailer: '',
        details: [],
        tags: [],
        sales: [],
    }, 
};

// The first arg state is something Redux automatically
// pushes in
export const customerDataSlice = createSlice({
    name: 'customerData',
    initialState: initialState,
    reducers: { 
        fetchCustomerData: (state, action: PayloadAction<CustomerDataType[]>) => {
            state.data = action.payload[0];
        },
        resetCustomerData: (state) => {
            state.data = {...initialState.data};
        }
    }
});

// Export the slice to hook up to the store
export default customerDataSlice.reducer;
export const { fetchCustomerData, resetCustomerData } = customerDataSlice.actions;
