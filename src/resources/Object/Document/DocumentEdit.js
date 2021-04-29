import React from 'react';
import { SimpleForm, TextInput, SelectInput } from 'react-admin';
import { Edit } from '@semapps/archipelago-layout';
import { ReferenceInput } from '@semapps/semantic-data-provider';
import MarkdownInput from '../../../markdown/MarkdownInput'
import { DocumentsInput } from '../../../inputs';
import DocumentTitle from './DocumentTitle';

export const DocumentEdit = props => (
  <Edit title={<DocumentTitle />} {...props}>
    <SimpleForm redirect="show">
      <TextInput source="pair:label" fullWidth />
      <MarkdownInput multiline source="pair:description" fullWidth />
      <ReferenceInput reference="Type" source="pair:hasType" filter={{ a: 'pair:DocumentType' }}>
        <SelectInput optionText="pair:label" />
      </ReferenceInput>
      <DocumentsInput source="pair:references" />
      <DocumentsInput source="pair:referencedBy" />
    </SimpleForm>
  </Edit>
);

export default DocumentEdit;
