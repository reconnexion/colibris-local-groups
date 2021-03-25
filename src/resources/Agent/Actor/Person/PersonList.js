import React from 'react';
import { Avatar } from '@material-ui/core';
import { List, SimpleList, GridList, AvatarField } from '@semapps/archipelago-layout';
import PersonIcon from '@material-ui/icons/Person';

const PersonList = props => (
  <List title="Trombinoscope" sort={{ field: 'as:name', order: 'DESC' }} perPage={100} pagination={false} {...props}>
    <GridList xs={2} linkType="show">
      <AvatarField label={record => `${record['pair:firstName']} ${record['pair:lastName']}`} image="pair:image" labelColor="#afc544" />
    </GridList>
  </List>
);

export default PersonList;
