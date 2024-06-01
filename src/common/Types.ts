export type ReviewType = {
    customer: string;
    review: string;
    score: number;
}

export type SalesType = {
    weekEnding: string;
    retailSales: number;
    wholesaleSales: number;
    unitsSold: number;
    retailerMargin: number;
}

export type CustomerDataType = {
    id: string;
    title: string;
    image: string;
    subtitle: string;
    brand: string;
    reviews: ReviewType[];
    retailer: string;
    details: string[];
    tags: string[];
    sales: SalesType[];
}

export type CustomerDetailsType = {
    image: string;
    subtitle: string;
    brand: string;
    details: string[];
    tags: string[];
}
