import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
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
        element={<SignIn />}
      />
      <Route
        path= '/user'
        element={<User />}
      />
    </Route>
  )
);

export default router;