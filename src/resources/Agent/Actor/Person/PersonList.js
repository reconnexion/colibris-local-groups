import React from 'react';
import { List, GridList, AvatarField } from '@semapps/archipelago-layout';

const PersonList = props => (
  <List title="Trombinoscope" sort={{ field: 'as:name', order: 'DESC' }} perPage={100} pagination={false} {...props}>
    <GridList xs={2} linkType="show">
      <AvatarField label="pair:label" image="pair:image" labelColor="#afc544" />
    </GridList>
  </List>
);

export default PersonList;
