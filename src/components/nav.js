import React from 'react';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Text from 'material-ui/Typography';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import Grid from 'material-ui/Grid';
import { Link } from 'react-router-dom';

const aStyle = { backgroundColor: '#fff' };
const Nav = props => (
  <AppBar elevation={0} style={aStyle}>
    <Toolbar>
      <Grid container justify="space-between" align="center">
        <Grid item xs>
          <Link to="/">
            <img src="/images/logo.svg" />
          </Link>
        </Grid>
        <Grid item xs>
          <Grid container justify="center" align="center">
            <Grid item>
              <Text> 212.555.5555</Text>
            </Grid>
            <Grid item>
              <Button> Login</Button>
            </Grid>
            <Grid item>
              <IconButton aria-label="Menu">
                <MenuIcon />
              </IconButton>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Toolbar>
  </AppBar>
);

export default Nav;
