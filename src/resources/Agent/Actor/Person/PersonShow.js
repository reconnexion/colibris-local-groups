import React from 'react';
import { ChipField, SingleFieldList, TextField } from 'react-admin';
import { Column, ColumnShowLayout, Hero, Show } from '@semapps/archipelago-layout';
import { UriArrayField } from '@semapps/semantic-data-provider';
import PersonTitle from './PersonTitle';

const PersonShow = props => (
  <Show title={<PersonTitle />} {...props}>
    <ColumnShowLayout>
      <Column xs={12} sm={9}>
        <Hero image="image">
          <TextField source="pair:firstName" />
          <TextField source="pair:lastName" />
        </Hero>
      </Column>
      <Column xs={12} sm={3} showLabel>
        <UriArrayField reference="Organization" source="pair:affiliatedBy">
          <SingleFieldList linkType="show">
            <ChipField source="pair:label" color="secondary" />
          </SingleFieldList>
        </UriArrayField>
        <UriArrayField
          label="Projets"
          reference="Project"
          filter={{ '@type': 'pair:Project' }}
          source="pair:involvedIn"
        >
          <SingleFieldList linkType="show">
            <ChipField source="pair:label" color="secondary" />
          </SingleFieldList>
        </UriArrayField>
        <UriArrayField label="Evénements" reference="Event" filter={{ '@type': 'pair:Event' }} source="pair:involvedIn">
          <SingleFieldList linkType="show">
            <ChipField source="pair:label" color="secondary" />
          </SingleFieldList>
        </UriArrayField>
        <UriArrayField reference="Theme" source="pair:hasTopic">
          <SingleFieldList>
            <ChipField source="pair:label" color="secondary" />
          </SingleFieldList>
        </UriArrayField>
        <UriArrayField reference="Skill" source="pair:offers">
          <SingleFieldList linkType={false}>
            <ChipField source="pair:label" color="secondary" />
          </SingleFieldList>
        </UriArrayField>
      </Column>
    </ColumnShowLayout>
  </Show>
);

export default PersonShow;
