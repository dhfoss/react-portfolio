import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import Navbar from './components/Navbar';
import GoogleFontLoader from 'react-google-font-loader';


function App() {
  return (
    <>
    <GoogleFontLoader 
    fonts={[
        {
          font: 'Montserrat',
          weights: [400, 700]
        }
      ]}
    />

    <div className='App__container' style={{ fontFamily: 'Montserrat' }}>

      <Navbar />
      <Router>
        <Switch>

          <Route exact path='/react-portfolio/'>
            <Home />
          </Route>

          <Route path='/react-portfolio/portfolio'>
            <Portfolio />
          </Route>

        </Switch>
      </Router>
    </div>
    </>
  );
}

export default App;
