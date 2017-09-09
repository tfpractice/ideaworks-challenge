import React from 'react';
import Grid from 'material-ui/Grid';
import SwipeableViews from 'react-swipeable-views';
import withWidth from 'material-ui/utils/withWidth';
import { compose, withHandlers, withState } from 'recompose';

import EventCard from './event';
import Header from './header';
import Jumbo from './jumbo';
import { links } from './links';
import { slides } from './slides';

const Main = () => (
  <Grid container justify="center" spacing={24}>
    <Grid item xs={12}>
      <Header>{slides.map((s, i) => <Jumbo event={s} key={i} />)}</Header>
    </Grid>
    <Grid item xs={11}>
      <Grid container justify="center" spacing={24}>
        {links.map(e => (
          <Grid item xs={11} sm={6} md={4} key={e.id}>
            <EventCard event={e} />
          </Grid>
        ))}
      </Grid>
    </Grid>
  </Grid>
);

export default Main;
