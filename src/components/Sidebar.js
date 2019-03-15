import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Link,
    Route
} from 'react-router-dom'

const routes = [
    {
        path: '/',
        exact: true,
        sidebar: () => <div>home</div>,
        main: () => <h2>Home</h2>
    },
    {
        path: '/surf',
        sidebar: () => <div>surfboard</div>,
        main: () => <h2>Surfing!</h2>
    },
    {
        path: '/snow',
        sidebar: () => <div>snowboard</div>,
        main: () => <h2>Snowboarding!</h2>
    },
]

export default class Sidebar extends Component{
    render() {
        return(
            <Router>
                <div style={{display: 'flex'}}>
                    <div style={{
                        padding: '10px', 
                        width: '40%',
                        background: '#f0f0f0'
                        }}>
                        <ul style={{listStyleType: 'none', padding: 0}}>
                            <li><Link to='/'>Home</Link></li>
                            <li><Link to='/surf'>Surfing</Link></li>
                            <li><Link to='/snow'>Snowboarding</Link></li>
                        </ul>
                        {
                            routes.map(route => (
                                <Route 
                                    key={route.path}
                                    path={route.path}
                                    exact={route.exact}
                                    component={route.sidebar}
                                />
                            ))
                        }
                    </div>
                    <div style={{flex: 1, padding: '10px'}}>
                        {
                            routes.map(route => (
                                <Route
                                    key={route.path}
                                    path={route.path}
                                    exact={route.exact}
                                    component={route.main}
                                />
                            ))
                        }
                    </div>
                </div>
            </Router>
        )
    }
}