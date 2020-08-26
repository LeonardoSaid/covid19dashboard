export default function request(url: any, options: any) {

    return fetch(url, options)
        .then(response => {
            return response.json();
        })
        .catch(e => {
            console.log(e);
        });
}