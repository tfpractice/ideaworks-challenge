import React from 'react';
import Toolbar from 'material-ui/Toolbar';
import Grid from 'material-ui/Grid';
import Text from 'material-ui/Typography';
import { withStyles } from 'material-ui/styles';

const styles = { content: { fontFamily: 'Roboto', color: '#a7a7a7' }};

const Footer = ({ classes }) => (
  <Toolbar>
    <Grid container justify="center" align="center">
      <Grid item xs={11}>
        <Text type="button" align="center" className={classes.content}>
          © 2017 — SPARTA PLAESENT - instagram - facebook - twitter
        </Text>
      </Grid>
    </Grid>
  </Toolbar>
);

export default withStyles(styles)(Footer);
