import axios from 'axios';

import { ROOT_URL } from '../config';

export function signUp(fields, success) {
    console.log(fields);
    return function (dispatch) {
        // axios.post(`${ROOT_URL}/signUp`)
        //     .then(response => {
        //         //do something with response
        //     })
        //     .catch(err => {
        //         if (err) { console.log(err) }
        //     })
    }
}