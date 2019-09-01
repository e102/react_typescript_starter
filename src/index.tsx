import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

import { ReactLogoPage } from './domains/react_logo/reactLogoPage'
import { Header } from './component-lib/header/header'


const Contents: React.FC = () =>
    <>
        <Header title={'Contents'}/>
        <nav>
            <ul>
                <li>
                    <Link to="/ReactLogo">ReactLogo</Link>
                </li>
            </ul>
        </nav>
    </>

const App: React.FC = () =>
    <Router>
        <Switch>
            <Route path="/ReactLogo" component={ReactLogoPage}/>
            <Route path="/" component={Contents}/>
        </Switch>
    </Router>

ReactDOM.render(<App/>, document.getElementById('root'))
