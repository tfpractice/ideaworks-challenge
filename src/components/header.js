import React from 'react';
import Grid from 'material-ui/Grid';
import SwipeableViews from 'react-swipeable-views';
import withWidth from 'material-ui/utils/withWidth';
import Lens from 'material-ui-icons/Lens';
import { compose, withHandlers, withState } from 'recompose';
import { autoPlay } from 'react-swipeable-views-utils';
import * as views from 'react-swipeable-views';

import Tabs, { Tab } from 'material-ui/Tabs';

console.log('views', autoPlay);

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
    autoSet: ({ setIndex }) => i => setIndex(i),
    idxSet: ({ setIndex }) => i => () => setIndex(i),
  })
);

const Header = ({
  children,
  autoSet,
  changeSet,
  idxSet,
  index,
  iHue = '#000',
}) => (
  <Grid container justify="center" align="center">
    <Grid item xs={12} style={wStyle}>
      <AutoViews
        autoplay
        style={wStyle}
        ignoreNativeScroll
        containerStyle={cStyle}
        slideStyle={sStyle}
        interval={1000}
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
        indicatorColor={iHue}
        onChange={changeSet}
      >
        {children.map((c, i) => <Tab key={i} icon={<Lens />} />)}
      </Tabs>
    </Grid>
  </Grid>
);

export default wIndex(Header);
