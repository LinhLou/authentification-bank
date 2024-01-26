import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import { userLoader } from './Loader/userLoader';
import Layout from '../../Components/Layout';
import Home from '../../Pages/Index';
import SignIn from '../../Pages/Sign-in';
import User from '../../Pages/User';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route
        path= '/'
        element={<Home />}
      />
      <Route
        path= '/signin'
        element={<SignIn status={ "login-succeeded" }/>}
      />
      <Route
        path= '/user'
        loader={userLoader}
        element={<User />}
        errorElement = {<SignIn status={ "login-false" } />}
      />
    </Route>
  )
);

export default router;