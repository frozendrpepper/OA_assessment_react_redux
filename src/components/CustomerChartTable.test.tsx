import React from 'react';
import { render, screen } from '@testing-library/react';
import CustomerChartTable from './CustomerChartTable';

const MOCK_PROPS = {sales: [
    {
        weekEnding: '2024-01-01',
        retailSales: 1,
        wholesaleSales: 1,
        unitsSold: 1,
        retailerMargin: 1
    },
    {
        weekEnding: '2024-05-05',
        retailSales: 5,
        wholesaleSales: 5,
        unitsSold: 5,
        retailerMargin: 5
    },
    {
        weekEnding: '2024-10-10',
        retailSales: 10,
        wholesaleSales: 10,
        unitsSold: 10,
        retailerMargin: 10
    },
]};

describe('CustomerChartTable tests', () => {
    it('Table header should display', () => {
        render(<CustomerChartTable customerSales={MOCK_PROPS} />);
       
        expect(screen.getByText('WEEK ENDING')).toBeInTheDocument();
        expect(screen.getByText('RETAIL SALES')).toBeInTheDocument();
        expect(screen.getByText('WHOLESALE SALES')).toBeInTheDocument();
        expect(screen.getByText('UNITS SOLD')).toBeInTheDocument();
        expect(screen.getByText('RETAILER MARGIN')).toBeInTheDocument();
    });

    it('Verify that chart canvas is present', () => {
        // Chart.js components do not display details with render
        // Will just confirm the upper div is rendered
        render(<CustomerChartTable customerSales={MOCK_PROPS} />);
        // screen.debug(undefined, 300000);
        expect(screen.getByTestId('line-chart')).toBeInTheDocument();
    });

    it('Verify that the table dates show up correctly', () => {
        // Chart.js components do not display details with render
        // Will just confirm the upper div is rendered
        render(<CustomerChartTable customerSales={MOCK_PROPS} />);

        expect(screen.getByText('2024-01-01')).toBeInTheDocument();
        expect(screen.getByText('2024-05-05')).toBeInTheDocument();
        expect(screen.getByText('2024-10-10')).toBeInTheDocument();
    });
});