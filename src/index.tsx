import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

import { ReactLogoPage } from './domains/react_logo/reactLogoPage'


const Contents: React.FC = () =>
    <nav>
        <ul>
            <li>
                <Link to="/ReactLogo">ReactLogo</Link>
            </li>
        </ul>
    </nav>

const App: React.FC = () =>
    <Router>
        <div>
            <Switch>
                <Route path="/ReactLogo" component={ReactLogoPage}/>
                <Route path="/" component={Contents}/>
            </Switch>
        </div>
    </Router>

ReactDOM.render(<App/>, document.getElementById('root'))
