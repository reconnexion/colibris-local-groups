import React from 'react';
import { List, ShowButton, EditButton } from 'react-admin';
import { MasonryList } from '@semapps/archipelago-layout';
import { Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  content: {
    padding: 0
  }
}));

const ProjectList = props => {
  const classes = useStyles();
  return (
    <List title="Frise des actions" component="div" perPage={50} classes={{ content: classes.content }} {...props}>
      <MasonryList
        image={record => record.image}
        content={record => (
          <>
            <Typography variant="h5" color="textPrimary">{record['pair:label']}</Typography>
            <Typography variant="body2" color="textSecondary">
              {record['pair:description'].substring(0, 250)}
            </Typography>
          </>
        )}
        actions={[ShowButton, EditButton]}
        linkType="show"
      />
    </List>
  );
};

export default ProjectList;
