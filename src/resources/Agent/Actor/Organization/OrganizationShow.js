import React from 'react';
import { TextField, UrlField } from 'react-admin';
import { Hero, MainList, Show, MarkdownField, SeparatedListField } from '@semapps/archipelago-layout';
import OrganizationTitle from './OrganizationTitle';
import {ReferenceArrayField} from "@semapps/semantic-data-provider";

const OrganizationShow = props => (
  <Show title={<OrganizationTitle />} {...props}>
    <>
      <Hero image="image">
        <TextField source="pair:phone" />
        <UrlField source="pair:aboutPage" />
        <UrlField source="pair:webPage" />
        <ReferenceArrayField reference="Theme" source="pair:hasTopic">
          <SeparatedListField linkType="show">
            <TextField source="pair:label" />
          </SeparatedListField>
        </ReferenceArrayField>
      </Hero>
      <MainList>
        <MarkdownField source="pair:description" />
      </MainList>
    </>
  </Show>
);

export default OrganizationShow;
