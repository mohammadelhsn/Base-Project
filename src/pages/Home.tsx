/** ======= MUI COMPONENTS ======= */
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

/** ======= MUI ICONS ======= */
import SummarizeIcon from '@mui/icons-material/Summarize';
import DescriptionIcon from '@mui/icons-material/Description';
import FolderOpenIcon from '@mui/icons-material/FolderOpen';
import GitHubIcon from '@mui/icons-material/GitHub';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import BuildIcon from '@mui/icons-material/Build';
import AssignmentIcon from '@mui/icons-material/Assignment';
import SearchIcon from '@mui/icons-material/Search';
import InfoIcon from '@mui/icons-material/Info';

/** ======= CUSTOM COMPONENTS ======= */
import CardLinks from '../components/CardLinks';
import SectionWrapper from '../components/Section';

/** ======= SETTINGS & DATA ======= */
import { containerStyles, iconStyles, spacedDivider, textStyle } from '../data/Styles';
import Settings from '../data/Settings';
import type { CardTypes } from '../data/Types';
import { useTheme } from '@mui/material';
import { useEffect, useState } from 'react';
import { fetchProject, type FirestoreProject } from '../data/Firebase';
import LoadingComp from '../components/LoadingPage';
import ErrorComp from '../components/ErrorComp';

/** The Home Page */
const HomePage = () => {
    const [project, setProject] = useState<FirestoreProject | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    useEffect(() => {
        if (project) return;

        (async () => {
            try {
                const data = await fetchProject(Settings.id);
                if (data) setProject(data);
                setLoading(false);
            } catch (err) {
                console.error('Failed to fetch project:', err);
            }
        })();
    }, [project]);
    const { palette } = useTheme();
    if (loading) return <LoadingComp />;
    if (!project) return <ErrorComp />;
    const links: CardTypes[] = [
        { title: 'Demo', desc: "View the Live Demo for this project", link: project.liveDemo, icon: RocketLaunchIcon, type: '' },
        { title: 'Docs', desc: "View the TypeDoc documentation for this project", link: project.docs, icon: DescriptionIcon },
        { title: 'GitHub Repo', desc: "View the GitHub Repo for the project", link: project.github, icon: GitHubIcon }
    ].filter(link => link.link) as CardTypes[];
    return (
        <Container maxWidth='lg' sx={containerStyles}>
            <Box>
                <Typography
                    variant="h2"
                    sx={textStyle}
                >
                    <FolderOpenIcon
                        fontSize="inherit"
                        sx={iconStyles}
                    />
                    {project.title}
                </Typography>
                <Divider sx={spacedDivider} />
            </Box>
            <SectionWrapper title="Overview" icon={SummarizeIcon}>
                <Typography variant='inherit' color='textSecondary'>{project.longDescription ? project.longDescription : project.description}</Typography>
            </SectionWrapper>
            <SectionWrapper title="Information" icon={InfoIcon}>
                <Grid container spacing={2}>
                    <Grid size={{ xs: 12, sm: 6 }}>  {/* 1 per row on extra-small, 2 per row on small+ */}
                        <Card elevation={3}>
                            <CardHeader title={
                                <>
                                    <Typography variant='inherit' sx={{ display: 'flex', alignItems: 'center' }}><BuildIcon sx={iconStyles} /> Stack</Typography>
                                    <Divider sx={{ mt: 1 }} />
                                </>
                            } />
                            <CardContent>
                                <Grid container spacing={2} >
                                    {project.techStack.map((stack, index) => (
                                        <Grid key={`${stack}-${index}`}> {/* 3 per row */}
                                            <img
                                                src={`https://go-skill-icons.vercel.app/api/icons?i=${stack.toLowerCase()}&theme=${palette.mode}&titles=true`}
                                                alt={stack}
                                                style={{ width: '100%', height: 'auto' }}
                                            />
                                        </Grid>
                                    ))}
                                </Grid>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6 }}>
                        <Card elevation={3} sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                            <CardHeader
                                title={
                                    <>
                                        <Typography variant="inherit" sx={{ display: 'flex', alignItems: 'center' }}>
                                            <AssignmentIcon sx={iconStyles} /> Project Status
                                        </Typography>
                                        <Divider sx={{ mt: 1 }} />
                                    </>
                                }
                            />
                            <CardContent>
                                <Typography variant='inherit' color='textSecondary'>The project is currently being worked on</Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </SectionWrapper>
            <SectionWrapper title="Explore" icon={SearchIcon}>
                <Grid container spacing={3} sx={{ alignItems: 'stretch' }}>
                    {links.map((link, index) => {
                        const numLinks = links.length;
                        const xs = 12;
                        const sm = numLinks === 1 ? 12 : 6;
                        const md = numLinks === 1 ? 12 : numLinks === 2 ? 6 : 4;
                        return (
                            <Grid size={{ xs: xs, sm: sm, md: md }}>
                                <CardLinks {...link} key={`${link.title}-${index}`} />
                            </Grid>
                        );
                    })}
                </Grid>
            </SectionWrapper>
        </Container >
    );
};

export default HomePage;