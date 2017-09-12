import React from 'react';
import Grid from 'material-ui/Grid';
import Text from 'material-ui/Typography';
import Card, { CardContent, CardMedia } from 'material-ui/Card';
import { GridListTile, GridListTileBar } from 'material-ui/GridList';
import { withStyles } from 'material-ui/styles';
import { Link } from 'react-router-dom';

const styles = theme => ({
  item: { listStyle: 'none' },
  bar: {
    bottom: '30%',
    backgroundColor: 'transparent',
  },
  sub: {
    color: theme.palette.secondary[400],
    fontSize: '90%',
  },
  white: { color: '#fff' },
  card: {
    maxWidth: '1440px',
    backgroundColor: 'transparent',
  },
  media: {
    paddingTop: 'calc(3 / 4 * 50%)',
    backgroundSize: '100% auto',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    filter: 'brightness(0.5)',
  },
});
const Styled = withStyles(styles);

const Jumbo = ({ classes, event }) => (
  <Card className={classes.card}>
    <Grid container justify="center" align="center" spacing={0}>
      <Grid item xs>
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
                <Grid container>
                  <Grid item xs={11}>
                    <Text color="inherit" type="headline">
                      {event.type}:
                    </Text>
                    <Text color="inherit" type="headline">
                      {event.title}
                    </Text>
                    <Text color="inherit">{event.date}</Text>
                    <Text className={classes.sub}>
                      {event.text.slice(0, 59)}
                    </Text>
                    <Text className={classes.sub}>{event.text.slice(59)}</Text>
                  </Grid>
                </Grid>
              </CardContent>
            }
          />
        </GridListTile>
      </Grid>
    </Grid>
  </Card>
);

export default Styled(Jumbo);
