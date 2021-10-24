
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import LogIn from './Components/LogIn/LogIn';
import NotFound from './Components/NotFound/NotFound';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Programs from './Components/Programs/Programs/Programs';
import Services from './Components/Services/Services';
import Shops from './Components/Shops/Shops';
import SignUp from './Components/SignUp/SignUp';
import AuthProvider from './Context/AuthProvider';

function App() {
  return (
    <div >
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route path='/home'>
              <Home></Home>
            </Route>
            <PrivateRoute path='/services'>
              <Services></Services>
            </PrivateRoute>
            <PrivateRoute path='/programs/:programdetails'>
              <Programs></Programs>
            </PrivateRoute>
            <PrivateRoute path='/shop'>
              <Shops></Shops>
            </PrivateRoute>
            <Route path='/login'>
              <LogIn></LogIn>
            </Route>
            <Route path='/signup'>
              <SignUp></SignUp>
            </Route>
            <Route path='*'>
              <NotFound></NotFound>
            </Route>

          </Switch>
          <Route>
            <Footer></Footer>
          </Route>

        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
