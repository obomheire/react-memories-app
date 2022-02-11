import { useState } from 'react';
// import { useDispatch } from 'react-redux';
import { Avatar, Button, Paper, Grid, Typography, Container} from '@material-ui/core';
// import { useHistory } from 'react-router-dom';
import { GoogleLogin } from 'react-google-login';
import Icon from './Icon'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import useStyles from './styles';
import Input from './Input'


    const Auth = () => {


      const GOOGLE_ID = process.env.REACT_APP_GOOGLE_ID;
      const classes = useStyles()
      const [showPassword, setShowPassword] = useState(false);
      const [isSignUp, setIsSignup] = useState(false)

      const handleShowPassword = () => setShowPassword((prevShowPassword) => !prevShowPassword)
    
      const handleSubmit = () => {
    
      }
      const handleChange = () => {

      }

      const switchMode = () => {
        setIsSignup((prevIsSignup) => !prevIsSignup);
        handleShowPassword(false);
      };
    

      const googleSuccess = (res) => {
        console.log(res)
      }

      const googleFailure = (error) => {
        console.log(error)
        console.log('Google Sign In was unsuccessful, Please try again later!')
      }


  return (
    <Container component="main" maxWidth="xs">
    <Paper className={classes.paper} elevation={3}>
      <Avatar className={classes.avatar}>
        <LockOutlinedIcon />
      </Avatar>
      <Typography component="h1" variant="h5">{ isSignUp ? 'Sign up' : 'Sign in' }</Typography>
      <form className={classes.form} onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          { isSignUp && (
          <>
            <Input name="firstName" label="First Name" handleChange={handleChange} autoFocus half />
            <Input name="lastName" label="Last Name" handleChange={handleChange} half />
          </>
          )}
          <Input name="email" label="Email Address" handleChange={handleChange} type="email" />
          <Input name="password" label="Password" handleChange={handleChange} type={showPassword ? 'text' : 'password'} handleShowPassword={handleShowPassword} />
          { isSignUp && <Input name="confirmPassword" label="Repeat Password" handleChange={handleChange} type="password" /> }
        </Grid>
        <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
          { isSignUp ? 'Sign Up' : 'Sign In' }
        </Button>
        <GoogleLogin
            clientId={GOOGLE_ID}
            render={(renderProps) => (
              <Button className={classes.googleButton} color="primary" fullWidth onClick={renderProps.onClick} disabled={renderProps.disabled} startIcon={<Icon />} variant="contained">
                Google Sign In
              </Button>
            )}
            onSuccess={googleSuccess}
            onFailure={googleFailure}
            cookiePolicy="single_host_origin"
          />
        <Grid container justifyContent='flex-end'>
          <Grid item>
            <Button onClick={switchMode}>
              {isSignUp ? 'Already have an account? Sign In' : "Don't have an account Sign Up"}
            </Button>
          </Grid>
        </Grid>
      </form>
     </Paper>
    </Container>
  )
}

export default Auth