import {BASE_PATH, API_VERSION} from "./config";

export function signUpApi(data){
    const url = `${BASE_PATH}/${API_VERSION}/sign-up`;
    const params = {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json"
        }
    }
    
    
    return fetch(url, params).then(response => {
        return response.json();
    }).then(result => {
        if(result.user){
            return true;
        }else{
            return false;
        }
    }).catch(e => {
        return e.message;
    })    
}

export function signInApi(data){
    const url = `${BASE_PATH}/${API_VERSION}/sign-in`;
    const params = {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json"
        }
    }
    
    return fetch(url, params).then(response => {
        return response.json();
    }).then(result => {
        return result;
    }).catch(e => {
        return e.message;
    })
}

export function getUsersApi(token){
    const url = `${BASE_PATH}/${API_VERSION}/get-users`;
    const params = {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            Authorization: token
        }
    }

    return fetch(url, params).then(response => {
        return response.json();
    }).then(result => {
        return result;
    }).catch(err => {
        return err.message;
    })
}

export function getUsersActiveApi(token, status){
    const url = `${BASE_PATH}/${API_VERSION}/get-users-active?active=${status}`;
    const params = {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            Authorization: token
        }
    }

    return fetch(url, params).then(response => {
        return response.json();
    }).then(result => {
        return result;
    }).catch(err => {
        return err.message;
    })
}