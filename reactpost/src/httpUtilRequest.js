import axios from 'axios';
import credentials from './credentials';
import { encode } from 'base-64'

// Criaçao de Interceptadores 
const responseInterceptor = async (response) => {
    const log = {

      response: {
        status: response.status,
        headers: response.headers,
        data: response.data,
      },
    }; 
    console.log("response logger: ",log)
    return response;
  };

  const requestLoggerInterceptor = async (request) => {
   const log = {

      request: {
        url: request.url,
        method: request.method,
        data: request.data
      },
    }
    
    console.log("request logger: ",log)
    return request;
  };
  const requestHeaderInterceptor = async (request) => {
    
    request.headers = {
         
          'Authorization':'Basic ' + encode(`${credentials.USER_NAME}:${credentials.PASSWORD}`),
          'Content-Type': "application/json",
          
    
        
    }

     return request;
   };
 


const configureAxios = () => {
    const instance = axios.create({
      timeout: 10000,

    });
    
    instance.interceptors.request.use(request => requestLoggerInterceptor(request));
    instance.interceptors.request.use(request => requestHeaderInterceptor(request));
    instance.interceptors.response.use(response => responseInterceptor(response));
    return instance;
  };




  export default  configureAxios()