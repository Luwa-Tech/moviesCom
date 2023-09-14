import Layout from "./components/Layout"
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from "react-router-dom"
import Home from "./pages/Home"
import MovieDetail from "./pages/MovieDetail"

const App = () => {
  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="/movies/:id" element={<MovieDetail />} />

    </Route>
  ))

  return (
    <RouterProvider router={router}/>
  )
}

export default App
