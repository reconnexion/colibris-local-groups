import React from 'react';
import { TextField } from 'react-admin';
import { MainList, Hero, Show, MarkdownField } from '@semapps/archipelago-layout';
import ThemeTitle from './ThemeTitle';

const ThemeShow = props => (
  <Show title={<ThemeTitle />} {...props}>
    <>
      <Hero image="image">
        <TextField source="pair:comment" />
      </Hero>
      <MainList>
        <MarkdownField source="pair:description" />
      </MainList>
    </>
  </Show>
);

export default ThemeShow;
