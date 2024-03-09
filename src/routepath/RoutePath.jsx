import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "../components/home/Home"
import '../assets/css/style.css'
import { Provider } from "react-redux"
import store from '../reducer/Store'
import ShowDetails from "../components/subPages/ShowDetails"


function RoutePath() {
  return (
    <div>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/showdetails/:id" element={<ShowDetails />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  )
}

export default RoutePath