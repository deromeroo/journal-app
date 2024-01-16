import { loginWithEmailPassword, registerUserWithEmail, singInWithGoogle } from '../../firebase/providers'
import { checkingCredentials, login, logout } from './'

export const checkingAuth = (email, password) => {
  return async (dispatch) => {
    dispatch(checkingCredentials())
  }
}

export const startGoogleSignIn = () => {
  return async (dispatch) => {
    dispatch(checkingCredentials())
    const result = await singInWithGoogle()
    if (!result.ok) return dispatch(logout(result.errorMessage))

    dispatch(login(result))
  }
}

export const startCreatingUserWithEmail = ({ email, password, displayName }) => {
  return async (dispatch) => {
    dispatch(checkingCredentials())
    const { ok, uid, photoURL, errorMessage } = await registerUserWithEmail({ email, password, displayName })

    if (!ok) return dispatch(logout(errorMessage))

    dispatch(login({ uid, displayName, email, photoURL }))
  }
}

export const startLoginWithEmailPassword = ({ email, password }) => {
  return async (dispatch) => {
    dispatch(checkingCredentials())

    const result = await loginWithEmailPassword({ email, password })

    if (!result.ok) return dispatch(logout(result.errorMessage))

    dispatch(login(result))
  }
}
