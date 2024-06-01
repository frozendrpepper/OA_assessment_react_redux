import React, { useId } from 'react';
import '../style/CustomerChartTable.css';

import { SalesType } from '../common/Types';
import { Chart as ChartJS, registerables, Title, defaults } from 'chart.js/auto';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { Line } from 'react-chartjs-2';


type CustomerChartTablePropType = {
    customerSales: {sales: SalesType[]}
}

ChartJS.register(...registerables, Title);

export default function CustomerChartTable(props: CustomerChartTablePropType) {
    const columns = [
        {
            field: 'weekEnding',
            headerName: 'WEEK ENDING',
            flex: 1,
            minWidth: 150,
        },
        {
            field: 'retailSales',
            headerName: 'RETAIL SALES',
            flex: 1,
            minWidth: 150,
        },
        {
            field: 'wholesaleSales',
            headerName: 'WHOLESALE SALES',
            flex: 1,
            minWidth: 150,
        },
        {
            field: 'unitsSold',
            headerName: 'UNITS SOLD',
            flex: 1,
            minWidth: 150,
        },
        {
            field: 'retailerMargin',
            headerName: 'RETAILER MARGIN',
            flex: 1,
            minWidth: 150,
        },
    ];

    const rows = props.customerSales.sales.map((sale, index) => {
        return {id: index, ...sale};
    });

    return (
        <>
            <div className='chart-container'>
                <Line 
                    data-testid='line-chart'
                    options= {{
                        responsive: true,
                        scales: {
                            y: {
                                ticks: {
                                    display: false
                                },
                                grid: {
                                    display: false
                                }
                            }
                        },
                        plugins: {
                            title: {
                                align: 'start',
                                display: true,
                                text: 'Customer Sales Summary',
                                font: {
                                    size: 24
                                }
                            },
                            legend: {
                                align: 'start',
                                display: true,
                            }
                        },
                        layout: {
                            padding: 20
                        }
                    }}
                    data={{
                        labels: props.customerSales.sales.map(sale => 
                            new Date(sale.weekEnding).toLocaleString('default', { month: 'short' })
                        ),
                        datasets: [
                            {
                                label: 'Retail Sales',
                                data: props.customerSales.sales.map(sale => sale.retailSales),
                                tension: 0.5,
                                pointRadius: 0,
                                backgroundColor: '#ADD8E6',
                                borderColor: '#ADD8E6',
                                borderWidth: 2.5
                            },
                            {
                                label: 'Wholesale Sales',
                                data: props.customerSales.sales.map(sale => sale.wholesaleSales),
                                tension: 0.5,
                                pointRadius: 0,
                                backgroundColor: '#FF8488',
                                borderColor: '#FF8488',
                                borderWidth: 2
                            },
                        ]
                    }}
                    width={"100%"}
                    height={"30%"}
                />
            </div>
            <div className='table-container'>
                   <DataGrid 
                        rows={rows}
                        columns={columns}
                        initialState={{
                            pagination: {
                                paginationModel: {
                                    pageSize: 10,
                                }
                            }
                        }}
                        disableRowSelectionOnClick
                   />
            </div>
        </>
    )
}
