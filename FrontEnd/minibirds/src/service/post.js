import axios from 'axios';

export function getSignup() {
    return axios.get(`http://example.com/signup`);
}

export function getSignin(snsID, password) {
    return axios.get(`http://example.com/signin/:${snsID}/:${password}`);
}

export function getEdit(id) {
    return axios.get(`http://example.com/edit/:${id}`);
}

export function getDelete(id, password) {
    return axios.get(`http://example.com/edit/:${id}/:${password}`);
}