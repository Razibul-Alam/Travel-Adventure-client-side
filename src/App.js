
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Header from './Pages/Header-Page/Header';
import HomeMain from './Pages/Home-Page/HomeMain';

function App() {
  return (
    <Router>
      <Header/>
      <Switch>
<Route exact path='/home'>
  <HomeMain/>
</Route>
<Route exact path='/'>
  <HomeMain/>
</Route>
      </Switch>
    </Router>
   
  );
}

export default App;
