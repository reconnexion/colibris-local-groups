import React from 'react';
import { List } from '@semapps/archipelago-layout';
import { MapList } from '@semapps/geo-components';

const OrganizationList = props => (
  <List title="Annuaire des acteurs" perPage={500} pagination={false} {...props}>
    <MapList
      latitude={record => record['pair:hasLocation'] && record['pair:hasLocation']['pair:latitude'] }
      longitude={record => record['pair:hasLocation'] && record['pair:hasLocation']['pair:longitude'] }
      label={record => record['pair:label']}
      description={record => record['pair:description']}
      center={[49.2839, 2.5955]}
      zoom={11}
      scrollWheelZoom
    />
  </List>
);

export default OrganizationList;
