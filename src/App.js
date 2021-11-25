import { createContext, useState } from "react";
import {
  BrowserRouter as Router, Route, Switch
} from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import ServiceDetails from "./components/PatientServices/ServiceDetails";
import AuthContext from "./context/AuthContext";
import useServices from "./hooks/useServices";
import About from "./pages/About/About";
import Booking from "./pages/Booking/Booking";
import Contact from "./pages/Contact/Contact";
import Doctors from "./pages/Doctors/Doctors";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import SignUp from "./pages/Login/SignUp";
import NotFound from "./pages/NotFound.js/NotFound";
import Services from "./pages/Services/Services";
import PrivateRoute from "./PrivateRoute/PrivateRoute";

export const ServiceContext = createContext([]);
export const BookingContext = createContext();
const  App = () => {

  const [services] = useServices();
  const [booking, setBooking] = useState([]);
 
  const handleBooking = (book) => {
        const newBook = [...booking, book];
        console.log(book);
        console.log(newBook);
        setBooking(newBook)
  }
  return (
    <div>
      <AuthContext>
      <ServiceContext.Provider value={[services, handleBooking]}>
        <BookingContext.Provider value={[booking]}>
            <Router>
              <Header />
              <Switch>
                <Route exact path='/'>
                  <Home />
                </Route>
                <Route path='/home'>
                  <Home />
                </Route>
                <Route path='/about'>
                  <About />
                </Route>
                <PrivateRoute path='/services'>
                  <Services />
                </PrivateRoute>
                <PrivateRoute path='/service/:id'>
                  <ServiceDetails />
                </PrivateRoute>
                <PrivateRoute path='/doctors'>
                  <Doctors />
                </PrivateRoute>
                <PrivateRoute path='/booking'>
                  <Booking />
                </PrivateRoute>
                <Route path='/contact'>
                  <Contact />
                </Route>
                <Route path='/login'>
                  <Login />
                </Route>
                <Route path='/sign-up'>
                    <SignUp />
                </Route>
                <Route path='*'>
                  <NotFound />
                </Route>
              </Switch>
              <Footer />
            </Router>
          </BookingContext.Provider> 
       </ServiceContext.Provider>
       </AuthContext>
    </div>
  );
}

export default App;
