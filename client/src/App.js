import Home from "./Compoents/home/Home";
import { Container } from "@material-ui/core";
import Navbar from "./Compoents/Navbar/Navbar";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Auth from "./Compoents/Auth/Auth";

const App = () => {
  return (
    <BrowserRouter>
      <Container maxWidth="lg">
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/auth" exact component={Auth} />
        </Switch>
      </Container>
    </BrowserRouter>
  );
};

export default App;
