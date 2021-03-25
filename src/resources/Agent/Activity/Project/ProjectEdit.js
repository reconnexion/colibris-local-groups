import React from 'react';
import { ImageInput, SimpleForm, TextInput } from 'react-admin';
import MarkdownInput from 'ra-input-markdown';
import { Edit } from '@semapps/archipelago-layout';
import { DocumentsInput, ThemesInput, StatusInput } from '../../../../inputs';
import ProjectTitle from './ProjectTitle';
import { ImageField } from '@semapps/semantic-data-provider';

const ProjectEdit = props => (
  <Edit title={<ProjectTitle />} {...props}>
    <SimpleForm redirect="show">
      <TextInput source="pair:label" fullWidth />
      <TextInput source="pair:comment" fullWidth />
      <MarkdownInput multiline source="pair:description" fullWidth />
      <TextInput source="pair:homePage" fullWidth />
      <ImageInput source="image" accept="image/*">
        <ImageField source="src" />
      </ImageInput>
      <DocumentsInput source="pair:documentedBy" />
      <ThemesInput source="pair:hasTopic" />
      <StatusInput source="pair:hasStatus" />
    </SimpleForm>
  </Edit>
);

export default ProjectEdit;
