import React from 'react';
import { Typography } from '@material-ui/core';
import Markdown from 'markdown-to-jsx';
import { MainList, Show, LargeLabel } from '@semapps/archipelago-layout';
import DocumentTitle from './DocumentTitle';
import * as addons from "../../../addons";

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

const DocumentShow = props => (
  <Show title={<DocumentTitle />} {...props}>
    <>
      <MainList>
        <Typography variant="h3" color="primary" component="h1" id="react-admin-title" />
        <MarkdownField source="pair:description" addLabel={false} />
      </MainList>
    </>
  </Show>
);

export default DocumentShow;
