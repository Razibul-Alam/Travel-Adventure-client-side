
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import AuthProvider from './AuthProvider/AuthProvider';
import AddItems from './Pages/Add-New Items/AddItems';
import Header from './Pages/Header-Page/Header';
import HomeMain from './Pages/Home-Page/HomeMain';
import Login from './Pages/Login-Page/Login';

function App() {
  return (
    <AuthProvider>
    <Router>
      <Header/>
      <Switch>
<Route exact path='/home'>
  <HomeMain/>
</Route>
<Route exact path='/additem'>
 <AddItems/>
</Route>
<Route exact path='/login'>
 <Login/>
</Route>
<Route exact path='/'>
  <HomeMain/>
</Route>
      </Switch>
    </Router>
    </AuthProvider>
   
  );
}

export default App;
