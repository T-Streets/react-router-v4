import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Link,
    Route
} from 'react-router-dom'
import Settings from './mock/Settings'
import Dashboard from './mock/Dashboard'
import { fetchSettings, fetchDashboard } from './mock/api'

const routes = [
    {
        path: '/settings',
        component: Settings,
        fetchInitialData: id => fetchSettings(id)
    },
    {
        path: '/dashboard',
        component: Dashboard,
        fetchInitialData: id => fetchDashboard(id)
    }
]

export default class PassProps extends Component {
    state = {
        message: null
    }
    /**
     * This receives the state set by the Link tag in app.js
     */
    componentDidMount() {
        const { secretMessage } = this.props.location.state
        this.setState({
            message: secretMessage
        })
    }
    render(){
        const renderProp = this.state.message
        console.log(renderProp)
        return(
            <Router>
                <div>
                    <h2>Pass Props to Components</h2>
                    <ul>
                        <li><Link to='/settings'>Settings</Link></li>
                        <li><Link to='/dashboard'>Dashboard</Link></li>
                    </ul>
                    
                    <hr />
                {/* 
                    to pass props down to a component use "render" instead of component. Render accepts an inline function that
                    will pass props down to the component. This will also make sure the inline function is not ran everytime 
                    the app re-renders
                */}
                    {routes.map(({ path, component: C, fetchInitialData }) => (
                        <Route 
                            key={path}
                            path={path}
                            render={props => <C {...props} fetchInitialData={fetchInitialData('id')} />}
                        />
                    ))}
                    <h2>{renderProp}</h2>
                </div>
            </Router>
        )
    }
}