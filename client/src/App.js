import Home from "./Compoents/home/Home";
import PostDetalis from "./Compoents/PostDetalis/PostDetalis";
import { Container } from "@material-ui/core";
import Navbar from "./Compoents/Navbar/Navbar";
import { BrowserRouter, Switch, Route ,Redirect } from "react-router-dom";
import Auth from "./Compoents/Auth/Auth";

const App = () => {
  const user = JSON.parse(localStorage.getItem('profile'));
  return (
    <BrowserRouter>
      <Container maxWidth="xl">
        <Navbar />
        <Switch>
          <Route path="/" exact component={() => <Redirect to="/posts"/>} />
          <Route path="/posts" exact component={Home}/>
          <Route path="/posts/search" exact component={Home}/>
          <Route path="/posts/:id" exact component={PostDetalis}/>
          <Route path="/auth" exact component={() => (!user ? <Auth /> : <Redirect  to="/posts/"/>)}/>
        </Switch>
      </Container>
    </BrowserRouter>
  );
};

export default App;
