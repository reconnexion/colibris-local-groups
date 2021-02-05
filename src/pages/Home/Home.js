import * as React from 'react';
import { Grid, Card, CardContent, makeStyles } from '@material-ui/core';
import Document from './Document';
import References from './References';

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
    <>
      <Card className={classes.card}>
        <Grid container spacing={3}>
          <Grid item xs={9}>
            <CardContent className={classes.document}>
              <Document id="bienvenue-chez-les-colibris-du-pays-creillois" />
            </CardContent>
          </Grid>
          <Grid item xs={3}>
            <CardContent>
              <References documentUri={process.env.REACT_APP_MIDDLEWARE_URL + 'documents/bienvenue-chez-les-colibris-du-pays-creillois'} />
            </CardContent>
          </Grid>
        </Grid>
      </Card>
    </>
  );
};

export default Home;
