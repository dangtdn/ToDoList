export class BaseService {

    constructor(){

    }

    post = (url,data) => {
        const promise = axios ({
            url: url,
            method: 'POST',
            data:data
        })

        return promise;
    } 

    get = (url) => {
        const promise = axios ({
            url: url,
            method: 'GET'
        })

        return promise;
    } 

    put = (url,data) => {
        const promise = axios ({
            url: url,
            method: 'PUT',
            data:data
        })

        return promise;
    } 

    delete = (url) => {
        const promise = axios ({
            url: url,
            method: 'DELETE'
        })

        return promise;
    } 
}

<<<<<<< HEAD
console.log("Mình là User Lê Trung Cương");
console.log("hehe hoho");
=======
console.log('Hi All');
console.log('Hi All');
console.log('Hi All');
console.log('Hi All');
>>>>>>> 299f80e846503ce1a7162e541c95e327f5d3ed68
