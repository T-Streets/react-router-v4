import React, { Component } from 'react';
import './App.css';
import SpaceCowboy from './components/SpaceCowboy'
import PassProps from './components/PassProps'
import Sidebar from './components/Sidebar'
import CustomLink from './components/CustomLink'
import { Route, Link, BrowserRouter as Router, Switch, Redirect} from 'react-router-dom'

const Home = () => (
  <div>
    <h1>Home</h1>
  </div>
)

const Matched = () => (
  <div>
    <h1>Matched Path</h1>
  </div>
)
/**
 * NoMatch would be your 404 page/component
 */
const NoMatch = ({ location}) => (
  <div>
    <h1>This isnt the page youre looking for</h1>
    <h3>There is no path for <code>{location.pathname}</code></h3>
  </div>
)


class App extends Component {
  state = {
    secretMessage: 'foxtrot uniform charlie kilo'
  }

  render() {
    const message = this.state.secretMessage
    // console.log(message)
    return (
      <div className="App">
        <Router>
          <div>
            <ul>
              <li><Link to='/'>Home</Link></li>
              <li><Link to='/hunters'>SpaceCowboy</Link></li>
              <li><Link to={{
                pathname: '/pass-props',
                state: { message },
              }}>Pass Props To Components</Link></li>
              <li><Link to='/matched'>Matched</Link></li>
              <li><Link to='/old-page'>Old page to be redirected</Link></li>
              <li><Link to='/sidebar'>Sidebar</Link></li>
              <li><Link to='/custom-link'>Custom Link</Link></li>
            </ul>

            <hr />
            <Switch>
              <Route exact path='/' component={Home} />
              <Redirect from='/old-page' to='/matched' />
              <Route path='/hunters' component={SpaceCowboy} />
              <Route path='/pass-props' component={PassProps} />
              <Route path='/matched' component={Matched} />
              <Route path='/sidebar' component={Sidebar} />
              <Route path='/custom-link' component={CustomLink} />
              <Route component={NoMatch} />
            </Switch>
            {/* when a route is passed without a path it will always be rendered if the path in url is not exact ie 
                any path that does not match what we have set, will be forwarded to this route
            */}
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
