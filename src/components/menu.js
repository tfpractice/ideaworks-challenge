import React from 'react';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import Text from 'material-ui/Typography';
import MenuIcon from 'material-ui-icons/Menu';
import Menu, { MenuItem } from 'material-ui/Menu';
import { compose, withHandlers, withState } from 'recompose';
import { Link } from 'react-router-dom';

const tStyle = { fontFamily: 'Roboto', color: '#a7a7a7' };

const wSwitch = withState('open', 'flip', false);
const wAnchor = withState('anchorEl', 'setEl', undefined);
const withBoth = compose(
  wSwitch,
  wAnchor,
  withHandlers({
    toggle: ({ flip }) => e => flip(x => !x),
    setAnchor: ({ setEl }) => e => setEl(e.currentTarget),
    onClick: ({ flip, setEl }) => (e) => {
      flip(x => !x);
      setEl(e.currentTarget);
    },
  })
);
const NavMenu = ({ open, anchorEl, toggle, onClick }) => (
  <div>
    <IconButton
      aria-owns={open ? 'simple-menu' : null}
      aria-haspopup="true"
      onClick={onClick}
    >
      <MenuIcon />
    </IconButton>
    <Menu
      id="simple-menu"
      anchorEl={anchorEl}
      open={open}
      onRequestClose={toggle}
    >
      <MenuItem onClick={toggle}>
        <Link to="/">
          <Text style={tStyle}> 212.555.5555</Text>
        </Link>
      </MenuItem>
      <MenuItem onClick={toggle}>
        <Link to="/">
          <Button style={tStyle}> Login</Button>
        </Link>
      </MenuItem>
    </Menu>
  </div>
);

export default withBoth(NavMenu);
