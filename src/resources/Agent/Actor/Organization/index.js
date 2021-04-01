import PairResourceCreate from '../../../../pair/PairResourceCreate';
import OrganizationEdit from './OrganizationEdit';
import OrganizationList from './OrganizationList';
import OrganizationShow from './OrganizationShow';
import HomeIcon from '@material-ui/icons/Home';

export default {
  config: {
    list: OrganizationList,
    show: OrganizationShow,
    create: PairResourceCreate,
    edit: OrganizationEdit,
    icon: HomeIcon,
    options: {
      label: 'Organisations'
    }
  },
  dataModel: {
    types: ['pair:Organization', 'pair:Group'],
    containerUri: process.env.REACT_APP_MIDDLEWARE_URL + 'organizations',
    dereference: ['pair:hasLocation/pair:hasPostalAddress'],
    slugField: 'pair:label'
  },
  translations: {
    fr: {
      name: 'Organisation |||| Organisations',
      fields: {
        'pair:label': 'Nom',
        'pair:comment': 'Courte description',
        'pair:description': 'Description',
        'pair:phone': 'Téléphone',
        'pair:aboutPage': 'Page Près de chez nous',
        'pair:webPage': 'Site web',
        image: 'Logo',
        'pair:hasLocation': 'Adresse',
        'pair:affiliates': 'Membres',
        'pair:partnerOf': 'Partenaires',
        'pair:involvedIn': 'Participe à',
        'pair:hasTopic': 'Thèmes',
        'pair:documentedBy': 'Documents'
      }
    }
  }
};
