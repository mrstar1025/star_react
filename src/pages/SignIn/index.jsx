import React from 'react';
import { Box, Button, Container, TextField, Card, Typography, Link, FormControlLabel, Checkbox, Divider } from "@mui/material";
import AcUnitIcon from '@mui/icons-material/AcUnit';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';

const SignIn = () => {
    return (
        <Container sx={{ background: '#eee', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100vw', height: '100vh' }}>
            <Card sx={{ maxWidth: 450, width: '100%', p: 3, display: 'flex', flexDirection: 'column' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', pb: 2 }}>
                    <AcUnitIcon />
                    <Typography><strong>Sitemark</strong></Typography>
                </Box>
                <Typography variant='h4' pb={2}>Sign in</Typography>
                <Typography sx={{ color: '#888' }}>Email</Typography>
                <TextField
                    required
                    id="outlined-required"
                    placeholder='your@email.com'
                />
                <Box sx={{ display: 'flex', alignItems: 'center', pt: 2, justifyContent: 'space-between' }}>
                    <Typography sx={{ color: '#888' }}>Email</Typography>
                    <Link href="#" underline="always" >
                        Forgot your password?
                    </Link>
                </Box>
                <TextField
                    required
                    id="outlined-required"
                    type="password"
                    placeholder='Password'
                />
                <FormControlLabel sx={{ py: 2 }} control={<Checkbox />} label="Remember me" />

                <Button variant='contained' fullWidth>Sign in</Button>

                <Box sx={{ display: 'flex', alignItems: 'center', pt: 2, justifyContent: 'center' }}>
                    <Typography sx={{ color: '#888', pr: 1 }}>Don't have an account?</Typography>
                    <Link underline="always" onClick={() => alert('a')}>
                        Sign up
                    </Link>
                </Box>
                <Box sx={{ display: 'flex', py: 2, alignItems: 'center' }}>
                    <Divider sx={{ flex: 1}}/>
                    <Typography sx={{ px: 1 }}>or</Typography>
                    <Divider sx={{ flex: 1}}/>
                </Box>

                <Button variant='outlined' fullWidth startIcon={<GoogleIcon />} >Sign in with google</Button>
                <Button variant='outlined' fullWidth startIcon={<FacebookRoundedIcon />} sx={{ my: 2 }}>Sign in with Facebook</Button>
            </Card>
        </Container>
    )
}

export default SignIn
