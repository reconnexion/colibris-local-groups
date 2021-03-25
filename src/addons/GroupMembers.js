import React from 'react';
import { ListBase } from 'react-admin';
import { GridList, AvatarField } from '@semapps/archipelago-layout';

export const GroupMembers = ({ groupSlug }) => (
  <ListBase resource="Person" basePath="/Person" filter={{ 'pair:affiliatedBy': process.env.REACT_APP_MIDDLEWARE_URL + 'groups/' + groupSlug }} sort={{ field: 'pair:firstName', order: 'ASC' }}>
    <GridList xs={2} linkType="show">
      <AvatarField label={record => `${record['pair:firstName']} ${record['pair:lastName']}`} image="pair:image" labelColor="#afc544" />
    </GridList>
  </ListBase>
);

export default GroupMembers;
