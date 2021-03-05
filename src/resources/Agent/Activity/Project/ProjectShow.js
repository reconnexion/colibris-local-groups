import React from 'react';
import { ChipField, SingleFieldList, DateField, UrlField, ReferenceField, TextField } from 'react-admin';
import { SideList, MainList, Hero, Show, MarkdownField, AccordionList } from '@semapps/archipelago-layout';
import { Grid } from '@material-ui/core';
import { UriArrayField } from '@semapps/semantic-data-provider';
import { ActivitiesList } from '@semapps/activitypub-components';
import ProjectTitle from './ProjectTitle';

const ProjectShow = props => (
  <Show title={<ProjectTitle />} {...props}>
    <Grid container spacing={5}>
      <Grid item xs={12} sm={9}>
        <Hero image="image">
          <DateField source="published" showTime />
          <DateField source="updated" showTime />
          <ReferenceField source="pair:hasStatus" reference="ProjectStatus" link={false}>
            <TextField source="pair:label" />
          </ReferenceField>
          <UrlField source="pair:aboutPage" />
        </Hero>
        <MainList>
          <MarkdownField source="pair:description" />
          <ActivitiesList source="outbox">
            <AccordionList
              date={record => record && record.published}
              title={record => record && record.name}
              content={record => <MarkdownField record={record} source="content" />}
            />
          </ActivitiesList>
        </MainList>
      </Grid>
      <Grid item xs={12} sm={3}>
        <SideList>
          <UriArrayField reference="Theme" source="pair:hasTopic">
            <SingleFieldList linkType={false}>
              <ChipField source="pair:label" color="primary" />
            </SingleFieldList>
          </UriArrayField>
        </SideList>
      </Grid>
    </Grid>
  </Show>
);

export default ProjectShow;
