import authEndpoints from './endpoints/auth';
import teamEndpoints from './endpoints/team';



const controllers = [
  { name: 'auth', endpoints: authEndpoints, basePath: '/auth' },
  { name: 'team', endpoints: teamEndpoints, basePath: '/team' },
];


export default controllers;