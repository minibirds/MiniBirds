import axios from 'axios';

export function getSignin(snsID, password) {
    return axios.get(`http://13.59.174.126:3000/signin/:${snsID}/:${password}`);
}

export function getEdit(id) {
    return axios.get(`http://13.59.174.126:3000/edit/:${id}`);
}

export function getDelete(id, password) {
    return axios.get(`http://13.59.174.126:3000/edit/:${id}/:${password}`);
}