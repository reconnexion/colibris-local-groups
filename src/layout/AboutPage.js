import React from 'react';
import { useShowController, ShowContextProvider } from 'react-admin';
import DocumentShow from "../resources/Object/Document/DocumentShow";

const AboutPage = () => {
  const config = {
    basePath: '/Document',
    id: process.env.REACT_APP_MIDDLEWARE_URL + 'documents/le-groupe-local',
    resource: 'Document'
  };

  return(
    <ShowContextProvider value={useShowController(config)}>
      <DocumentShow {...config} />
    </ShowContextProvider>
  );
};

export default AboutPage;
