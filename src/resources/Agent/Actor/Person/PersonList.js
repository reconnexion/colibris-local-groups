import React from 'react';
import { List, SimpleList } from '@semapps/archipelago-layout';

const PersonList = props => (
  <List title="Trombinoscope" sort={{ field: 'as:name', order: 'DESC' }} {...props}>
    <SimpleList
      primaryText={record => record.name}
      secondaryText={record => record['pair:comment']}
      leftAvatar={record => (
        <img src={record['image'] || process.env.PUBLIC_URL + '/unknown-user.png'} width="100%" alt="SemApps" />
      )}
      linkType="show"
    />
  </List>
);

export default PersonList;
