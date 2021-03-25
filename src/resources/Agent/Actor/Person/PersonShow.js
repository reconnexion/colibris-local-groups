import React from 'react';
import { TextField } from 'react-admin';
import { Hero, Show, MainList, SeparatedListField, MasonryList } from '@semapps/archipelago-layout';
import { ReferenceArrayField } from '@semapps/semantic-data-provider';
import { MapField } from "@semapps/geo-components";
import PersonTitle from './PersonTitle';
import ProjectPreview from "../../Activity/Project/ProjectPreview";

const PersonShow = props => (
  <Show title={<PersonTitle />} {...props}>
    <>
      <Hero image="pair:image">
        <TextField source="pair:firstName" />
        <TextField source="pair:lastName" />
        <ReferenceArrayField reference="Theme" source="pair:hasTopic">
          <SeparatedListField linkType="show">
            <TextField source="pair:label" />
          </SeparatedListField>
        </ReferenceArrayField>
      </Hero>
      <MainList>
        <ReferenceArrayField reference="Project" source="pair:involvedIn">
          <MasonryList
            image={record => record?.image || record?.['pair:hasTopic']?.[0]?.image || record?.['pair:hasTopic']?.[1]?.image}
            content={record => <ProjectPreview record={record} />}
            breakpointCols={{ default: 4, 900: 3, 450: 1 }}
            linkType="show"
          />
        </ReferenceArrayField>
        {/*<ReferenceArrayField reference="Organization" source="pair:affiliatedBy">*/}
        {/*  <Datagrid rowClick="show">*/}
        {/*    <TextField source="pair:label" />*/}
        {/*  </Datagrid>*/}
        {/*</ReferenceArrayField>*/}
        <MapField
          source="pair:hasLocation"
          latitude={record => record['pair:hasLocation'] && record['pair:hasLocation']['pair:latitude']}
          longitude={record => record['pair:hasLocation'] && record['pair:hasLocation']['pair:longitude']}
        />
      </MainList>
    </>
  </Show>
);

export default PersonShow;
