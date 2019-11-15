import React, { Component, Fragment } from "react";
import { GlobalStyle } from "./style";
import { Provider } from "react-redux";
import { BrowserRouter, Route } from "react-router-dom";
import store from "./store";
import Header from "./common/header/index";
import Footer from "./common/footer/index";
import Introduce from "./pages/introduce/index";
import SeekOne from "./pages/seekOne/index";
import SeekPair from "./pages/seekPair/index";
import Contact from "./pages/contact/index";
class App extends Component {
  render() {
    return (
      <Fragment>
        <GlobalStyle />
        <Provider store={store}>
          <BrowserRouter>
            <div>
              <Header />
              <Route path="/" exact component={Introduce}></Route>
              <Route path="/seekOne" exact component={SeekOne}></Route>
              <Route path="/seekPair" exact component={SeekPair}></Route>
              <Route path="/contact" exact component={Contact}></Route>
              <Footer />
            </div>
          </BrowserRouter>
        </Provider>
      </Fragment>
    );
  }
}
export default App;
