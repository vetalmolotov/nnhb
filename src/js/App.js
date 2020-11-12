import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "antd/dist/antd.css";
import store from "./store";
import ContentHeader from "./components/ContentHeader";
import ContentHome from "./components/home/ContentHome";
import NotFound from "./components/notFound/NotFound";


import "./../css/App.scss";

class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <Router>
                    <div className="App">
                            <ContentHeader />
                            <Switch>
                                <Route exact path="/">
                                    <ContentHome />
                                </Route>
                                <Route exact path="/about">
                                    <div>about</div>
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
