
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import AuthProvider from './AuthProvider/AuthProvider';
import AddItems from './Pages/Add-New Items/AddItems';
import Booking from './Pages/Booking-Page/Booking';
import Header from './Pages/Header-Page/Header';
import HomeMain from './Pages/Home-Page/HomeMain';
import Login from './Pages/Login-Page/Login';
import ManageBookings from './Pages/Manage-Bookings/ManageBookings';
import ManageEvents from './Pages/Manage-Events/ManageEvents';

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
<Route exact path='/manage-bookings'>
 <ManageBookings/>
</Route>
<Route exact path='/booking/:bookingId'>
 <Booking/>
</Route>
<Route exact path='/manage-events'>
 <ManageEvents/>
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
