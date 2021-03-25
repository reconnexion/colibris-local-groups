import React from 'react';
import { Typography } from "@material-ui/core";
import { TextField, Datagrid } from 'react-admin';
import { MainList, Hero, Show, MarkdownField, GridList, AvatarField, MasonryList } from '@semapps/archipelago-layout';
import { ReferenceArrayField } from '@semapps/semantic-data-provider';
import ThemeTitle from './ThemeTitle';
import ProjectPreview from "../../Agent/Activity/Project/ProjectPreview";

const ThemeShow = props => (
  <Show title={<ThemeTitle />} {...props}>
    <>
      <Hero image="image">
        <TextField source="pair:comment" />
      </Hero>
      <MainList>
        <MarkdownField source="pair:description" addLabel={false} />
        <ReferenceArrayField label="Personnes" reference="Person" filter={{ type: 'Person' }} source="pair:topicOf">
          <GridList xs={2} linkType="show">
            <AvatarField label={record => `${record['pair:firstName']} ${record['pair:lastName']}`} image="pair:image" labelColor="#afc544" />
          </GridList>
        </ReferenceArrayField>
        <ReferenceArrayField label="Acteurs" reference="Organization" filter={{ type: 'pair:Organization' }} source="pair:topicOf">
          <Datagrid rowClick="show">
            <TextField source="pair:label" />
          </Datagrid>
        </ReferenceArrayField>
        <ReferenceArrayField label="Projets La Fabrique" reference="Project" filter={{ type: 'pair:Project', 'pair:supportedBy': "http://localhost:3000/services/lafabrique", }} source="pair:topicOf">
          <MasonryList
            image={record => Array.isArray(record?.image) ? record?.image?.[0] : record?.image || record?.['pair:hasTopic']?.[0]?.image || record?.['pair:hasTopic']?.[1]?.image}
            content={record => <ProjectPreview record={record} />}
            breakpointCols={{ default: 4, 900: 3, 450: 1 }}
            linkType="show"
          />
        </ReferenceArrayField>
      </MainList>
    </>
  </Show>
);

export default ThemeShow;
