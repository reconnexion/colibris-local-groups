import React from 'react';
import { ImageInput, SimpleForm, TextInput } from 'react-admin';
import { Edit } from '@semapps/archipelago-layout';
import { ActivitiesInput, GroupsInput, ThemesInput } from '../../../../inputs';
import { ImageField } from '@semapps/semantic-data-provider';
import PersonTitle from './PersonTitle';
import PairLocationInput from "../../../../pair/PairLocationInput";

export const PersonEdit = props => (
  <Edit title={<PersonTitle />} transform={data => ({ ...data, 'pair:label': data['pair:firstName'], 'pair:affiliatedBy': [...data['pair:affiliatedBy'], process.env.REACT_APP_LOCAL_GROUP_URL] })} {...props}>
    <SimpleForm redirect="show">
      <TextInput source="pair:firstName" fullWidth />
      <TextInput source="pair:e-mail" fullWidth helperText="N'est pas visible sur le site, mais permet aux personnes de vous contacter via un formulaire." />
      <ImageInput source="pair:image" accept="image/*">
        <ImageField source="src" />
      </ImageInput>
      <ActivitiesInput source="pair:involvedIn" />
      <GroupsInput source="pair:affiliatedBy" />
      <ThemesInput source="pair:hasTopic" />
      <PairLocationInput source="pair:hasLocation" fullWidth helperText="Vous pouvez mettre l'adresse de votre commune si vous ne souhaitez pas être localisable." />
    </SimpleForm>
  </Edit>
);

export default PersonEdit;
