import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import News from './News';
import About from './About';
import Contact from './Contact';
import Home from './Home';
import Login from './Login';
import Dashboard from './Dashboard';




export class Nav extends Component {
    render() {
        return (
            <div>
                <Router>
                    <nav class="navbar navbar-dark bg-info">
                        <div class="container-fluid">
                            <div class="navbar-header">
                                <a class="navbar-brand" href="#">WebSiteName</a>
                            </div>
                            <ul class="nav navbar-nav">
                                <li><Link to={"/"}>Home</Link></li>
                                <li><Link to={"/news"}>News</Link></li>
                                <li><Link to={"/About"}>About</Link></li>
                                <li><Link to={"/Contact"}>Contact</Link></li>
                                <li><Link to={"/login"}>Login</Link></li>

                            </ul>
                        </div>
                    </nav>
                    <Switch>
                        <Route path="/news">
                            <News />
                        </Route>
                        <Route path="/About">
                            <About />
                        </Route>
                        <Route path="/Contact">
                            <Contact />
                        </Route>
                        <Route path="/login">
                            <Login />
                            </Route>
                            <Route path="/dashboard">
                                <Dashboard/>
                            </Route>
                        <Route path="/">
                            <Home />
                        </Route>
                    </Switch>
                </Router>
            </div>
        )
    }
}

export default Nav
