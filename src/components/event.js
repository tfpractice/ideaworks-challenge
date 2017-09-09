import React from 'react';
import Text from 'material-ui/Typography';
import Grid from 'material-ui/Grid';
import Chip from 'material-ui/Chip';
import Avatar from 'material-ui/Avatar';

// import IconButton from 'material-ui/IconButton';
// import Heart from 'material-ui-icons/Favorite';
// import XHeart from 'material-ui-icons/HighlightOff';
import { GridListTile, GridListTileBar } from 'material-ui/GridList';
import Card, {
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
} from 'material-ui/Card';

// import { connect } from 'react-redux';
import { withStyles } from 'material-ui/styles';
import { Link } from 'react-router-dom';

// import { Favorites } from '../../../imports/store';

// const mapState = ({ favorites }, { event }) => ({ isFav: new Set(favorites).has(product.id) });
// const Connected = connect(mapState, Favorites.actions);

const styles = theme => ({
  item: { listStyle: 'none' },
  card: {
    // height: '100%',
    // maxHeight: '100%',
    backgroundColor: 'transparent',
  },
  media: {
    height: '20rem',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',

    // '&:hover': { backgroundSize: 'contain' },
  },
});
const Styled = withStyles(styles);

const EventCard = ({ event, classes }) => {
  const a = 0;

  return (
    <Card className={classes.card}>
      <CardMedia className={classes.media} image={event.img} alt={event.id} />
      <CardHeader
        title={<Link to={`/`}>{event.text}</Link>}
        subheader={event.title}
      />
      <CardContent>
        <Text color="accent" type="title">
          {event.date}
        </Text>
        <Text color="accent" type="title">
          Presented By: {event.author}
        </Text>
      </CardContent>
    </Card>
  );
};

export default Styled(EventCard);
