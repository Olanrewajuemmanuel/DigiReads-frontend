import React from "react";
import { Provider } from "react-redux";
import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  HttpLink,
  concat,
  ApolloLink,
} from "@apollo/client";
import { CookiesProvider } from "react-cookie";

import { store } from "./redux/store";
import { API_URL } from "./constants";
import RouterConfig from "./routes/RouterConfig";

const httpLink = new HttpLink({
  uri: "http://localhost:4000/graphql",
});

const authMiddleWare = new ApolloLink((operation, forward) => {
  // add authoriztion header to the headers
  operation.setContext(({ headers = {} }) => ({
    headers: {
      ...headers,
      authorization: localStorage.getItem("token") || null,
    },
  }));
  return forward(operation)
});

const client = new ApolloClient({
  link: concat(authMiddleWare, httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <CookiesProvider>
        <Provider store={store}>
          <div className="appContainer">
            <RouterConfig />
          </div>
        </Provider>
      </CookiesProvider>
    </ApolloProvider>
  );
}

export default App;
