import { notification } from 'antd';

const codeMessage = {
    200: 'The server successfully returned the requested data.',
    201: 'New or modified data is successful.',
    202: 'A request has entered the background queue (asynchronous task).',
    204: 'The data was deleted successfully.',
    400: 'There was an error in the request sent, and the server did not create or modify data.',
    401: 'The user does not have permission (the token, username, password is wrong).',
    403: 'The user is authorized, but access is forbidden.',
    404: 'The request sent was for a record that did not exist, and the server did not operate.',
    406: 'The requested format is not available.',
    410: 'The requested resource is permanently deleted and will no longer be available.',
    422: 'When creating an object, a validation error occurred.',
    500: 'An error occurred in the server, please check the server.',
    502: 'Gateway error.',
    503: 'The service is unavailable, and the server is temporarily overloaded or maintained.',
    504: 'The gateway timed out.',
};

const checkStatus = response => {
    if (response.status >= 200 && response.status < 300) {
        return response;
    }
    const errortext = codeMessage[response.status] || response.statusText;
    notification.error({
        message: `Request error ${response.status}: ${response.url}`,
        description: errortext,
    });
    const error = new Error(errortext);
    error.name = response.status;
    error.response = response;
    throw error;
};

/**
 * Basic sync request, returns a promise
 * @param {string} url the url we want to request 
 * @param {object} options options to be passed to the fetch
 * @return {object}  object containing either the data or an error in json
 */

export default function request(url, options) {
    return fetch(url, options)
        .then(checkStatus)
        .then(response => {
            return response.json();
        })
        .catch(e => { throw new Error("Request failed") });
}