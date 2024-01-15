import { useState } from 'react'
import { Link as RouterLink } from 'react-router-dom'
import { Button, Grid, Link, TextField, Typography } from '@mui/material'
import { AuthLayout } from '../layout/AuthLayout'
import { useForm } from '../../hooks'

const formData = {
  name: 'John Doe',
  email: 'email@email.com',
  password: '123456'
}

const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

const formValidations = {
  email: [(value) => emailRegex.test(value), 'Must contain an @.'],
  password: [(value) => value.length >= 6, 'Must contain more than 6 characters.'],
  name: [(value) => value.length >= 3, 'Must contain more than 3 characters.']
}

export const RegisterPage = () => {
  const [formSubmited, setFormSubmited] = useState(false)

  const {
    formState, name, email, password, onInputChange,
    isFormValid, nameValid, emailValid, passwordValid
  } = useForm(formData, formValidations)

  const onSubmit = e => {
    e.preventDefault()
    setFormSubmited(true)
    console.log(formState)
  }

  return (

    <AuthLayout title='Register'>
        <form onSubmit={ onSubmit } >
          <Grid container>

            <Grid item xs={ 12 } sx={{ mt: 2 }}>
              <TextField
                label='Name'
                type='text'
                placeholder='Full name'
                name='name'
                value={name}
                onChange={ onInputChange }
                error={ !!nameValid && formSubmited}
                helperText={ nameValid }
                fullWidth
                />
            </Grid>

            <Grid item xs={ 12 } sx={{ mt: 2 }}>
              <TextField
                label='Email'
                type='email'
                placeholder='Your email'
                name='email'
                value={email}
                onChange={ onInputChange }
                error={ !!emailValid && formSubmited}
                helperText={ emailValid }
                fullWidth
                />
            </Grid>

            <Grid item xs={ 12 } sx={{ mt: 2 }}>
              <TextField
                label='Password'
                type='password'
                placeholder='Password'
                name='password'
                value={password}
                onChange={ onInputChange }
                error={ !!passwordValid && formSubmited}
                helperText={ passwordValid }
                fullWidth
                />
            </Grid>

            <Grid container spacing={ 2 } sx={{ mb: 2, mt: 1 }}>

              <Grid item xs={ 12 }>
                <Button
                  type='submit'
                  variant='contained'
                  fullWidth>
                  Create acount
                </Button>
              </Grid>

            </Grid>

            <Grid container direction='row' justifyContent='end'>
              <Typography sx={{ mr: 1 }}>Already have an account?</Typography>
              <Link component={ RouterLink } color='inherit' to='/auth/login'>
                Login
              </Link>
            </Grid>

          </Grid>
        </form>
    </AuthLayout>

  )
}
