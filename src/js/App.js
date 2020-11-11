import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "antd/dist/antd.css";
import store from "./store";
import ContentTop from "./components/home/ContentTop";
import Home from "./components/home/Home";
import NotFound from "./components/notFound/NotFound";

import "./../css/_helpers.scss";
import "./../css/App.scss";

class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <Router>
                    <div className="App">
                            <ContentTop />
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
