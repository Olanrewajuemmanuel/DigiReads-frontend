import React from "react";
import { Provider } from "react-redux";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { CookiesProvider } from "react-cookie";

import { store } from "./redux/store";
import { API_URL } from "./constants";
import RouterConfig from "./routes/RouterConfig";

const client = new ApolloClient({
  uri: API_URL,
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
