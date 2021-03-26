import React from 'react';
import {Typography, Box, makeStyles} from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { MainList, Show } from '@semapps/archipelago-layout';
import MarkdownField from "../../../markdown/MarkdownField";
import DocumentTitle from './DocumentTitle';
import useDoubleClick from "../../../layout/useDoubleClick";

const useStyles = makeStyles(theme => ({
  card: {
    paddingTop: 10,
    [theme.breakpoints.down('sm')]: {
      paddingTop: 0
    }
  }
}));

const DocumentShow = props => {
  const history = useHistory();
  const classes = useStyles();
  const [refCallback] = useDoubleClick(() => history.push(props.basePath + '/' + encodeURIComponent(props.id) + '/edit'));
  return (
    <Show title={<DocumentTitle />} classes={{ card: classes.card }} {...props}>
      <>
        <Box ref={refCallback}>
          <MainList>
            <Typography variant="h3" color="primary" component="h1" id="react-admin-title" />
            <MarkdownField source="pair:description" addLabel={false} />
          </MainList>
        </Box>
      </>
    </Show>
  );
}

export default DocumentShow;
