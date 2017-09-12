import React from 'react';
import Grid from 'material-ui/Grid';
import SwipeableViews from 'react-swipeable-views';
import Lens from 'material-ui-icons/Lens';
import Tabs, { Tab } from 'material-ui/Tabs';
import { autoPlay } from 'react-swipeable-views-utils';
import { compose, withHandlers, withState } from 'recompose';

const AutoViews = autoPlay(SwipeableViews);

const wIndex = compose(
  withState('index', 'setIndex', ({ index = 0 }) => index),
  withHandlers({
    changeSet: ({ setIndex }) => (e, i) => setIndex(i),
    autoSet: ({ setIndex }) => i => setIndex(i),
    idxSet: ({ setIndex }) => i => () => setIndex(i),
  })
);

const Header = ({ children, autoSet, changeSet, idxSet, index }) => (
  <Grid container justify="center" align="center">
    <Grid item xs={12}>
      <AutoViews
        autoplay
        ignoreNativeScroll
        interval={5000}
        enableMouseEvents
        onChangeIndex={autoSet}
      >
        {children}
      </AutoViews>
    </Grid>
    <Grid item xs={11}>
      <Tabs
        centered
        value={index}
        textColor="primary"
        indicatorColor="primary"
        onChange={changeSet}
      >
        {children.map((c, i) => (
          <Tab onClick={idxSet(i)} key={i} icon={<Lens />} />
        ))}
      </Tabs>
    </Grid>
  </Grid>
);

export default wIndex(Header);
