// React

import { Link } from 'react-router-dom';

/** MUI COMPONENTS */

import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

/** DATA */

import { type CardTypes } from '../data/Types';

/** SETTINGS */

//import Settings from '../data/Settings';

/** STYLES */

import {
    iconStyles,
    textStyle
} from '../data/Styles';


/** Card Links component */
const CardLinks = (opts: CardTypes) => {
    //const small = Settings.exampleEnable == false ? 8 : 6;
    //const md = Settings.exampleEnable == false ? 6 : 4;
    return (
        <Grid size={{ xs: 12, sm: 6, md: 4 }}>
            <Card elevation={3} sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column'
            }}>
                <CardHeader title={
                    <>
                        <Typography
                            variant="h4"
                            sx={textStyle}
                        >
                            {opts.icon && (
                                <opts.icon
                                    fontSize="inherit"
                                    sx={iconStyles}
                                />
                            )}
                            {opts.title}
                        </Typography>
                        <Divider />
                    </>}></CardHeader>
                <CardContent sx={{ flexGrow: 1 }}>
                    <Typography variant="body1">{opts.desc}</Typography>
                </CardContent>
                <CardActions sx={{ display: 'flex' }}>
                    <Button
                        size="small"
                        component={Link}
                        to={opts.link}
                    >
                        {opts.title}{' '}
                        →
                    </Button>
                </CardActions>
            </Card>

        </Grid>
    );
};

export default CardLinks;