import { useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link as RouterLink } from 'react-router-dom'
import { Alert, Button, Grid, Link, TextField, Typography } from '@mui/material'
import { Google } from '@mui/icons-material'

import { AuthLayout } from '../layout/AuthLayout'
import { useForm } from '../../hooks'
import { startGoogleSignIn, startLoginWithEmailPassword } from '../../store/auth'

export const LoginPage = () => {
  const dispatch = useDispatch()

  const { status, errorMessage } = useSelector(state => state.auth)

  const { email, password, onInputChange } = useForm({
    email: 'email@email.com',
    password: '123456'
  })

  const isCheckingAuth = useMemo(() => status === 'checking', [status])

  const onSubmit = e => {
    e.preventDefault()
    dispatch(startLoginWithEmailPassword({ email, password }))
  }

  const onGoogleSingIn = () => {
    dispatch(startGoogleSignIn())
  }

  return (
    <AuthLayout title='Login'>
        <form onSubmit={ onSubmit } className='animate__animated animate__fadeIn'>
          <Grid container>

            <Grid item xs={ 12 } sx={{ mt: 2 }}>
              <TextField
                label='Email'
                type='email'
                placeholder='email@email.com'
                fullWidth
                name='email'
                value={ email }
                onChange={ onInputChange }
                />
            </Grid>

            <Grid item xs={ 12 } sx={{ mt: 2 }}>
              <TextField
                label='Password'
                type='password'
                placeholder='*********'
                fullWidth
                name='password'
                value={ password }
                onChange={ onInputChange }
                />
            </Grid>

            <Grid container sx={{ mt: 2 }} display={ errorMessage ? '' : 'none'}>
              <Grid
                  item
                  xs={ 12 }
                >
                <Alert severity='error'>{errorMessage}</Alert>
              </Grid>
            </Grid>

            <Grid container spacing={ 2 } sx={{ mb: 2, mt: 1 }}>

              <Grid item xs={ 12 } sm={ 6 }>
                <Button
                  disabled = {isCheckingAuth}
                  variant='contained'
                  fullWidth
                  type='submit'>
                  Login
                </Button>
              </Grid>

              <Grid item xs={ 12 } sm={ 6 }>
                <Button
                  disabled = {isCheckingAuth}
                  variant='contained'
                  fullWidth
                  onClick={ onGoogleSingIn }
                >
                  <Google />
                  <Typography sx={{ ml: 1 }}>Google</Typography>
                </Button>
              </Grid>

            </Grid>

            <Grid container direction='row' justifyContent='end'>
              <Link component={ RouterLink } color='inherit' to='/auth/register'>
                Register
              </Link>
            </Grid>

          </Grid>
        </form>
    </AuthLayout>
  )
}
