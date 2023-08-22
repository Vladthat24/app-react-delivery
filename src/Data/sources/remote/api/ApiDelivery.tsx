import axios from 'axios';


const ApiDelivery= axios.create({
    baseURL: 'http://192.168.3.156:3000/api',
    headers:{
        'Content-type':'application/json'
    }
})

export {ApiDelivery}