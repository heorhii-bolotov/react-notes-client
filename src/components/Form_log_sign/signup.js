import React, { useState } from 'react'
import Input from "./input_field";
import LockOutlineds from '@material-ui/icons/LockOutlined'
import {Grid, Paper, Avatar, Button, Typography} from '@material-ui/core';
import { useHistory } from 'react-router';
import { useDispatch } from "react-redux";
import { signup } from '../../actions/actions'

const initialState = { username: '', email: '', password: '' }

const SignUp = () => {
        const paperStyle={padding:  20, height: 430,width:280, margin: "5px auto"};
        const avatarStyle = {backgroundColor: "#1bbd7e"};
        const btnStyle = {margin: '8px 0'};

        const [showPassword, setShowPassword] = useState(false);
        const [formData, setFormData] = useState(initialState)
        const dispatch = useDispatch();
        const history = useHistory();
     

        const handleShowPassword = () =>  setShowPassword((prevShowPasswprd) => !prevShowPasswprd)

        const handleSubmit = (e) => {
          e.preventDefault();
          dispatch(signup(formData, history));
          console.log(formData);
        };

        const handleChange = (e) => {
          setFormData({ ...formData,  [e.target.name]: e.target.value});
        };


      return (
        <Grid>
            <Paper elevation={10} style = {paperStyle}>
            <Grid align='center'>
                <Avatar src="" style={avatarStyle}> <LockOutlineds /> </Avatar>
                <h2>Sign Up</h2>   
                <Typography variant='caption'>Please fill this form to create an account !</Typography>     
            </Grid>

            <form onSubmit={handleSubmit}>
              <Grid>
                <Input
                    placeholder="Enter Your Username"
                    name="username"
                    label="Username"
                    handleChange = {handleChange}
                  />

                <Input
                    placeholder="Enter Your Email"
                    name="email"
                    label="Email"
                    type="email"
                    handleChange = {handleChange}
                  />    
                
                <Input
                    placeholder="Enter Your Password"
                    name="password"
                    label="Password"
                    type = {showPassword ? "text" : "password"} 
                    handleShowPassword={handleShowPassword}
                    handleChange = {handleChange}
                  />

                <Typography variant='caption'>Make sure it's at least 8 characters</Typography>  
    
                <Button
                  color="primary"
                  variant="contained"
                  type="submit"
                  style={btnStyle}
                >Sign Up</Button>
              </Grid>       
            </form>

          </Paper>
        </Grid>
        
      );
    }
  
  
  export default SignUp;