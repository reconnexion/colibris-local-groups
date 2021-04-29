import React, { useMemo } from 'react';
import { useListContext, ListContextProvider } from 'react-admin';
import { Box } from '@material-ui/core';

const GroupedList = ({ groupBy, selectGroups, header, content }) => {
  const { ids, data, ...rest } = useListContext();

  const groups = useMemo(() => {
    console.log('group calculation');
    if (data) {
      return Object.fromEntries(Object.entries(selectGroups).map(([groupUri]) =>
        ([groupUri, Object.fromEntries(Object.entries(data).filter(([_, record]) =>
          record[groupBy] === groupUri
        ))])
      ));
    } else {
      return {};
    }
  }, [data, groupBy, selectGroups]);

  console.log('groups', groups);

  return (
    Object.entries(groups).map(([groupUri, groupData], i) => (
      <Box key={groupUri} mt={i === 0 ? -4 : 4}>
        {header(groupUri, selectGroups[groupUri])}
        <ListContextProvider value={{ ids: Object.keys(groupData), data: groupData, ...rest }}>
          {content}
        </ListContextProvider>
      </Box>
    ))
  );
};

export default GroupedList;
