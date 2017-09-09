import grey from 'material-ui/colors/grey';
import { black } from 'material-ui/colors/common';
import { createMuiTheme } from 'material-ui/styles';

const primary = grey;
const accent = black;
const type = 'dark';
const palette = { primary, accent, type };

export const theme = createMuiTheme({ palette });
