import grey from 'material-ui/colors/grey';

// import { black, white } from 'material-ui/colors/common';
import common from 'material-ui/colors/common';
import * as colors from 'material-ui/colors';
import { createMuiTheme } from 'material-ui/styles';

console.log('common', common);
const { black, white } = common;
const primary = grey;
const accent = white;
const secondary = grey;
const type = 'light';
const palette = {
  primary,
  accent,
  secondary,
  type,
  black,
  white,
};
const caslon = 'Caslon';
const Roboto = 'Roboto';
const Springville = 'Springville';
const fontFamily = `${caslon}, ${Springville}, ${Roboto}`;
const typography = { fontFamily };

export const theme = createMuiTheme({ palette, typography });
