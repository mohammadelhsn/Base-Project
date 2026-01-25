/** ======= MUI COMPONENTS ======= */
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';

/** ======= TYPES, SETTINGS & STYLES ======= */
import { type CardTypes } from '../data/Types';
import {
    iconStyles,
    textStyle
} from '../data/Styles';


/** Card Links component */
const CardLinks = (opts: CardTypes) => {
    return (
        <Card elevation={3} sx={{
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            transition: 'transform 0.2s ease-in-out',
            '&:hover': {
                transform: 'scale(1.01)',
            }
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
                <Typography variant='inherit' color='textSecondary'>{opts.desc}</Typography>
            </CardContent>
            <CardActions sx={{ display: 'flex' }}>
                <Button
                    size="small"
                    component={'a'}
                    href={opts.link}
                >
                    {`View ${opts.title}  →`}
                </Button>
            </CardActions>
        </Card>
    );
};

export default CardLinks;