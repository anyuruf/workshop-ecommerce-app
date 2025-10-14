import { createBrowserRouter,  RouterProvider} from "react-router-dom";
import ProductList from "../../components/ProductList";
import Cart from "../../components/Cart";
import Login from "../Login";
import User from "../User";
import Signup from "../Signup";
import ProductDetail from "../../components/ProductDetail";
import OrderHistory from "../../components/OrderHistory";
import OrderDetail from "../../components/OrderDetail";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import { Toaster } from "react-hot-toast";
import { authConfig } from '../../config';
import { AuthProvider } from 'react-oauth2-code-pkce';

const App = () => {

  const router = createBrowserRouter([
    { path: "/", element: <ProductList />, },
    { path: "/categories/:categoryId/:categoryName", element: <ProductList />, },
    { path: "/products/:parentId/:categoryId", element: <ProductDetail />, },
    { path: "/cart", element: <Cart />, },
    { path: "/login", element: <Login />, },
    { path: "/signup", element: <Signup />, },
    { path: "/user", element: <User /> },
    { path: "/orders", element: <OrderHistory /> },
    { path: "/orders/:orderId", element: <OrderDetail /> }, 
  ]);


  return ( 
      <>
      <AuthProvider authConfig={authConfig}>
        <Navigation />
        <RouterProvider router={router} />
        <Footer />
        <Toaster />
      </AuthProvider>
      </>
  );
};

export default App;
