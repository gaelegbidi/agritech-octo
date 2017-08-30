import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom'
import {createBrowserHistory} from 'history';
import decode from 'jwt-decode';
import request from 'axios'

// Containers
import Full from './containers/Full/'

// Views
import Login from './views/Pages/Login/'
import Register from './views/Pages/Register/'
import Page404 from './views/Pages/Page404/'
import Page500 from './views/Pages/Page500/'

export const gHistory = createBrowserHistory();

export const authRequest = request.create({
    baseURL: 'http://localhost:8080/',
    timeout: 1000,
    auth: {
      username: 'agritech-client',
      password: 'Pa123456'
    }
});

export const apiRequest = request.create({
    baseURL: 'http://localhost:8080/api/',
    timeout: 1000
});

// Add a request interceptor
apiRequest.interceptors.request.use(function (config) {
    let access_token = localStorage.getItem('access_token');
    console.log("Voici le tocken intercepté");
    console.log(access_token);
    if (access_token) {
        config.headers.common['authorization'] = 'Bearer ' + access_token;
    }
    return config;
  }, function (error) {
    // Do something with request error
    console.log(error);
    return Promise.reject(error);
  });

// Add a response interceptor
apiRequest.interceptors.response.use(function (response) {
    // Do something with response data
    return response;
  }, function (error) {
    // Do something with response error
    if(error.response.data.error == "unauthorized"){
        localStorage.clear();
    }
    return Promise.reject(error);
  });

const checkAuth = () => {
    let token = localStorage.getItem('access_token');
    if (!token) {
        return false;
    }
    const chckAuth = ()=>{

    }

    // try {
    //     // { exp: 12903819203 }
    //     // console.log(decode(token));
    //     // const { exp,sub,roles } = decode(token);
    //     // localStorage.setItem('username',sub);
    //     // localStorage.setItem('roles',roles);
    //     //
    //     // if (exp < new Date().getTime() / 1000) {
    //     //    return false;
    //     // }
    //
    // } catch (e) {
    //     return false;
    // }

    return true;
}
const checkAuthAdmin = () => {
    let token = localStorage.getItem('access_token');
    if (!token) {
        return false;
    }
    return localStorage.getItem('roles')==='admin';
}

const AuthRoute = ({component: Component, ...rest}) => (
    <Route {...rest} render={props => (
        checkAuth() ? (<Component {...props}/>) : (<Redirect to={{pathname: '/login'}}/>)
    )}/>
)

const GuestRoute = ({component: Component, ...rest}) => (
    <Route {...rest} render={props => (
        !checkAuth() ? (<Component {...props}/>) : (<Redirect to={{pathname: '/'}}/>)
    )}/>
)
export const AdminRoute = ({component: Component, ...rest}) => (
    <Route {...rest} render={props => (
        checkAuthAdmin() ? (<Component {...props}/>) : (<Redirect to={{pathname: '/'}}/>)
    )}/>
)

ReactDOM.render((
    <BrowserRouter history={gHistory}>
        <Switch>
            {/*<Route exact path="/login" name="Login Page" component={Login}/>*/}
            <Route exact path="/login" render={props => <Login {...props} />} />
            <AdminRoute exact path="/register" name="Register Page" component={Register}/>
            <Route exact path="/404" name="Page 404" component={Page404}/>
            <Route exact path="/500" name="Page 500" component={Page500}/>
            <AuthRoute path="/" name="Home" component={Full}/>
        </Switch>
    </BrowserRouter>
), document.getElementById('root'))


