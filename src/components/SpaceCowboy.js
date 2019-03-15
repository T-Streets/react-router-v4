import React from 'react'
import { Route, Link } from 'react-router-dom'
import spikeImg from '../img/spike.jpg'
import jetImg from '../img/jet.jpg'
import fayeImg from '../img/faye.jpg'
import edImg from '../img/ed.jpg'

const Spike = () => (
    <img src={spikeImg} alt='spike' />
)
const Jet = () => (
    <img src={jetImg} alt='spike' />
)
const Faye = () => (
    <img src={fayeImg} alt='faye' />
)
const Ed = () => (
    <img src={edImg} alt='ed' />
)

const upper = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1)
}

const BountyHunters = ({ match }) =>console.log(match.path, match.url) || (
    <div>
        <h3>{upper(match.params.id)}</h3>
        <div>
            {
                (() => {
                    switch(`${match.params.id}`){
                        case('spike'):
                            return <Spike />
                        case('jet'):
                            return <Jet />
                        case('faye'):
                            return <Faye />
                        case('ed'):
                            return <Ed />
                        default:
                            return null
                        
                    }
                })()
            }
        </div>
    </div>
)


const SpaceCowboy = ({ match }) =>  {
    return (
        <div>
            <h1>See You SpaceCowboy</h1>
            <ul>
                <li>
                    <Link to={`${match.url}/spike`}>Spike</Link>
                </li>
                <li>
                    <Link to={`${match.url}/jet`}>Jet</Link>
                </li>
                <li>
                    <Link to={`${match.url}/faye`}>Faye</Link>
                </li>
                <li>
                    <Link to={`${match.url}/ed`}>Ed</Link>
                </li>
            </ul>
            {/*
               use match.path when you are defining a path - use match.url when you are defining a link
             */}
            <Route path={`${match.path}/:id`} component={BountyHunters} />
        </div>
    )
}

export default SpaceCowboy