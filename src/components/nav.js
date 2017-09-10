import React from 'react';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Text from 'material-ui/Typography';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import Grid from 'material-ui/Grid';
import { Link } from 'react-router-dom';

// import Menu from './menu';

const Nav = props => (
  <AppBar>
    <Toolbar>
      <Grid container justify="space-between" align="center">
        <Grid item>
          <Link to="/">
            <img src="/images/logo.svg" />
          </Link>
        </Grid>
        <Grid item />
        <Grid item>
          212.555.5555
          <IconButton color="contrast" aria-label="Menu">
            <MenuIcon />
          </IconButton>
        </Grid>
      </Grid>
    </Toolbar>
  </AppBar>
);

export default Nav;
