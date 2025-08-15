import type { SxProps } from '@mui/material';

export const containerStyles: SxProps = {
	px: { xs: 2, sm: 3 },
	py: { xs: 4, sm: 6 },
};

export const iconStyles: SxProps = {
	color: 'primary.main',
	mr: 1.5,
};

export const textStyle: SxProps = {
	display: 'flex',
	alignItems: 'center', // use "center" instead of "top" for visual balance
	mb: 1, // space between heading and subheading
	flexWrap: 'wrap', // allow wrapping inside flex container
	wordBreak: 'break-word', // break long words if needed
};
export const dividerStyle: SxProps = {
	margin: '2rem 0',
	marginLeft: 0,
};

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
