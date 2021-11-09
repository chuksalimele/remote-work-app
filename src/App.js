import "./App.css";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { pageRoutes } from "./models/PageRoutes";
import LoginPane from "./pages/auth/login/LoginPane";
import SignupPane from "./pages/auth/signup/SignupPane";
import auth from "./controllers/AuthController";
import NotFound from "./NotFound";
import Main from "./Main";

function App() {
  return (() => {
    switch (auth.state()) {
      case auth.AUTHENTICATED:
        return <Main />;
      case auth.SIGNUP_STAGE:
        return (
          // stage of signup e.g  enter email , password, fullname, or other relevant information
          <SignupPane stage={auth.stage()} />
        );
      case auth.INITIAL:
        return <LoginPane />;
      default:
        return <NotFound />;
    }
  })();
}

export default App;
