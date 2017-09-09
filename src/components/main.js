import React from 'react';
import Grid from 'material-ui/Grid';
import SwipeableViews from 'react-swipeable-views';
import withWidth from 'material-ui/utils/withWidth';
import { compose, withHandlers, withState } from 'recompose';
import { links } from './links';

const Main = () => (
  <Grid container justify="center" spacing={0}>
    <Grid item xs={12}>
      <h1>I am the header</h1>
    </Grid>
    <Grid item xs={12}>
      <h1> I am the links</h1>
    </Grid>
  </Grid>
);

export default Main;
