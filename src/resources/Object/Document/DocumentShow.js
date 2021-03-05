import React from 'react';
import { Typography } from '@material-ui/core';
import { Column, ColumnShowLayout, Show, MarkdownField } from '@semapps/archipelago-layout';
import DocumentTitle from './DocumentTitle';

const EventShow = props => (
  <Show title={<DocumentTitle />} {...props}>
    <ColumnShowLayout>
      <Column xs={12} sm={9}>
        <Typography variant="h3" color="primary" component="h1" id="react-admin-title" />
        <MarkdownField source="pair:description" />
      </Column>
    </ColumnShowLayout>
  </Show>
);

export default EventShow;
