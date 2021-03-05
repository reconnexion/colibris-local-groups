import PairResourceCreate from '../../../PairResourceCreate';
import ProjectEdit from './ProjectEdit';
import ProjectList from './ProjectList';
import ProjectShow from './ProjectShow';
import SettingsIcon from '@material-ui/icons/Settings';

export default {
  config: {
    list: ProjectList,
    show: ProjectShow,
    create: PairResourceCreate,
    edit: ProjectEdit,
    icon: SettingsIcon,
    options: {
      label: 'Projets'
    }
  },
  dataModel: {
    types: ['pair:Project'],
    containerUri: process.env.REACT_APP_MIDDLEWARE_URL + 'projects',
    slugField: 'pair:label',
    filter: {
      'pair:supportedBy': process.env.REACT_APP_LOCAL_GROUP_URL
    }
  },
  translations: {
    fr: {
      name: 'Projet |||| Projets',
      fields: {
        'pair:label': 'Nom',
        'pair:comment': 'Courte description',
        'pair:description': 'Description',
        'pair:aboutPage': 'Site web',
        'pair:involves': 'Implique',
        'pair:documentedBy': 'Documenté par',
        'pair:hasTopic': 'A pour thème',
        'pair:hasStatus': 'Statut',
        published: 'Publié',
        updated: 'Mis à jour',
        outbox: 'Actualités'
      }
    }
  }
};
