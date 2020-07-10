import authEndpoints from './endpoints/auth';



const controllers = [
  { name: 'auth', endpoints: authEndpoints, basePath: '/auth' },
];


export default controllers;