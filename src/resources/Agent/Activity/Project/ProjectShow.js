import React from 'react';
import { DateField, UrlField, TextField } from 'react-admin';
import { MainList, Hero, Show, MarkdownField, AccordionList, SeparatedListField, GridList, AvatarField } from '@semapps/archipelago-layout';
import { ReferenceArrayField, ReferenceField } from '@semapps/semantic-data-provider';
import { ActivitiesList } from '@semapps/activitypub-components';
import ProjectTitle from './ProjectTitle';
import NotePreview from "../../../ActivityPub/NotePreview";

const ProjectShow = props => (
  <Show title={<ProjectTitle />} {...props}>
    <>
      <Hero image="image">
        <DateField source="published" showTime />
        <DateField source="updated" showTime />
        <ReferenceField reference="ProjectStatus" source="pair:hasStatus" link={false}>
          <TextField source="pair:label" />
        </ReferenceField>
        <ReferenceArrayField reference="Theme" source="pair:hasTopic">
          <SeparatedListField linkType="show">
            <TextField source="pair:label" />
          </SeparatedListField>
        </ReferenceArrayField>
        <UrlField source="pair:aboutPage" />
      </Hero>
      <MainList>
        <MarkdownField source="pair:description" addLabel={false} />
        <ReferenceArrayField reference="Person" source="pair:involves">
          <GridList xs={2} linkType="show">
            <AvatarField label={record => `${record['pair:firstName']} ${record['pair:lastName']}`} image="pair:image" labelColor="#afc544" />
          </GridList>
        </ReferenceArrayField>
        <ActivitiesList source="outbox">
          <AccordionList
            date={record => record && record.published}
            title={record => record && record.name}
            content={NotePreview}
          />
        </ActivitiesList>
      </MainList>
    </>
  </Show>
);

export default ProjectShow;
