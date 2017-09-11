import React from 'react';
import IconButton from 'material-ui/IconButton';
import Grid from 'material-ui/Grid';
import Divider from 'material-ui/Divider';
import Card, { CardContent, CardHeader, CardMedia } from 'material-ui/Card';
import Text from 'material-ui/Typography';
import { GridListTile, GridListTileBar } from 'material-ui/GridList';

import { connect } from 'react-redux';
import { withStyles } from 'material-ui/styles';
import { Link } from 'react-router-dom';

const styles = (theme) => {
  console.log('theme', theme);
  return {
    item: { listStyle: 'none' },
    bar: {
      bottom: '50%',
      backgroundColor: 'transparent',
    },
    sub: { color: theme.palette.secondary[400] },
    white: { color: '#fff' },
    card: {
      maxWidth: '1440px',
      backgroundColor: 'transparent',
    },
    media: {
      paddingTop: 'calc(3 / 4 * 50%)',
      backgroundSize: 'contain',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      filter: 'brightness(0.5)',
    },
  };
};
const Styled = withStyles(styles);

const Jumbo = ({ classes, event }) => (
  <Grid container justify="center" align="center">
    <Grid item xs>
      <Card className={classes.card}>
        <GridListTile className={classes.item}>
          <Link to="/">
            <CardMedia
              className={classes.media}
              image={event.img}
              alt={event.title}
            />
          </Link>
          <GridListTileBar
            className={classes.bar}
            title={
              <CardHeader
                title={
                  <CardContent className={classes.white}>
                    <Text color="inherit" type="display1">
                      {event.type}:
                    </Text>
                    <Text color="inherit" type="display1">
                      {event.title}
                    </Text>
                    <Text className={classes.sub} type="title">
                      {event.date}
                    </Text>
                    <Text className={classes.sub} type="headline">
                      {event.text}
                    </Text>
                  </CardContent>
                }
              />
            }
          />
        </GridListTile>
      </Card>
    </Grid>
  </Grid>
);

export default Styled(Jumbo);
