import React from 'react';
import Grid from 'material-ui/Grid';
import Divider from 'material-ui/Divider';
import { withStyles } from 'material-ui/styles';

import EventCard from './event';
import Header from './header';
import Jumbo from './jumbo';
import Nav from './nav';
import { links } from './links';
import { slides } from './slides';

const styles = theme => ({ main: { marginTop: '50px' }});

const Styled = withStyles(styles);
const Main = ({ classes }) => (
  <Grid container justify="center" align="center">
    <Grid item xs={12}>
      <Nav />
    </Grid>
    <Grid item xs={12} className={classes.main}>
      <Grid container justify="center">
        <Grid item xs={12}>
          <Header>{slides.map(s => <Jumbo event={s} key={s.id} />)}</Header>
        </Grid>
        <Grid item xs={11}>
          <Grid container justify="center" spacing={40}>
            {links.map(e => (
              <Grid item xs={6} md={4} key={e.id}>
                <EventCard event={e} />
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
