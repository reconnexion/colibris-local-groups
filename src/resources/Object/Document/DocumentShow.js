import React from 'react';
import { Typography } from '@material-ui/core';
import { MainList, Show, MarkdownField } from '@semapps/archipelago-layout';
import DocumentTitle from './DocumentTitle';

const EventShow = props => (
  <Show title={<DocumentTitle />} {...props}>
    <MainList>
      <Typography variant="h3" color="primary" component="h1" id="react-admin-title" />
      <MarkdownField source="pair:description" addLabel={false} />
    </MainList>
  </Show>
);

export default EventShow;
