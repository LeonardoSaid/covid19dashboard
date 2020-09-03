//import request from '../utils/request';
import { brazilConfirmed, brazilRecovered, brazilDeaths } from '../mock/brazilapi';

export async function loadBrazilStatusConfirmed(fromDate:string, toDate:string) {
    //return request(`https://api.covid19api.com/country/brazil/status/confirmed?from=${fromDate}&to=${toDate}`, {});
    return brazilConfirmed;
} 

export async function loadBrazilStatusRecovered(fromDate:string, toDate:string) {
    //return request(`https://api.covid19api.com/country/brazil/status/recovered?from=${fromDate}&to=${toDate}`, {});
    return brazilRecovered;
} 

export async function loadBrazilStatusDeaths(fromDate:string, toDate:string) {
    //return request(`https://api.covid19api.com/country/brazil/status/deaths?from=${fromDate}&to=${toDate}`, {});
    return brazilDeaths;
} 