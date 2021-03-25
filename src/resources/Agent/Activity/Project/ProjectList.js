import React from 'react';
import { List } from 'react-admin';
import { MasonryList } from '@semapps/archipelago-layout';
import ProjectPreview from "./ProjectPreview";
import ProjectFilterSidebar from "./ProjectFilterSidebar";

const ProjectList = props => (
  <List title="Frise des actions" aside={<ProjectFilterSidebar />} perPage={100} pagination={false} sort={{ field: 'published', order: 'ASC' }} {...props}>
    <MasonryList
      image={record => record.image}
      content={record => <ProjectPreview record={record} />}
      linkType="show"
    />
  </List>
);

export default ProjectList;
