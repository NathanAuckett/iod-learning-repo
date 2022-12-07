import React from 'react';
import {LoginContext} from "./LoginContext";
import {useNavigate} from 'react-router-dom'

import Grid from '@mui/material/Unstable_Grid2';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import { useState } from 'react';

export function LoginSignupField(props) {
    const navigate = useNavigate();
    const {setLoggedIn} = React.useContext(LoginContext);

    const [signup, setSignup] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");


    function toggleSignup(){
        setSignup(!signup);
    }

    async function login(){
        const json = JSON.stringify({"email": email, "password": password});
        
        const response = await fetch("http://127.0.0.1:4000/users/authenticate", {
            method: 'POST',
            headers: {
                'Accept': '*/*',
                'Content-Type': 'application/json'
            },
            body: json
        });
        
        const data = await response.json();

        if (data.result === 200){
            setLoggedIn(true);
            navigate("/dashboard");
        }
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
                        <TextField variant="standard" label="Email" onChange={(e) => {setEmail(e.target.value)}}/>
                    </Grid>
                    <Grid>
                        <TextField variant="standard" label="Password" onChange={(e) => {setPassword(e.target.value)}}/>
                    </Grid>
                    {signup ? 
                        <Grid>
                            <TextField variant="standard" label="Confirm Password" onChange={(e) => {setConfirmPassword(e.target.value)}}/>
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
                                    <Button variant="contained" onClick={login}>Login</Button>
                                }
                                
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Paper>
        </div>
    )
}