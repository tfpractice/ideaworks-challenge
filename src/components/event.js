import React from 'react';
import Text from 'material-ui/Typography';
import Card, { CardContent, CardHeader, CardMedia } from 'material-ui/Card';
import { Link } from 'react-router-dom';
import { withStyles } from 'material-ui/styles';

const styles = theme => ({
  content: { fontFamily: 'Roboto', color: '#a7a7a7' },
  grey: { color: '#a7a7a7' },
  title: { color: '#000' },
  card: { backgroundColor: 'transparent' },
  header: { paddingTop: 0, paddingBottom: 0, color: '#000' },
  media: {
    paddingTop: 'calc(4 / 4 * 100%)',
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'top',
  },
});
const Styled = withStyles(styles);

const EventCard = ({ event, classes }) => (
  <Card elevation={0} className={classes.card}>
    <CardMedia className={classes.media} image={event.img} alt={event.id} />
    <CardContent>
      <Text className={classes.content}>{event.date}</Text>
    </CardContent>
    <CardHeader
      className={classes.header}
      title={
        <Link to="/">
          <Text className={classes.title} color="default" type="display1">
            {event.text}
          </Text>
        </Link>
      }
    />
    <CardContent>
      <Text className={classes.grey} type="title">
        Presented by <Link to="/">{event.author}</Link>
      </Text>
    </CardContent>
  </Card>
);

export default Styled(EventCard);
