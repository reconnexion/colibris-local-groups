import React from 'react';
import { TextField, Datagrid, TabbedShowLayout, Tab } from 'react-admin';
import { makeStyles } from "@material-ui/core";
import { MainList, Show, GridList, AvatarField, MasonryList } from '@semapps/archipelago-layout';
import { ReferenceArrayField } from '@semapps/semantic-data-provider';
import MarkdownField from "../../../markdown/MarkdownField";
import ThemeTitle from './ThemeTitle';
import ProjectPreview from "../../Agent/Activity/Project/ProjectPreview";
import TabbedTypeField from "./TabbedTypeField";
import ContainerTab from "./ContainerTab";

const useStyles = makeStyles(theme => ({
  card: {
    padding: 0
  }
}));

const ThemeShow = props => {
  const classes = useStyles();
  return (
    <Show title={<ThemeTitle />} classes={{ card: classes.card }} {...props}>
      <TabbedShowLayout>
        <Tab label="Personnes">
          <ReferenceArrayField reference="Person" filter={{ type: 'Person' }} source="pair:topicOf" addLabel={false}>
            <GridList xs={2} linkType="show">
              <AvatarField label="pair:label" image="pair:image" labelColor="#afc544" />
            </GridList>
          </ReferenceArrayField>
        </Tab>
        <Tab label="Acteurs locaux">
          <ReferenceArrayField reference="Organization" filter={{ type: 'pair:Organization' }} source="pair:topicOf" addLabel={false}>
            <Datagrid rowClick="show">
              <TextField source="pair:label" />
              <TextField source="pair:hasLocation.pair:label" />
            </Datagrid>
          </ReferenceArrayField>
        </Tab>
        <Tab label="Projets La Fabrique">
          <ReferenceArrayField label="Projets La Fabrique" reference="Project" filter={{ type: 'pair:Project', 'pair:supportedBy': "http://localhost:3000/services/lafabrique", }} source="pair:topicOf" addLabel={false}>
            <MasonryList
              image={record => Array.isArray(record?.image) ? record?.image?.[0] : record?.image}
              content={record => <ProjectPreview record={record} />}
              breakpointCols={{ default: 4, 900: 3, 450: 1 }}
              linkType="show"
            />
          </ReferenceArrayField>
        </Tab>
      </TabbedShowLayout>
    </Show>
  );
}

export default ThemeShow;
