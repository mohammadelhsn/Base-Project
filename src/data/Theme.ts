import { createTheme } from '@mui/material';

/** The primary colour for this project */
const primary = '#6093EA';
/** The secondary colour for this project */
const secondary = '#9C27B0';

/** The light theme for the project */
export const lightTheme = createTheme({
	palette: {
		mode: 'light',
		primary: { main: primary },
		secondary: { main: secondary },
	},
});

/** The dark theme for the project */
export const darkTheme = createTheme({
	palette: {
		mode: 'dark',
		primary: { main: primary },
		secondary: { main: secondary },
	},
});
