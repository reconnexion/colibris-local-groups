import React from 'react';
import { TextField } from 'react-admin';
import { Hero, Show } from '@semapps/archipelago-layout';
import PersonTitle from './PersonTitle';

const PersonShow = props => (
  <Show title={<PersonTitle />} {...props}>
    <>
      <Hero image="pair:image">
        <TextField source="pair:firstName" />
        <TextField source="pair:lastName" />
      </Hero>
    </>
  </Show>
);

export default PersonShow;
