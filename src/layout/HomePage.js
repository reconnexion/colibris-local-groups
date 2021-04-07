import React from 'react';
import { useShowController, ShowContextProvider } from 'react-admin';
import DocumentShow from "../resources/Object/Document/DocumentShow";

const HomePage = () => {
  const config = {
    basePath: '/Document',
    id: process.env.REACT_APP_MIDDLEWARE_URL + 'documents/bienvenue-chez-les-colibris-du-pays-creillois',
    resource: 'Document'
  };

  return(
    <ShowContextProvider value={useShowController(config)}>
      <DocumentShow {...config} />
    </ShowContextProvider>
  );
};

export default HomePage;
