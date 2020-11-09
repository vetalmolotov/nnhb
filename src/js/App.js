import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "antd/dist/antd.css";

import Home from "./components/home/Home";
import NotFound from "./components/notFound/NotFound";
import Signin from "./components/signin/Signin";
import store from "./store";

import "./../css/App.css";

class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <Router>
                    <div className="App">
                        <ul className="header">
                            <li>Cluster Colloboration Platform</li>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Signin />
                            </li>
                        </ul>

                        <Switch>
                            <Route exact path="/">
                                <Home />
                            </Route>
                            <Route path="*">
                                <NotFound />
                            </Route>
                        </Switch>
                    </div>
                </Router>
            </Provider>
        );
    }
}

export default App;
