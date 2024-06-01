import { store } from "../app/store";
import { customerDataSlice, fetchCustomerData, resetCustomerData } from "./CustomerDataSlice";

const MOCK_JSON = {
    "id": "mock id",
    "title": "mock title",
    "image": "https://mock-image-url.com",
    "subtitle": "mock subtitle",
    "brand": "mock brand",
    "reviews": [
      {
        "customer": "mock customer",
        "review": "mock review",
        "score": 100
      }
    ],
    "retailer": "mock retailer",
    "details": [
      "mock details"
    ],
    "tags": ["mock tag1", "mock tag2"],
    "sales": [
      {
        "weekEnding": "2017-01-01",
        "retailSales": 1,
        "wholesaleSales": 1,
        "unitsSold": 1,
        "retailerMargin": 1
      },
      {
        "weekEnding": "2017-01-02",
        "retailSales": 2,
        "wholesaleSales": 2,
        "unitsSold": 2,
        "retailerMargin": 2
      }
    ]
  }

describe('CustomerSlice test', () => {

    it('Initial state should not contain any data', () => {
        let state = store.getState().customerData.data;
        expect(state.id).toBe('');
        expect(state.details.length).toBe(0);
        expect(state.sales.length).toBe(0);
    });

    it('fetchCustomerData action should fill reducer state', () => {
        store.dispatch(fetchCustomerData([MOCK_JSON]));
        let state = store.getState().customerData.data;
    
        expect(state.id).toBe('mock id');
        expect(state.title).toBe('mock title');
        expect(state.tags.length).toBe(2);
        expect(state.sales.length).toBe(2);
        expect(state.sales[0].retailSales).toBe(1);
    });

    it('fetchCustomerData action should fill reducer state', () => {
        store.dispatch(fetchCustomerData([MOCK_JSON]));
        store.dispatch(resetCustomerData());
        let state = store.getState().customerData.data;
    
        expect(state.id).toBe('');
        expect(state.details.length).toBe(0);
        expect(state.sales.length).toBe(0);
    });
});
