import React from 'react';
import { makeStyles } from "@material-ui/core";
import { MainList, Show } from '@semapps/archipelago-layout';
import MarkdownField from "../../../../markdown/MarkdownField";
import GroupTitle from './GroupTitle';

const useStyles = makeStyles(theme => ({
  card: {
    paddingTop: 0
  }
}));

const GroupShow = props => {
  const classes = useStyles();
  return (
    <Show title={<GroupTitle />} classes={{ card: classes.card }} {...props}>
      <MainList>
        <MarkdownField source="pair:description" addLabel={false} />
      </MainList>
    </Show>
  );
}

export default GroupShow;
