import { RouterProvider, createBrowserRouter } from "react-router-dom"

// Layouts
import { Layout } from "../layout/Layout"

// Pages
import { Home } from "../pages/Home"
import { System } from "../pages/System"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children: [
      { path: "", element: <Home/>},
      { path: "system", element: <System/>},
    ],
  },
])

export function AppRouter() {
    return <RouterProvider router={router} />
}
