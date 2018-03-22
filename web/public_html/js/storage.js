// localStorage
function storagesetItem(key,value) {
    return localStorage.setItem(key, JSON.stringify(value));
}

function storagegetItem(key) {
    return JSON.parse(localStorage.getItem(key));
}
function storageremoveItem(key) {
    return localStorage.removeItem(key);
}
// Session Storage
function sessionsetItem(key,value) {
    return sessionStorage.setItem(key, JSON.stringify(value));
    // return localStorage.setItem(key, JSON.stringify(value));
}

function sessiongetItem(key) {
    return JSON.parse(sessionStorage.getItem(key));
    // return JSON.parse(localStorage.getItem(key));
}
function sessionremoveItem(key) {
    return sessionStorage.removeItem(key);
    // return localStorage.removeItem(key);
}
