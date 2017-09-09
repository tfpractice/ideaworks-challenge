import React from 'react';
import Grid from 'material-ui/Grid';
import SwipeableViews from 'react-swipeable-views';
import withWidth from 'material-ui/utils/withWidth';
import { compose, withHandlers, withState } from 'recompose';
import Tabs, { Tab } from 'material-ui/Tabs';

const cStyle = { maxHeight: '15rem' };
const sStyle = {
  overflow: 'auto',
  WebkitOverflowScrolling: 'touch',
};

const wIndex = compose(
  withState('index', 'setIndex', ({ index = 0 }) => index),
  withHandlers({
    changeSet: ({ setIndex }) => (e, i) => setIndex(i),
    idxSet: ({ setIndex }) => i => () => setIndex(i),
  })
);

const Header = ({ children, changeSet, index, iHue = '#f0f' }) => (
  <Grid container justify="center" spacing={0}>
    <Grid item xs={11}>
      <Tabs centered value={index} indicatorColor={iHue} onChange={changeSet}>
        {children.map((c, i) => <Tab key={i} label={'.'} />)}
      </Tabs>
    </Grid>
    <Grid item xs={12}>
      <SwipeableViews
        disabled
        index={index}
        containerStyle={cStyle}
        slideStyle={sStyle}
        enableMouseEvents
        ignoreNativeScroll
      >
        {children}
      </SwipeableViews>
    </Grid>
  </Grid>
);

export default wIndex(Header);
