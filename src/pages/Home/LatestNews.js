import React from 'react';
import { ListBase } from 'react-admin';
import { AccordionList, LargeLabel } from '@semapps/archipelago-layout';
import NotePreview from '../../resources/ActivityPub/NotePreview';

export const LatestNews = () => (
  <>
    <LargeLabel>Actualités des actions</LargeLabel>
    <ListBase resource="Note" basePath="/Note" filter={{ 'pair:concerns': process.env.REACT_APP_LOCAL_GROUP_URL }} sort={{ field: 'published', order: 'ASC' }}>
      <AccordionList
        date={record => record && record.published}
        title={record => record && record.name}
        content={NotePreview}
      />
    </ListBase>
  </>
);

export default LatestNews;
