import React from 'react'
import { Provider } from 'react-redux'
import Check from './components/Check'
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client"

import { store } from "./redux/store"
import { API_URL } from './constants'
import RouterConfig from './routes/RouterConfig'

const client = new ApolloClient({
  uri: API_URL,
  cache: new InMemoryCache()
})

function App() {
  return (
    <ApolloProvider client={client}>
      <Provider store={store}>
      <div className="appContainer">
      <RouterConfig />
    </div>
    </Provider>
    </ApolloProvider>
    
    
  )
}

export default App
