import React from 'react';
import { Card, CardContent, makeStyles } from '@material-ui/core';
import Document from './Document';
import LatestNews from './LatestNews';
import LatestProjectList from './LatestProjectList';

const useStyles = makeStyles(theme => ({
  card: {
    marginTop: 72
  },
  document: {
    paddingTop: 5
  }
}));

const Home = () => {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardContent className={classes.document}>
        <Document id="bienvenue-chez-les-colibris-du-pays-creillois" />
        <br />
        <LatestProjectList />
        <LatestNews />
      </CardContent>
    </Card>
  );
};

export default Home;
