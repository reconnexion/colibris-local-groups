import React from 'react';
import { Admin, Resource } from 'react-admin';
import { createBrowserHistory } from 'history';
import { Route } from 'react-router-dom';
import { authProvider, LogoutButton } from '@semapps/auth-provider';

import i18nProvider from './config/i18nProvider';
import dataProvider from './config/dataProvider';
import * as resources from './resources';

import Layout from './layout/Layout';
import theme from './layout/theme';
import LoginPage from './layout/LoginPage';
import AboutPage from './layout/AboutPage';
import HomePage from './layout/HomePage';

const history = createBrowserHistory();

const App = () => (
  <Admin
    authProvider={authProvider(process.env.REACT_APP_MIDDLEWARE_URL)}
    dataProvider={dataProvider}
    i18nProvider={i18nProvider}
    layout={Layout}
    theme={theme}
    history={history}
    loginPage={LoginPage}
    logoutButton={LogoutButton}
    dashboard={HomePage}
    customRoutes={[
      <Route exact path="/QuiSommesNous" component={AboutPage} />,
    ]}
  >
    {Object.entries(resources).map(([key, resource]) => (
      <Resource key={key} name={key} {...resource.config} />
    ))}
  </Admin>
);

export default App;
