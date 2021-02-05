import React from 'react';
import { SimpleForm, TextInput } from 'react-admin';
import MarkdownInput from 'ra-input-markdown';
import { Edit } from '@semapps/archipelago-layout';
import { DocumentsInput } from '../../../inputs';
import DocumentTitle from './DocumentTitle';

export const DocumentEdit = props => (
  <Edit title={<DocumentTitle />} {...props}>
    <SimpleForm redirect="show">
      <TextInput source="pair:label" fullWidth />
      <MarkdownInput multiline source="pair:description" fullWidth />
      <DocumentsInput source="pair:references" />
      <DocumentsInput source="pair:referencedBy" />
    </SimpleForm>
  </Edit>
);

export default DocumentEdit;
