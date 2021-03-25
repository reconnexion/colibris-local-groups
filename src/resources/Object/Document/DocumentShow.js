import React from 'react';
import { Typography, Box } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import Markdown from 'markdown-to-jsx';
import { MainList, Show, LargeLabel } from '@semapps/archipelago-layout';
import DocumentTitle from './DocumentTitle';
import * as addons from "../../../addons";
import useDoubleClick from "../../../layout/useDoubleClick";

const MarkdownField = ({ source, record }) =>
  record && record[source] ? <Markdown options={{
    createElement(type, props, children) {
      if( props.label ) {
        return (
          <>
            <LargeLabel>{props.label}</LargeLabel>
            {React.createElement(type, props, children)}
          </>
        );
      } else {
        return React.createElement(type, props, children)
      }
    },
    overrides: {
      h1: LargeLabel,
      ...addons
    },
  }}>
    {record[source]}
</Markdown> : null;

const DocumentShow = props => {
  const history = useHistory();
  const [refCallback] = useDoubleClick(() => history.push(props.basePath + '/' + encodeURIComponent(props.id) + '/edit'));
  return (
    <Show title={<DocumentTitle />} {...props}>
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
