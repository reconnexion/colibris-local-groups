import React from 'react';
import { List, GridList, AvatarField } from '@semapps/archipelago-layout';
import PersonFilterSidebar from "./PersonFilterSidebar";

const PersonList = props => (
  <List title="Trombinoscope" aside={<PersonFilterSidebar />} sort={{ field: 'as:name', order: 'DESC' }} perPage={100} pagination={false} {...props}>
    <GridList xs={3} linkType="show">
      <AvatarField label="pair:firstName" image="pair:image" labelColor="#afc544" />
    </GridList>
  </List>
);

export default PersonList;
