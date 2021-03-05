import React from 'react';
import { ListBase, useListContext, Link } from 'react-admin';
import { Button, Box } from '@material-ui/core';

const ButtonsList = () => {
  const { ids, data, basePath } = useListContext();
  return ids.map(id => (
    <Box key={id} mb={1}>
      <Link to={basePath + '/' + encodeURIComponent(data[id].id) + '/show'}>
        <Button variant="contained" color="primary" fullWidth>
          {data[id]['pair:label']}
        </Button>
      </Link>
    </Box>
  ));
};

export const References = ({ documentUri }) => (
  <ListBase resource="Document" basePath="/Document" filter={{ 'pair:referencedBy': documentUri }}>
    <ButtonsList />
  </ListBase>
);

export default References;
