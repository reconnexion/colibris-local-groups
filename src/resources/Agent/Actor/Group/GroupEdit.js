import React from 'react';
import { SimpleForm, TextInput } from 'react-admin';
import MarkdownInput from '../../../../markdown/MarkdownInput'
import { Edit } from '@semapps/archipelago-layout';
import { PersonsInput } from '../../../../inputs';
import GroupTitle from './GroupTitle';

export const GroupEdit = props => (
  <Edit title={<GroupTitle />} {...props}>
    <SimpleForm redirect="show">
      <TextInput source="pair:label" />
      <MarkdownInput multiline source="pair:description" fullWidth />
      <PersonsInput source="pair:affiliates" />
    </SimpleForm>
  </Edit>
);

export default GroupEdit;
