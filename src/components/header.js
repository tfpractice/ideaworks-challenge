import React from 'react';
import Grid from 'material-ui/Grid';
import SwipeableViews from 'react-swipeable-views';
import withWidth from 'material-ui/utils/withWidth';
import { compose, withHandlers, withState } from 'recompose';
import { autoPlay } from 'react-swipeable-views-utils';

import Tabs, { Tab } from 'material-ui/Tabs';

const AutoViews = autoPlay(SwipeableViews);
const wStyle = {
  maxWidth: '1440px',
  overflow: 'none',
};
const cStyle = {
  maxWidth: '1440px',
  overflow: 'none',
};
const sStyle = {
  overflow: 'none',
  maxWidth: '1440px',

  WebkitOverflowScrolling: 'touch',
};

const wIndex = compose(
  withState('index', 'setIndex', ({ index = 0 }) => index),
  withHandlers({
    increment: ({ index, setIndex, children }) => () =>
      setIndex((index + 1) % children.length),
    changeSet: ({ setIndex }) => (e, i) => setIndex(i),
    idxSet: ({ setIndex }) => i => () => setIndex(i),
  })
);

const Header = ({ children, changeSet, idxSet, index, iHue = '#000' }) => (
  <Grid container justify="center" align="center">
    <Grid item xs={12} style={wStyle}>
      <SwipeableViews
        style={wStyle}
        ignoreNativeScroll
        containerStyle={cStyle}
        slideStyle={sStyle}
        interval={500}
        index={index}
        enableMouseEvents
        onChangeIndex={idxSet}
      >
        {children}
      </SwipeableViews>
    </Grid>
    <Grid item xs={11}>
      <Tabs centered value={index} indicatorColor={iHue} onChange={changeSet}>
        {children.map((c, i) => <Tab key={i} label={'.'} />)}
      </Tabs>
    </Grid>
  </Grid>
);

export default wIndex(Header);
