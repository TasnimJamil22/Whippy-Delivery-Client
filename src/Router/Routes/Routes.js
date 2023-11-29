import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import ErrorPage from "../../Pages/ErrorPage/ErrorPage";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import SignUp from "../../Pages/SignUp/SignUp";
import AddService from "../../Pages/AddService/AddService";
import Services from "../../Pages/Home/Services/Services";
import CheckOut from "../../Pages/CheckOut/CheckOut";
import MyOrders from "../../Pages/MyOrders/MyOrders";
import PrivateRoute from "../PrivateRout/PrivateRoute";
import ManageServices from "../../Pages/ManageOrders/ManageOrders";

 const router = createBrowserRouter([
    {
        path:'/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
           {
            path: '/', 
            element: <Home></Home>

           },
           {
            path: '/addservice', 
            element: <PrivateRoute><AddService></AddService></PrivateRoute>

           },
           {
            path: '/login',
            element: <Login></Login>
           },
           {
            path: '/signup',
            element: <SignUp></SignUp>
           },
           {
            path: '/services',
            element: <Services></Services>,
            // loader:() => {fetch('http://localhost:5000/services')}
           },
           {
            path: '/myOrders',
            element: <PrivateRoute><MyOrders></MyOrders></PrivateRoute>
            // loader:() => {fetch('http://localhost:5000/services')}
           },
           {
            path: '/manage',
            element: <PrivateRoute><ManageServices></ManageServices></PrivateRoute>,
            loader:() => fetch('http://localhost:5000/manage')
           },
           {
            path: '/checkout/:id',
            element: <PrivateRoute><CheckOut></CheckOut></PrivateRoute>,
            loader: ({params}) => fetch(`http://localhost:5000/services/${params.id}`)
           
           }
        ]
    }
])

export default router;