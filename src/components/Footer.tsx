/** MUI COMPONENTS */
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

/** ICONS */
import Email from '@mui/icons-material/Email';
import GitHub from '@mui/icons-material/GitHub';
import LinkedIn from '@mui/icons-material/LinkedIn';

/** CUSTOM COMPONENT */
import FooterButton from './FooterButton';

/** DATA */
import type { FooterProps } from '../data/Types';

const buttons: FooterProps[] = [
    { title: 'Email', type: 'email', ariaLabel: 'Send Email', icon: Email, href: `mailto:mohammadelhsn@gmail.com` },
    { title: 'GitHub', type: 'link', href: `https://github.com/mohammadelhsn`, icon: GitHub },
    { title: 'LinkedIn', type: 'link', href: `https://linkedin.com/in/mohammadelhsn`, icon: LinkedIn }
];

// Footer component
const Footer = () => {
    return (
        <Box component="footer" sx={{
            py: 4,
            textAlign: 'center',
            boxShadow: '0 -4px 10px rgba(0, 0, 0, 0.1)',
            bgcolor: ({ palette }) => palette.background.default,
            color: ({ palette }) => palette.text.secondary
        }}>
            <Box sx={{ display: 'flex', justifyContent: 'center', gap: 3 }}>
                {/** ICON BUTTONS FOR FOOTER */}
                {buttons.map((el, index) => {
                    return (
                        <FooterButton {...el} key={`${el.title}-${index}`} />
                    );
                })}
            </Box>
            <Typography variant="body2" sx={{ mt: 3, color: ({ palette }) => palette.text.secondary }}>
                © 2025 {'Mohammad El-Hassan'}. All rights reserved.
            </Typography>
        </Box>
    );
};

export default Footer;