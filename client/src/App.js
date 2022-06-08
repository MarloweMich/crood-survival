import React from 'react';
import LandingPage from './pages/landingpage';
import Header from './components/Header';
// import { Chat, chatClient } from "./components/Chat"
// import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink, useSubscription, gql } from "@apollo/client"
// import { WebSocketLink } from "@apollo/client/link/ws"
import { setContext } from '@apollo/client/link/context';
import Auth from './utils/auth';
import "./App.css"
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {

  

  return (
    <ApolloProvider client={client}>
      <div className='frame'>
      <Header />
      {Auth.loggedIn() ? <Chat/> : <LandingPage/>}
      </div>
    </ApolloProvider>
  );
}

export default App;
