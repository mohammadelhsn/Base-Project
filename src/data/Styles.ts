/** ======= TYPES ======= */
import type { SxProps } from '@mui/material';

/** Default Container Styles */
export const containerStyles: SxProps = {
	px: { xs: 2, sm: 3 },
	py: { xs: 4, sm: 6 },
	flexGrow: 1,
};

/** Default Icon Styles */
export const iconStyles: SxProps = {
	color: 'primary.main',
	mr: 1.5,
};

/** Default Text Styles */
export const textStyle: SxProps = {
	display: 'flex',
	alignItems: 'center',
	mb: 1,
	flexWrap: 'wrap',
	wordBreak: 'break-word',
};

/** Default Divider Style */
export const dividerStyle: SxProps = {
	margin: '2rem 0',
	marginLeft: 0,
};

/** Default center styles */
export const divCenter: SxProps = {
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
};

export const cardBodyStyles: SxProps = {
	paddingTop: '25px',
};

export const cardActionStyles: SxProps = {
	justifyContent: 'flex-end',
	paddingLeft: '1.5',
	paddingBottom: '0',
	paddingTop: '25px',
};

export const cardContentStyles: SxProps = {
	paddingTop: '25px',
	borderRadius: '10px',
	boxShadow: '0 3px 8px rgba(0, 0, 0, 0.05)',
	transition: 'transform 0.2s ease',
};

export const spacedDivider: SxProps = {
	my: 4,
};
