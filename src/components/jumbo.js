import React from 'react';
import IconButton from 'material-ui/IconButton';
import Grid from 'material-ui/Grid';
import Divider from 'material-ui/Divider';
import Card, { CardMedia } from 'material-ui/Card';
import Text from 'material-ui/Typography';
import { GridListTile, GridListTileBar } from 'material-ui/GridList';

import { connect } from 'react-redux';
import { withStyles } from 'material-ui/styles';
import { Link } from 'react-router-dom';

const styles = theme => ({
  item: { listStyle: 'none' },
  card: {
    height: '100%',
    maxHeight: '100%',
    backgroundColor: 'rgba(66,66,66,0.8)',
  },
  media: {
    backgroundColor: '#fff',
    height: '20rem',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    '&:hover': { backgroundSize: 'contain' },
  },
});
const Styled = withStyles(styles);

const Jumbo = ({ classes, event }) => (
  <Card>
    <Grid container direction="column">
      <Grid item>
        <GridListTile className={classes.item}>
          <Link to={`/`}>
            <CardMedia
              className={classes.media}
              image={event.img}
              alt={event.title}
            />
          </Link>

          <GridListTileBar title={<Text>{event.title}</Text>} />
        </GridListTile>
      </Grid>
    </Grid>
  </Card>
);

export default Styled(Jumbo);
