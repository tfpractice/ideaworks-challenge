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
      bottom: '40%',
      backgroundColor: 'transparent',
    },
    sub: { color: theme.palette.secondary[400] },
    white: { color: '#fff' },
    card: {
      maxWidth: '1440px',
      backgroundColor: 'transparent',
    },
    media: {
      // maxWidth: '1440px',

      paddingTop: 'calc(3 / 4 * 50%)',
      backgroundSize: '100% auto',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      filter: 'brightness(0.5)',
    },
  };
};
const Styled = withStyles(styles);

const Jumbo = ({ classes, event }) => (
  <Grid container justify="center" align="center" spacing={0}>
    <Grid item xs>
      <Card className={classes.card}>
        <Grid container justify="center" align="center" spacing={0}>
          <Grid item xs={12}>
            <GridListTile component={Card} className={classes.item}>
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
                  <CardContent className={classes.white}>
                    <Grid container justify="center">
                      <Grid item xs={11}>
                        <Text color="inherit" type="headline">
                          {event.type}:
                        </Text>
                        <Text color="inherit" type="headline">
                          {event.title}
                        </Text>
                        <Text className={classes.sub} type="body1">
                          {event.date}
                        </Text>
                        <Text className={classes.sub} type="body1">
                          {event.text}
                        </Text>
                      </Grid>
                    </Grid>
                  </CardContent>
                }
              />
            </GridListTile>
          </Grid>
        </Grid>
      </Card>
    </Grid>
  </Grid>
);

export default Styled(Jumbo);
