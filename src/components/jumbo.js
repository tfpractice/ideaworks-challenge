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

const styles = theme => ({
  item: { listStyle: 'none' },
  bar: { bottom: '50%' },
  card: {
    height: '100%',
    maxHeight: '100%',
    maxWidth: '1440px',
    backgroundColor: 'transparent',
  },
  media: {
    backgroundColor: '#fff',
    height: '25rem',
    maxWidth: '1440px',

    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  },
});
const Styled = withStyles(styles);

const Jumbo = ({ classes, event }) => (
  <Grid container justify="center" align="center">
    <Grid item xs>
      <Card className={classes.card}>
        <GridListTile className={classes.item}>
          <Link to={`/`}>
            <CardMedia
              className={classes.media}
              image={event.img}
              alt={event.title}
            />
          </Link>

          <GridListTileBar
            className={classes.bar}
            subtitle={<CardHeader title={event.text} subheader={event.date} />}
            title={<CardHeader title={event.title} />}
          />
        </GridListTile>
      </Card>
    </Grid>
  </Grid>
);

export default Styled(Jumbo);
