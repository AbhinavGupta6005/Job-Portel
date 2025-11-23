import { createSlice } from "@reduxjs/toolkit";


const companySlice = createSlice({
    name: "company",
    initialState: {
        singleCompany: null,
        companies:[],
        searchCompanyByText: "",
    },
    reducers: {
        // actions
        setSingleCompany:(state, action)=>{
            state.singleCompany  = action.payload; 
        },
        setCompanies:(sate, action) => {
            sate.companies = action.payload;
        },
        setSearchCompanyByText: (state, action) => {
            state.searchCompanyByText = action.payload
        }
    }
});

export const {setSingleCompany, setCompanies, setSearchCompanyByText} = companySlice.actions;
export default companySlice.reducer;