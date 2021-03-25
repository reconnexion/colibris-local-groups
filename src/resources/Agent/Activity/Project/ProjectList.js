import React from 'react';
import { List } from 'react-admin';
import { MasonryList } from '@semapps/archipelago-layout';
import { Typography, makeStyles } from '@material-ui/core';
import ProjectPreview from "./ProjectPreview";

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
        content={record => <ProjectPreview record={record} />}
        linkType="show"
      />
    </List>
  );
};

export default ProjectList;
