import * as React from 'react';
import { ListBase, useListContext, Link } from 'react-admin';
import { Button, Box } from '@material-ui/core';

const ButtonsList = ({ documentUri }) => {
  const { ids, data } = useListContext();
  return ids
    .filter(id => Array.isArray(data[id]['pair:referencedBy']) ? data[id]['pair:referencedBy'].includes(documentUri) : data[id]['pair:referencedBy'] === documentUri)
    .map(id => (
      <Box key={id} mb={1}>
        <Link to={'/Document/' + encodeURIComponent(data[id].id) + '/show'}>
          <Button variant="contained" color="primary" fullWidth>
            {data[id]['pair:label']}
          </Button>
        </Link>
      </Box>
    ));
};

export const References = ({ documentUri }) => (
  <ListBase resource="Document" basePath="/Document">
    <ButtonsList documentUri={documentUri} />
  </ListBase>
);

export default References;
