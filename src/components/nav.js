import React from 'react';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Text from 'material-ui/Typography';
import Button from 'material-ui/Button';
import Grid from 'material-ui/Grid';
import { Link } from 'react-router-dom';

import NavMenu from './menu';

const tStyle = { fontFamily: 'Roboto', color: '#a7a7a7' };
const aStyle = { backgroundColor: '#fff', minHeight: '50px' };

const Nav = () => (
  <AppBar elevation={0} style={aStyle}>
    <Toolbar>
      <Grid container align="center">
        <Grid item xs>
          <Link to="/">
            <img src="/images/logo.svg" alt="logo" />
          </Link>
        </Grid>
        <Grid item xs>
          <Grid container justify="flex-end" align="center" spacing={0}>
            <Grid item hidden={{ xsDown: true }}>
              <Text type="button" style={tStyle}>
                212.555.5555
              </Text>
            </Grid>
            <Grid item hidden={{ xsDown: true }}>
              <Button style={tStyle}> Login</Button>
            </Grid>
            <Grid item>
              <NavMenu />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Toolbar>
  </AppBar>
);

export default Nav;
