import React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider, HttpLink, from } from '@apollo/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NewsList from './components/NewsList/NewsList';
import NewsDetail from './components/NewsDetail/NewsDetail';

const httpLink = new HttpLink({
  uri: 'https://point.md/graphql',
});

const client = new ApolloClient({
  link: from([httpLink]),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Routes>
          <Route path="/" element={<NewsList />} />
          <Route path="/news-detail/:category_slug/:article_slug" element={<NewsDetail />} />
        </Routes>
      </Router>
    </ApolloProvider>
  );
}

export default App;
