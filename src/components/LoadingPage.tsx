import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';

import { containerStyles } from '../data/Styles';

const LoadingComp = () => {
    return (
        <Container maxWidth='lg' sx={containerStyles}>
            <Paper
                elevation={3}                  // subtle shadow
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 2,
                    p: { xs: 3, sm: 5 },
                    borderRadius: 3,
                    textAlign: 'center',
                    minWidth: 300,
                }}
            >
                <CircularProgress size={64} color="primary" />
                <Typography variant="h6" sx={{ mt: 2, color: 'text.secondary' }}>
                    Loading, please wait...
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Fetching Project Data...
                </Typography>
            </Paper>
        </Container >
    );
};

export default LoadingComp;