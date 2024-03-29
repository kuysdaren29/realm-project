import React, { useState } from 'react'
import {  Button, CssBaseline, FormControl, FormControlLabel, Switch, TextField } from '@mui/material'
import '../styles/Sign.css'
import { styled } from '@mui/material/styles';
import { useLogin } from '../hooks/useLogin';
import { Link } from 'react-router-dom'


const CssFilledInput = styled(TextField)({
  '& .MuiFilledInput-root': {
    borderBottom: "none",
    borderRadius: "10px",
  },
  '& .MuiFilledInput-input': {
    paddingLeft: "20px",
    paddingBottom: "10px",
    paddingTop: "30px"
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
    fontFamily: "Archivo",
    fontSize: '1rem',
    color: '#808080'
},
}

function SigninPage() {

  const [email, setEmail] = useState ('')
  const [password, setPassword] = useState ('')
  const {login, error, isLoading} = useLogin()
  
  const handleSubmit = async (e) =>{
    e.preventDefault()

    await login(email, password)
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
    <div className='admin-signin'>
    <div className='container'>
    <h2>
       <span> 
        LOGIN </span> TO MY ACCOUNT
      <span>.</span>
      </h2>
        <p className='sub'> Don't have an account yet? 
        <span>
          <Link 
          style={{
            textDecoration: 'none',
            color:'#2196f3', 
            fontWeight: '500'
            }} 
            to='/sign-up'> SIGN UP 
          </Link>
        </span> </p>
    
        <form className='signup' onSubmit={handleSubmit}>
        {error &&  <div className='error'>{error}</div>}     
     <FormControl fullWidth sx={{ mt: 2, fontFamily: "Popppins"}}> 
          <CssFilledInput 
               variant="filled"
               label="Email address or phone"
               name="email"
               autoComplete="email"
               sx={{fontFamily: "Archivo", marginBottom: 1}}
               InputLabelProps={{
                style: {
                  fontFamily: "Archivo",
                  paddingLeft: "13px",
                  paddingTop: "4px",
                  paddingBottom: "15px"
                }
              }}
              InputProps={{
                style: {
                  fontFamily: "Archivo",
                  fontSize: "0.9rem"
                }
               }}
               value={email}
               onChange= {(e) =>setEmail(e.target.value)}
               autoFocus 
               />
        <FormControl fullWidth>
              <CssFilledInput
                variant="filled"
                InputLabelProps={{
                  style: {
                    fontFamily: "Archivo",
                    paddingLeft: "13px",
                    paddingTop: "4px",
                    paddingBottom: "15px"
                  }
                }}
                inputProps={{ 
                  style:{
                    fontFamily: "Archivo",
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
           
 
        <FormControl sx={{mt:4}}  >
        <CssBaseline/>
        <Button 
             disableElevation={true}
             type="submit"
            disabled={isLoading}
                           sx={ { 
                           fontFamily: "Archivo",
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
                          SIGN IN
            </Button>
        </FormControl>
      </FormControl>
      </form>
    </div>
  </div>
  )
}

export default SigninPage