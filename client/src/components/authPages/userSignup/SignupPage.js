import { Button, CssBaseline, FormControl, FormControlLabel, Grid, Switch, TextField, } from '@mui/material';
import React, { useState } from 'react'
import './signUp.css'
import { styled } from '@mui/material/styles';
import { useSignup } from '../../../hooks/useSignup';


const CssFilledInput = styled(TextField)({
  '& .MuiFilledInput-root': {
    borderBottom: "none",
    borderRadius: "10px",
    
  },
  '& .MuiFilledInput-input': {
    paddingLeft: "20px",
    paddingBottom: "10px",
    paddingTop: "30px",
  },
  '& .MuiFilledInput-root:before': {
    borderBottom: "none",
  },
  '& .MuiFilledInput-root:after': {
    borderBottom: "none",
  },
  '& .MuiFilledInput-root:hover:not(.Mui-disabled):before': {
    borderBottom: "none",
  },
});

const Android12Switch = styled(Switch)(({ theme }) => ({
        
  padding: 8,
  '& .MuiSwitch-track': {
    borderRadius: 22 / 2,
    '&:before, &:after': {
      content: '""',
      position: 'absolute',
      top: '50%',
      transform: 'translateY(-50%)',
      width: 16,
      height: 16,
    },
    '&:before': {
      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 24 24"><path fill="${encodeURIComponent(
          theme.palette.getContrastText(theme.palette.primary.main),
        )}" d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"/></svg>')`,
      left: 12,
    },
    '&:after': {
      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 24 24"><path fill="${encodeURIComponent(
        theme.palette.getContrastText(theme.palette.primary.main),
      )}" d="M19,13H5V11H19V13Z" /></svg>')`,
      right: 12,
    },
  },
  '& .MuiSwitch-thumb': {
    boxShadow: 'none',
    width: 16,
    height: 16,
    margin: 2,
  },
}));
const formControlLabelStyle = {
  '& .MuiFormControlLabel-label':{
    fontFamily: "Poppins",
    fontSize: '1rem',
    color: '#808080'
},
}

const SignupPage = () => {
     
  const [email, setEmail] = useState('')
  const [number, setNumber] = useState('')
  const [password, setPassword] = useState('')
  const [adminkey, setAdminkey] = useState('')
  const {signup, error, isLoading} = useSignup()
 
    const handleSubmit = async (e) =>{
       e.preventDefault()

       await signup(email, number, adminkey, password)
  }
   
  const [values, setValues] = React.useState({  
       
    password: '',
    showPassword: false,
  
  });
  const [checked, setChecked] = React.useState(false)

  const switchHandler = (event) =>{
      setChecked(event.target.checked)
      setValues({
        ...values,
        showPassword: !values.showPassword,
      });
  };
  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };
    
     
  
  
    return (
        <div className='admin-signup'>
          <div className='container'>
            <div className='hero'>
              <h1>
                CREATE 
                  <span> NEW </span> 
                             ACCOUNT
                  <span>.</span>
              </h1>
               <p className='sub-caps'> Register your credentials to start journey </p> </div>
        <form className='signup' onSubmit={handleSubmit}>
        {error &&  <div className='error'>{error}</div>}                                               
          <FormControl fullWidth sx={{ mt: 3 }}>
            <Grid container spacing={1}>
            <Grid item xs={12} sm={7}>
            <FormControl fullWidth> 
            <CssFilledInput 
               variant="filled"
               label="Email address"
               name="email"
               autoComplete="email"
               sx={{fontFamily: "Poppins",}}
               InputLabelProps={{
                style: {
                  fontFamily: "Poppins",
                  paddingLeft: "13px",
                  paddingTop: "4px",
                  paddingBottom: "15px"
                }
              }}
               InputProps={{
                style: {
                  fontFamily: "Poppins",
                  fontSize: "0.9rem"
                }
               }}
               value={email}
               onChange= {(e) =>setEmail(e.target.value)}
               autoFocus />
           </FormControl>
          </Grid>
    
          <Grid item xs={12} sm={5}>
          <FormControl fullWidth sx={{fontFamily: "Poppins"}}> 
            <CssFilledInput 
               variant="filled"
               label="Mobile Number"
               name="number"
               autoComplete="tel"
               sx={{fontFamily: "Poppins",}}
               InputLabelProps={{
                style: {
                  fontFamily: "Poppins",
                  paddingLeft: "13px",
                  paddingTop: "4px",
                  paddingBottom: "15px"
                }
              }}
              InputProps={{
                style: {
                  fontFamily: "Poppins",
                  fontSize: "0.9rem"
                }
               }}
               value={number}
               onChange= {(e) =>setNumber(e.target.value)}
               autoFocus />
            </FormControl>
          </Grid>
         
          <Grid item xs={12}>
          <FormControl fullWidth sx={{fontFamily: "Poppins"}}> 
            <CssFilledInput 
               variant="filled"
               autoComplete="nope"
               label="Admin key"
               name="adminkey"
               sx={{fontFamily: "Poppins",}}
               InputLabelProps={{
                style: {
                  fontFamily: "Poppins",
                  paddingLeft: "13px",
                  paddingTop: "4px",
                  paddingBottom: "15px"
                }
              }}
              InputProps={{
                style: {
                  fontFamily: "Poppins",
                  fontSize: "0.9rem"
                }
               }}
               value={adminkey}
               onChange= {(e) =>setAdminkey(e.target.value)}
               autoFocus />
            </FormControl>
          </Grid>

          <Grid item xs={12}>
          <FormControl fullWidth>
          <CssFilledInput
                variant="filled"
                InputLabelProps={{
                  style: {
                    fontFamily: "Poppins",
                    paddingLeft: "13px",
                    paddingTop: "2px",
                    paddingBottom: "15px"
                  }
                }}
                inputProps={{ 
                  style:{
                    fontFamily: "Poppins",
                    fontSize: "0.9rem"
                  }
                }}
                id="password"
                name="password"
                type={values.showPassword ? 'text' : 'password'}
                value={`${values.password}${password}`} 
                onChange={(e) =>setPassword(e.target.value)&&handleChange('password')}
                sx={{borderRadius: "10px"}}
                label="Password"
              /> 
                <FormControl sx={{mt:1}}>
                <FormControlLabel 
                control={<Android12Switch checked={checked} onChange={switchHandler} />}
                label="Show Password"
                sx={{...formControlLabelStyle}}
                />
              </FormControl> 
              </FormControl>
              </Grid>
              
              <Grid item xs={12}>
              <FormControl fullWidth margin='normal' >
            <CssBaseline/>
            <Button 
             disableElevation={true}
             type="submit"
            disabled={isLoading}
                           sx={ { 
                           fontFamily: "Poppins",
                           fontSize: '0.9rem', 
                           borderRadius: 4, 
                           height:'6ch', 
                           fontWeight:'500',
                           hover:'#004d40',
                            } } 
                           margin= "normal"
                           variant="contained"  
                           size="large"
                           color="secondary"
                           >
                          SIGN UP 
            </Button>
            </FormControl>
               </Grid>
               </Grid>
          </FormControl>
          </form>
        </div>
      </div>
  )
}

export default SignupPage