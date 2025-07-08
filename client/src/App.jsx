import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Layout } from "./Layout/Layout";
import { Home } from "./pages/Home";
import { System } from "./pages/system";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children: [
      { path: "", element: <Home/>},
      { path: "system", element: <System/>},
    ],
  },
])

export function App() {
  return(
      <RouterProvider router={Router}/>
  )
}