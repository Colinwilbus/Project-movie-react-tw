import "./App.css";
import { createBrowserHistory } from "history";
import { Route, Router, Switch } from "react-router-dom";
import { HomeTemplate } from "./templates/homeTemplate/HomeTemplate";
import HomePage from "./pages/HomePage/Home.page";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ContactPage from "./pages/ContactPage/ContactPage";
import NewsPage from "./pages/NewsPage/NewsPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";

export const history = createBrowserHistory();

function App() {
  return (
    <Router history={history}>
      <Switch>
        <HomeTemplate path="/home" exact Component={HomePage} />
        <HomeTemplate path="/contact" exact Component={ContactPage} />
        <HomeTemplate path="/news" exact Component={NewsPage} />
        <Route path="/news" exact Component={LoginPage} />
        <Route path="/news" exact Component={RegisterPage} />
        <HomeTemplate path="/" exact Component={HomePage} />
      </Switch>
    </Router>
  );
}

export default App;
