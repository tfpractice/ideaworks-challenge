import grey from 'material-ui/colors/grey';
import { black, white } from 'material-ui/colors/common';
import { createMuiTheme } from 'material-ui/styles';

const primary = black;
const accent = white;
const secondary = grey;
const type = 'light';
const palette = { primary, accent, secondary, type };
const caslon = 'Caslon';
const Roboto = 'Roboto';
const Springville = 'Springville';
const fontFamily = `${caslon}, ${Springville}, ${Roboto}`;
const typography = { fontFamily };

export const theme = createMuiTheme({ palette, typography });
