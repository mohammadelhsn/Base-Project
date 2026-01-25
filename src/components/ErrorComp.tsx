import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import { containerStyles } from '../data/Styles';
import Paper from '@mui/material/Paper';

const ErrorComp = () => {
    return (
        <Container maxWidth="lg" sx={containerStyles}>
            <Paper elevation={3}
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
                }}>
                <SentimentVeryDissatisfiedIcon sx={{ fontSize: 60, color: 'error.main', mb: 2 }} />
                <Typography variant="h4" gutterBottom sx={{ fontWeight: 600 }}>
                    Oops!
                </Typography>
                <Typography variant="h6" gutterBottom color="text.secondary">
                    Looks an error occurred!
                </Typography>
            </Paper>

        </Container>
    );
};

export default ErrorComp;