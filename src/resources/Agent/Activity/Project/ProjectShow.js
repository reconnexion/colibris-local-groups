import React from 'react';
import { ChipField, SingleFieldList, TextField, UrlField } from 'react-admin';
import { Column, ColumnShowLayout, Hero, UserIcon, GridList, Show, MarkdownField } from '@semapps/archipelago-layout';
import { UriArrayField } from '@semapps/semantic-data-provider';
import ProjectTitle from './ProjectTitle';

const ProjectShow = props => (
  <Show title={<ProjectTitle />} {...props}>
    <ColumnShowLayout>
      <Column xs={12} sm={9}>
        <Hero image="image">
          <TextField label="Courte description" source="pair:comment" />
          <UrlField label="Site web" source="pair:homePage" />
        </Hero>
        <MarkdownField source="pair:description" />
      </Column>
      <Column xs={12} sm={3} showLabel>
        <UriArrayField
          label="Organisations"
          reference="Organization"
          filter={{ '@type': 'pair:Organization' }}
          source="pair:involves"
        >
          <SingleFieldList linkType="show">
            <ChipField source="pair:label" color="secondary" />
          </SingleFieldList>
        </UriArrayField>
        <UriArrayField label="Personnes" reference="User" filter={{ '@type': 'pair:Person' }} source="pair:involves">
          <GridList xs={6} linkType="show">
            <UserIcon />
          </GridList>
        </UriArrayField>
        <UriArrayField reference="Theme" source="pair:hasTopic">
          <SingleFieldList linkType={false}>
            <ChipField source="pair:label" color="primary" />
          </SingleFieldList>
        </UriArrayField>
        <UriArrayField reference="ProjectStatus" source="pair:hasStatus">
          <SingleFieldList linkType={false}>
            <ChipField source="pair:label" color="primary" />
          </SingleFieldList>
        </UriArrayField>
        <UriArrayField reference="Document" source="pair:documentedBy">
          <SingleFieldList linkType="show">
            <ChipField source="pair:label" color="primary" />
          </SingleFieldList>
        </UriArrayField>
      </Column>
    </ColumnShowLayout>
  </Show>
);

export default ProjectShow;
