/** ======= MUI COMPONENTS ======= */
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';

/** ======= DATA ======= */
import { type SectionOpts } from '../data/Types';
import { iconStyles } from '../data/Styles';

/** SECTION WRAPPER */
const SectionWrapper = (opts: SectionOpts) => {
    return (
        <Box component="section" sx={{ mb: 6 }}>
            <Card
                elevation={1}
                sx={{
                    backgroundColor: ({ palette }) => palette.background.paper,
                    borderRadius: 2,
                }}
            >
                <CardHeader title={
                    <>
                        <Typography
                            variant="h4"
                            sx={{ display: 'flex', alignItems: 'center' }}
                        >
                            {opts.icon && (
                                <opts.icon
                                    fontSize="inherit"
                                    sx={iconStyles}
                                />
                            )}
                            {opts.title}
                        </Typography>
                        <Divider sx={{ mt: 2 }} />
                    </>
                } />
                <CardContent>
                    <Box>{opts.children}</Box>
                </CardContent>
            </Card>
        </Box>
    );
};

export default SectionWrapper;