import React from 'react';
import { DateField, UrlField, TextField } from 'react-admin';
import { MainList, Hero, Show, AccordionList, SeparatedListField, GridList, AvatarField } from '@semapps/archipelago-layout';
import { ReferenceArrayField } from '@semapps/semantic-data-provider';
import { ActivitiesList } from '@semapps/activitypub-components';
import MarkdownField from "../../../../markdown/MarkdownField";
import ProjectTitle from './ProjectTitle';
import NotePreview from "../../../ActivityPub/NotePreview";

const ProjectShow = props => (
  <Show title={<ProjectTitle />} {...props}>
    <>
      <Hero image="image">
        <DateField source="published" showTime />
        <DateField source="updated" showTime />
        <ReferenceArrayField reference="Status" source="pair:hasStatus">
          <SeparatedListField linkType={false}>
            <TextField source="pair:label" />
          </SeparatedListField>
        </ReferenceArrayField>
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
            <AvatarField label="pair:label" image="pair:image" labelColor="#afc544" />
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
