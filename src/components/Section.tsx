/** MUI COMPONENTS */

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';

/** DATA */
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
                <CardContent>
                    <Typography
                        variant="h4"
                        color='textPrimary'
                        sx={{ display: 'flex', alignItems: 'center', mb: 2 }}
                    >
                        {opts.icon && (
                            <opts.icon
                                fontSize="inherit"
                                sx={iconStyles}
                            />
                        )}
                        {opts.title}
                    </Typography>
                    <Divider
                        sx={{
                            my: 2,
                            borderColor: ({ palette }) => palette.divider,
                        }}
                    />
                    <Box>{opts.children}</Box>
                </CardContent>
            </Card>
        </Box>
    );
};

export default SectionWrapper;