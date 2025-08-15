/** MUI COMPONENTS */

import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

/** ICONS */

import LinkedIn from '@mui/icons-material/LinkedIn';
import GitHub from '@mui/icons-material/GitHub';
import Email from '@mui/icons-material/Email';

// Footer component
const Footer = () => {
    return (
        <Box component="footer" py={4} sx={{
            textAlign: 'center',
            boxShadow: '0 -4px 10px rgba(0, 0, 0, 0.1)',
            bgcolor: ({ palette }) => palette.background.default,
            color: ({ palette }) => palette.text.secondary
        }}>
            <Box sx={{ display: 'flex', justifyContent: 'center', gap: 3 }}>
                <IconButton
                    component="a"
                    href={`mailto:mohammadelhsn@gmail.com`}
                    aria-label="Send Email"
                    title="Email"
                    color="primary"
                >
                    <Email />
                </IconButton>
                <IconButton
                    href='https://github.com/mohammadelhsn'
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                    title="GitHub"
                    color="primary"
                    component='a'>
                    <GitHub />
                </IconButton>
                <IconButton
                    component="a"
                    href={'https://linkedin.com/in/mohammadelhsn'}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    title="LinkedIn"
                    color="primary"
                >
                    <LinkedIn />
                </IconButton>
            </Box>
            <Typography variant="body2" sx={{ mt: 3, color: ({ palette }) => palette.text.secondary }}>
                © 2025 {'Mohammad El-Hassan'}. All rights reserved.
            </Typography>
        </Box>
    );
};

export default Footer;