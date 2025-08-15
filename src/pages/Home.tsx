/** MUI COMPONENTS */
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

/** MUI ICONS */
import DataObjectIcon from '@mui/icons-material/DataObject';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import DescriptionIcon from '@mui/icons-material/Description';
import GitHubIcon from '@mui/icons-material/GitHub';

/** CUSTOM COMPONENTS */
import SectionWrapper from '../components/Section';

/** SETTINGS & DATA */
import { containerStyles, iconStyles, spacedDivider, textStyle } from '../data/Styles';
import Settings from '../data/Settings';
import CardLinks from '../components/CardLinks';
import Grid from '@mui/material/Grid';
import type { CardTypes } from '../data/Types';

/** THE DATA */
const links: CardTypes[] = [
    { title: 'View Demo', desc: "View the Live Demo for this project", link: Settings.liveDemo ?? '', icon: RocketLaunchIcon, type: '' },
    { title: 'View Docs', desc: "View the TypeDoc documentation for this project", link: Settings.docs ?? '', icon: DescriptionIcon },
    { title: 'View GitHub Repo', desc: "View the GitHub Repo for the project", link: Settings.githubRepo ?? '', icon: GitHubIcon }
].filter(Boolean) as CardTypes[];

/** The Home Page */
const HomePage = () => {
    return (
        <Container maxWidth='xl' sx={containerStyles}>
            <Box>
                <Typography
                    variant="h2"
                    sx={textStyle}
                >
                    <DataObjectIcon
                        fontSize="inherit"
                        sx={iconStyles}
                    />
                    {Settings.title}
                </Typography>
                <Divider sx={spacedDivider} />
            </Box>
            <SectionWrapper title="Overview">
                <Card elevation={3}>
                    <CardContent>
                        {Settings.description}
                    </CardContent>
                </Card>
            </SectionWrapper>
            <SectionWrapper title="View Information">
                <Grid container spacing={3} sx={{ alignItems: 'stretch' }}>
                    {links.map((link, index) => (
                        <CardLinks {...link} key={`${link.title}-${index}`} />
                    ))}
                </Grid>
            </SectionWrapper>
        </Container>
    );
};

export default HomePage;