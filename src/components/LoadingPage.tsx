import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';

const LoadingComp = () => {
    return (
        <Paper sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            gap: 2,
            my: 2,
        }}>
            <CircularProgress size={80} />
            <Typography variant='h6' sx={{ py: 2 }}>Loading...</Typography>
        </Paper >
    );
};

export default LoadingComp;