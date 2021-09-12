import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import DetailPage from "./pages/DetailPage";
import TopRatedPage from "./pages/TopRatedPage";
import GenresPage from "./pages/GenresPage";
import LatestPage from "./pages/LatestPage";
import PopularPage from "./pages/PopularPage";
import ActorPage from "./pages/ActorPage";
import NavbarComponent from "./components/Navbar";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

function App() {
  return (
    <div id="app">
      <Router>
        <QueryClientProvider client={queryClient}>
          <ReactQueryDevtools initialIsOpen={false} />
          <NavbarComponent />
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>

            <Route exact path="/movie/:id">
              <DetailPage />
            </Route>
            <Route exact path="/actor/:id">
              <ActorPage />
            </Route>
            <Route exact path="/toprated">
              <TopRatedPage />
            </Route>
            <Route exact path="/latest">
              <LatestPage />
            </Route>
            <Route exact path="/popular">
              <PopularPage />
            </Route>
            <Route exact path="/genre/:id">
              <GenresPage />
            </Route>
          </Switch>
        </QueryClientProvider>
      </Router>
    </div>
  );
}

export default App;
