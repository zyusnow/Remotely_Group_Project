import React, { useState, useEffect } from 'react';
import { Route, Switch} from 'react-router-dom';
import { useDispatch } from 'react-redux';


import LoginPage from './components/auth/LoginPage';
import SignupPage from './components/auth/SignupPage';
import NavBar from './components/NavBar'
import PageNotFound from "./components/PageNotFound";
import AllProducts from './components/Products/AllProducts';
import ProductDetail from './components/Products/ProductDetail';
// import NewProduct from './components/Products/NewProduct';

// import ProtectedRoute from './components/auth/ProtectedRoute';
import { authenticate } from './store/session';


function App() {
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    (async() => {
      await dispatch(authenticate());
      setLoaded(true);
    })();
  }, [dispatch]);

  if (!loaded) {
    return null;
  }

  return (
    <>
      <NavBar loaded={loaded} />
      <div>
        {loaded && (
          <div id='main'>
            <Switch>
              <Route path='/' exact={true}><h1>My Home Page</h1></Route>
              <Route path='/signup' exact={true}><SignupPage /></Route>
              <Route path='/login' exact={true}><LoginPage /></Route>
              <Route path='/not-found' exact={true}><PageNotFound /></Route>
              <Route path='/products' exact={true}><AllProducts /></Route>
              <Route path='/products/:id' exact={true}><ProductDetail /></Route>
              {/* <Route path='/products/new' exact={true}><NewProduct /></Route> */}
            </Switch>
          </div>
        )}
      </div>
    </>
  )
}
        // <ProtectedRoute path='/users' exact={true} >
        //   <UsersList/>
        // </ProtectedRoute>
        // <ProtectedRoute path='/users/:userId' exact={true} >
        //   <User />
        // </ProtectedRoute>





export default App;
