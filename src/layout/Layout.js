import React, { useState } from 'react';
import { Notification } from 'react-admin';
import { Container, Box, useMediaQuery, ThemeProvider, makeStyles, Typography } from '@material-ui/core';
import { UserMenu, LogoutButton } from '@semapps/auth-provider';
import AppBar from './AppBar';
import ScrollToTop from './ScrollToTop';
import SideMenu from './SideMenu';

const useStyles = makeStyles(theme => ({
  hero: {
    backgroundImage: `url('${process.env.PUBLIC_URL}/bandeau.jpg')`
  },
  userMenu: {
    float: 'right',
    marginTop: theme.spacing(2),
    backgroundColor: theme.palette.secondary.main,
    '& button': {
      padding: '6px 12px'
    }
  },
  title: {
    position: 'absolute',
    top: 180,
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    [theme.breakpoints.down('sm')]: {
      top: 75,
      left: 10,
      right: 10,
      fontSize: 30
    }
  }
}));

const menuItems = {
  '/': 'Accueil',
  '/Project': 'Frise\ndes actions',
  '/Organization': 'Annuaire\ndes acteurs',
  '/Event': 'Agenda\npartagé',
  '/Person': 'Trombino\nscope',
  '/Document': 'Médiathèque'
};

const Layout = ({ appBar, logout, theme, children }) => {
  const classes = useStyles();
  const xs = useMediaQuery(theme.breakpoints.down('xs'));
  const [ sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <ThemeProvider theme={theme}>
      <ScrollToTop />
      <SideMenu menuItems={menuItems} sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      {!xs && (
        <Box width={1} height="90px" className={classes.hero}>
          <Container>
            <UserMenu logout={<LogoutButton />} classes={{ user: classes.userMenu }} />
          </Container>
        </Box>
      )}
      {React.cloneElement(appBar, { logout, menuItems, setSidebarOpen })}
      <Container maxWidth="lg" disableGutters={xs}>
        <Typography variant="h4" color="primary" className={classes.title} id="react-admin-title" component="h1" />
        <Box mb={{ xs: 0, sm: 5 }}>{children}</Box>
      </Container>
      {/* Required for react-admin optimistic update */}
      <Notification />
    </ThemeProvider>
  );
};

Layout.defaultProps = {
  appBar: <AppBar />
};

export default Layout;
