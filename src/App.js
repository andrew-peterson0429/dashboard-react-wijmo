import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import RootLayout from "./pages/Root";
import ErrorPage from "./pages/ErrorPage";
import LoginForm from "./components/LoginForm/LoginForm";
import DashboardPage from "./pages/dashboard/DashboardPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <LoginForm /> },
      { path: "/dashboard", element: <DashboardPage /> },
      // { path: "/products/:productId", element: <ProductDetailPage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
