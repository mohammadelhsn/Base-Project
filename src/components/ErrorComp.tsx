import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';

const ErrorComp = () => {
    return (
        <Box maxWidth="lg" sx={{ mt: 8, textAlign: 'center', flexGrow: '1' }}>
            <SentimentVeryDissatisfiedIcon sx={{ fontSize: 60, color: 'error.main', mb: 2 }} />
            <Typography variant="h4" gutterBottom sx={{ fontWeight: 600 }}>
                Oops!
            </Typography>
            <Typography variant="h6" gutterBottom color="text.secondary">
                Looks an error occurred!
            </Typography>
        </Box>
    );
};

export default ErrorComp;