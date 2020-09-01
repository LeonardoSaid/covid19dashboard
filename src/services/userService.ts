import request from '../utils/request';

export async function loadUsers() {
    return request('https://api.covid19api.com/summary', {});
} 