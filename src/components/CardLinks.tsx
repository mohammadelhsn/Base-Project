// React

import { Link } from 'react-router-dom';

/** MUI COMPONENTS */

import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CardActions from '@mui/material/CardActions';

/** DATA */

import { type CardTypes } from '../data/Types';

/** SETTINGS */

//import Settings from '../data/Settings';

/** STYLES */

import {
    buttonStyles,
    iconStyles,
    textStyle
} from '../data/Styles';
import { Divider } from '@mui/material';


/** Card Links component */

const CardLinks = (opts: CardTypes) => {
    //const small = Settings.exampleEnable == false ? 8 : 6;
    //const md = Settings.exampleEnable == false ? 6 : 4;
    return (
        <Grid size={{ xs: 12, sm: 6, md: 4 }}>
            <Card elevation={3}>
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
                <CardContent>
                    <Typography variant="body1">{opts.desc}</Typography>
                </CardContent>
                <CardActions>
                    <Button
                        size="small"
                        component={Link}
                        to={opts.link}
                        sx={buttonStyles}
                    >
                        View{' '}
                        {' '}
                        →
                    </Button>
                </CardActions>
            </Card>

        </Grid>
    );
};

export default CardLinks;