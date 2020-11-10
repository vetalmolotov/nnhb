import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "antd/dist/antd.css";

import Home from "./components/home/Home";
import NotFound from "./components/notFound/NotFound";

import store from "./store";

import "./../css/_helpers.scss";
import "./../css/App.scss";
import Header from "./components/home/Header";

class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <Router>
                    <div className="App">
                        <div className="App-wrapper">
                            <Header />
                            <Switch>
                                <Route exact path="/">
                                    <Home />
                                </Route>
                                <Route path="*">
                                    <NotFound />
                                </Route>
                            </Switch>
                        </div>
                    </div>
                </Router>
            </Provider>
        );
    }
}

export default App;
