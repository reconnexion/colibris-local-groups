import React from 'react';
import { ListBase } from 'react-admin';
import { MasonryList } from '@semapps/archipelago-layout';
import ProjectPreview from "../resources/Agent/Activity/Project/ProjectPreview";

const LatestProjectsList = () => (
  <ListBase resource="Project" basePath="/Project" perPage={4} sort={{ field: 'published', order: 'ASC' }}>
    <MasonryList
      image={record => record.image || record['pair:hasTopic']?.[0]?.image || record['pair:hasTopic']?.[1]?.image}
      content={record => <ProjectPreview record={record} />}
      breakpointCols={{ default: 4, 900: 3, 450: 1 }}
      linkType="show"
    />
  </ListBase>
);

export default LatestProjectsList;
