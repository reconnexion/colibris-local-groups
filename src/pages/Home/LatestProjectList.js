import React from 'react';
import { ListBase } from 'react-admin';
import { MasonryList, LargeLabel } from '@semapps/archipelago-layout';
import { Typography } from '@material-ui/core';

const LatestProjectList = () => (
  <>
    <LargeLabel>Dernières actions</LargeLabel>
    <ListBase resource="Project" basePath="/Project" perPage={4} sort={{ field: 'published', order: 'ASC' }}>
      <MasonryList
        image={record => record.image || record['pair:hasTopic']?.[0]?.image || record['pair:hasTopic']?.[1]?.image}
        content={record => (
          <>
            <Typography variant="h5" color="textPrimary">{record['pair:label']}</Typography>
            <Typography variant="body2" color="textSecondary">
              {record['pair:description'].substring(0, 250)}
            </Typography>
          </>
        )}
        breakpointCols={{ default: 4, 900: 3, 450: 1 }}
        linkType="show"
      />
    </ListBase>
  </>
);

export default LatestProjectList;
