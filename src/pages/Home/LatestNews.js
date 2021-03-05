import React from 'react';
import { ListBase } from 'react-admin';
import { AccordionList, MarkdownField, LargeLabel } from '@semapps/archipelago-layout';

export const LatestNews = () => (
  <>
    <LargeLabel>Dernières actualités</LargeLabel>
    <ListBase resource="Note" basePath="/Note" sort={{ field: 'published', order: 'ASC' }}>
      <AccordionList
        date={record => record && record.published}
        title={record => record && record.name}
        content={record => <MarkdownField record={record} source="content" />}
      />
    </ListBase>
  </>
);

export default LatestNews;
