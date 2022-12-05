
import Grid from '@mui/material/Unstable_Grid2';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import { useState } from 'react';

export function LoginSignupField() {
    const [signup, setSignup] = useState(false);
    
    function toggleSignup(){
        setSignup(!signup);
    }

    return (
        <div>
            <Paper elevation="15" sx={{width: "400px"}}>
                <Grid container rowSpacing={2} direction="column" alignItems="center">
                    <Grid>
                        {signup ?
                            <h2>Sign Up</h2>
                        :
                            <h2>Login</h2>
                        }
                    </Grid>
                    <Grid>
                        <TextField variant="standard" label="Email"/>
                    </Grid>
                    <Grid>
                        <TextField variant="standard" label="Password"/>
                    </Grid>
                    {signup ? 
                        <Grid>
                            <TextField variant="standard" label="Confirm Password"/>
                        </Grid>
                        : null
                    }
                    <Grid margin={4}>
                        <Grid container columnSpacing={4}>
                            <Grid>
                                {signup ?
                                    <Button
                                        variant="text"
                                        style={{color: "black"}}
                                        onClick={toggleSignup}
                                    >Login</Button>
                                :
                                    <Button
                                        variant="text"
                                        style={{color: "black"}}
                                        onClick={toggleSignup}
                                    >Sign up</Button>
                                }
                                
                            </Grid>
                            <Grid>
                                {signup ?
                                    <Button variant="contained">Sign up</Button>
                                :
                                    <Button variant="contained">Login</Button>
                                }
                                
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Paper>
        </div>
    )
}