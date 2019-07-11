import React from "react";
import Routes from "./routes";
import { ApolloProvider as ApolloHooksProvider } from "react-apollo-hooks";

import { ApolloProvider } from "react-apollo";
import client from "./Util/apolloClient";

//the function call the routes for the functionality 
export default function App() {
  return (

  
    <ApolloProvider client={client}>
      <ApolloHooksProvider client={client}>
        <Routes />
      </ApolloHooksProvider>
    </ApolloProvider>
  );
}
