import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';
import { Button, Card, Typography } from '@mui/material';

export const CheckoutSucceess = ({total}) => {
    

    return (
        <main>
            <Card elevation={4}>
                <CheckCircleOutlineOutlinedIcon sx={{height: '50px', width: '50px'}}/>
                <Typography variant='h4'>Thank you for your payment of ${total}</Typography>
                <Button>Continue Shopping?</Button>
            </Card>
        </main>
    )
}