import React from 'react';
import { Avatar } from '@material-ui/core';
import { List, SimpleList } from '@semapps/archipelago-layout';
import PersonIcon from '@material-ui/icons/Person';

const PersonList = props => (
  <List title="Trombinoscope" sort={{ field: 'as:name', order: 'DESC' }} {...props}>
    <SimpleList
      primaryText={record => record.name}
      secondaryText={record => record['pair:comment']}
      leftAvatar={record => (
        <Avatar src={record['pair:image']} width="100%">
          <PersonIcon />
        </Avatar>
      )}
      linkType="show"
    />
  </List>
);

export default PersonList;
