import React from 'react';
import ReactDOM from 'react-dom';
import Home from './components/Home';
import ExperiencesPage from './components/ExperiencesPage';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ApolloClient } from 'apollo-client';
import { ApolloProvider } from 'react-apollo';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

const client = new ApolloClient({
    link: new HttpLink({uri: 'https://api.lithodomosvr.com/graphql'}),
    cache: new InMemoryCache()
});
const rootElement = document.getElementById('root');
const app = (
    <ApolloProvider client={client}>
        <BrowserRouter>
            <Switch>
                <Route exact path = '/' component={Home} />
                <Route path = '/experiences' component={ExperiencesPage} />
            </Switch>
        </BrowserRouter>
    </ApolloProvider>
)

ReactDOM.render(app, rootElement);
registerServiceWorker();
