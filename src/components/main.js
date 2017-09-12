import React from 'react';
import Grid from 'material-ui/Grid';
import SwipeableViews from 'react-swipeable-views';
import Divider from 'material-ui/Divider';
import withWidth from 'material-ui/utils/withWidth';
import { compose, withHandlers, withState } from 'recompose';

import { withStyles } from 'material-ui/styles';
import EventCard from './event';
import Header from './header';
import Jumbo from './jumbo';
import Nav from './nav';
import { links } from './links';
import { slides } from './slides';

const styles = theme => ({
  main: { marginTop: '50px' },
  item: { padding: '10px' },
});

const Styled = withStyles(styles);
const Main = ({ classes }) => (
  <Grid container justify="center" align="center">
    <Grid item xs={12}>
      <Nav />
    </Grid>
    <Grid item xs={12} className={classes.main}>
      <Grid container justify="center">
        <Grid item xs>
          <Header>{slides.map((s, i) => <Jumbo event={s} key={i} />)}</Header>
        </Grid>
        <Grid item xs={11}>
          <Grid container justify="center" spacing={40}>
            {links.map(e => (
              <Grid item xs={11} sm={6} md={4} key={e.id}>
                <EventCard event={e} className={classes.item} />
                <Divider />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  </Grid>
);

export default Styled(Main);
