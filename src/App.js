import React from "react";
import { Layout } from "antd";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MenuTop from "./components/MenuTop";

//pages
import Home from "./pages/home";
import NewMovies from "./pages/new-movies";
import Popular from "./pages/popular";
import Search from "./pages/search";
import Error404 from "./pages/error404/error404";
import Movie from "./pages/movie";


export default function App() {
  const { Header, Content } = Layout;
  return (
    <Layout>
      <Router>
        <Header style={{ zIndex: 1 }}>
          <MenuTop></MenuTop>
        </Header>
        <Content>
          <Switch>
            <Route path="/" exact={true}>
              <Home></Home>
            </Route>
            <Route path="/new-movies" exact={true}>
              <NewMovies></NewMovies>
            </Route>
            <Route path="/popular" exact={true}>
              <Popular></Popular>
            </Route>
            <Route path="/search" exact={true}>
              <Search></Search>
            </Route>
            <Route path="/movie/:id" exact={true}>
              <Movie></Movie>
            </Route>
            <Route path="*">
              <Error404></Error404>
            </Route>

          </Switch>
        </Content>
      </Router>
    </Layout>
  );
}


