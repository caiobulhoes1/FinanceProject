

import axios from "axios";
import { CompanyIncomeStatement, CompanyKeyMetrics, CompanyProfile, CompanySearch } from "./company";

interface SearchResponse{
    data: CompanySearch[];
}

console.log(process.env.REACT_APP_API_KEY)
const apikey = process.env.REACT_APP_API_KEY;

export const searchCompanies = async (query: string) => {
    try{
        const data = await axios.get<SearchResponse>(
            `https://financialmodelingprep.com/api/v3/search?query=${query}&limit=10&exchange=NASDAQ&apikey=${apikey}`
        );
        return data;
         
    } catch (error){
        if (axios.isAxiosError(error)){
            console.log("error message: ", error.message);
            return error.message;
        } else{
            console.log("unexpected error: ", error);
            return "An expected error has occured.";
        }
    }
};

export const getCompanyProfile = async (query: string) => {
    try
    {
        const data = await axios.get<CompanyProfile[]>
        (`https://financialmodelingprep.com/api/v3/profile/${query}?apikey=${apikey}`);
        return data;        
    }   catch (error: any) {
        console.log("error message from API: ", error.message);
    }
};

export const getKeyMetrics = async (query: string) => {
    try
    {
        const data = await axios.get<CompanyKeyMetrics[]>
        (`https://financialmodelingprep.com/api/v3/key-metrics-ttm/${query}?limit=40&apikey=${apikey}`);
        return data;        
    }   catch (error: any) {
        console.log("error message from API: ", error.message);
    }
}

export const getIncomeStatement = async (query: string) => {
    try {
      const data = await axios.get<CompanyIncomeStatement[]>(
        `https://financialmodelingprep.com/api/v3/income-statement/${query}?limit=50&apikey=${process.env.REACT_APP_API_KEY}`
      );
      return data;
    } catch (error: any) {
      console.log("error message: ", error.message);
    }
  };