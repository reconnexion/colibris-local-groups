import React from 'react';
import { ImageInput, SimpleForm, TextInput } from 'react-admin';
import { Edit } from '@semapps/archipelago-layout';
import { ActivitiesInput, OrganizationsInput, ThemesInput } from '../../../../inputs';
import { ImageField } from '@semapps/semantic-data-provider';
import PersonTitle from './PersonTitle';
import PairLocationInput from "../../../../pair/PairLocationInput";

export const PersonEdit = props => (
  <Edit title={<PersonTitle />} transform={data => ({ ...data, 'pair:label': `${data['pair:firstName']} ${data['pair:lastName']?.toUpperCase()}`})} {...props}>
    <SimpleForm redirect="show">
      <TextInput source="pair:firstName" fullWidth />
      <ImageInput source="pair:image" accept="image/*">
        <ImageField source="src" />
      </ImageInput>
      <ActivitiesInput source="pair:involvedIn" />
      <OrganizationsInput source="pair:affiliatedBy" />
      <ThemesInput source="pair:hasTopic" />
      <PairLocationInput source="pair:hasLocation" fullWidth />
    </SimpleForm>
  </Edit>
);

export default PersonEdit;
