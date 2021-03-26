import React from 'react';
import { SimpleForm, TextInput } from 'react-admin';
import { Edit } from '@semapps/archipelago-layout';
import MarkdownInput from '../../../markdown/MarkdownInput'
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
