import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import NavbarComponent from "./components/Navbar";
import FooterComponent from "./components/Footer";
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
          </Switch>
          <FooterComponent />
        </QueryClientProvider>
      </Router>
    </div>
  );
}

export default App;
