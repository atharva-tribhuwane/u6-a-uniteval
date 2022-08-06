import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useDispatch, useSelector } from 'react-redux';
import { loginLoading, loginSuccess, loginError, allActions } from '../Redux/action';
import { useNavigate } from 'react-router';
export const Login = () => {
    const dispatch = useDispatch();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const {token} = useSelector(state => state.Login);
    const handlelogin = ()=>{
        console.log(email,password);
        let payLoad = {
            email:email,
            password:password
        }  
        dispatch(allActions(payLoad));
    }
    if(token){
        navigate('/');
    }
    return (
        <div style={{width:"30%", margin:"auto"}}>
            <h1>Sign in</h1>
            <Box
                sx={{
                    width: 500,
                    maxWidth: '100%',
                }}
                style={{marginBottom:"3%"}}
            >
                <TextField fullWidth label="Email id" value={email} onChange={(e)=>setEmail(e.target.value)} />
            </Box>
            <Box
                sx={{
                    width: 500,
                    maxWidth: '100%',
                }}
                style={{marginBottom:"3%"}}
            >
                <TextField fullWidth label="Password" value={password} onChange={(e)=>setPassword(e.target.value)}  />
            </Box>
            <Button variant="contained" onClick={handlelogin}>Sign in</Button>
        </div>
    );
}
