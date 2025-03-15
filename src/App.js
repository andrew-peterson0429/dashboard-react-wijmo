import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import RootLayout from "./pages/RootPage/RootPage";
import ErrorPage from "./pages/ErrorPage";
import DashboardPage from "./pages/dashboard/DashboardPage";
import ReportsPage from "./pages/ReportsPage/ReportsPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      // { path: "/", element: <LoginForm /> },
      { path: "/dashboard", element: <DashboardPage /> },
      { path: "/reports", element: <ReportsPage /> },
      // { path: "/products/:productId", element: <ProductDetailPage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
