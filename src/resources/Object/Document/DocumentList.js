import React from 'react';
import { List, SimpleList } from '@semapps/archipelago-layout';
import DescriptionIcon from '@material-ui/icons/Description';

const DocumentList = props => (
  <List title="Médiathèque" {...props}>
    <SimpleList primaryText={record => record['pair:label']} leftIcon={() => <DescriptionIcon />} linkType="show" />
  </List>
);

export default DocumentList;
