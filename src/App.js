// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Header from './Shared/Header/Header';
import Home from './components/Home/Home';
import Services from './components/Services/Services';
import Doctor from './components/Doctor/Doctor';
import NewsAndArticle from './components/NewsAndArticle/NewsAndArticle';
import Login from './components/Login/Login';
import Footer from './Shared/Footer/Footer';
import NotFound from './components/NotFound/NotFound';
import Booking from './components/Booking/Booking/Booking';
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';




function App() {
  return (
    <div className="App">
      <AuthProvider>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/services">
            <Services></Services>
          </Route>
          <PrivateRoute path="/doctors">
            <Doctor></Doctor>
          </PrivateRoute>
          <Route path="/news">
            <NewsAndArticle></NewsAndArticle>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
        <PrivateRoute path="/Booking/:serviceId">
            <Booking></Booking>
          </PrivateRoute>
          <Route exact path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
