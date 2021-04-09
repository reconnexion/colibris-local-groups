import React from 'react';
import {Typography, Box, makeStyles} from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { MainList, Show } from '@semapps/archipelago-layout';
import MarkdownField from "../../markdown/MarkdownField";
import PageTitle from './PageTitle';
import useDoubleClick from "../../layout/useDoubleClick";

const useStyles = makeStyles(theme => ({
  card: {
    paddingTop: 0
  }
}));

const PageShow = props => {
  const history = useHistory();
  const classes = useStyles();
  const [refCallback] = useDoubleClick(() => history.push(props.basePath + '/' + encodeURIComponent(props.id) + '/edit'));
  return (
    <Show title={<PageTitle />} classes={{ card: classes.card }} {...props}>
      <>
        <Box ref={refCallback}>
          <MainList>
            <Typography variant="h3" color="primary" component="h1" id="react-admin-title" />
            <MarkdownField source="semapps:content" addLabel={false} />
          </MainList>
        </Box>
      </>
    </Show>
  );
}

export default PageShow;
