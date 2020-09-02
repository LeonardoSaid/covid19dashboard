import request from '../utils/request';

export async function loadBrazilStatusConfirmed(fromDate:string, toDate:string) {
    return request(`https://api.covid19api.com/country/brazil/status/confirmed?from=${fromDate}&to=${toDate}`, {});
} 