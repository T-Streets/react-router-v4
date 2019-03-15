import React from 'react'
import {
    BrowserRouter as Router,
    Link,
    Route
} from 'react-router-dom'

const home = () => (
    <div>
        <h2>Home</h2>
    </div>
)

const about = () => (
    <div>
        <h2>about</h2>
    </div>
)

const MenuLink = ({ children, to, exact}) => {
    return(
        <Route path={to} exact={exact} children={({match}) => (
            <div className={match ? 'active' : ''}>
                {match ? '>' : ''}
                <Link to={to}>
                    {children}
                </Link>
            </div>
        )}
        />

    )
}

const CustomLink = () => (
    <Router>
        <div>
            <MenuLink exact={true} to='/'>Home</MenuLink>
            <MenuLink to='/about'>About</MenuLink>
            <hr />
            <Route exact path='/' component={home} />
            <Route path='/about' component={about} />
        </div>
    </Router>
)

export default CustomLink