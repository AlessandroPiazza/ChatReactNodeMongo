import { takeLatest, call, put, all } from 'redux-saga/effects';
import api from '../../../services/api';
import { signInSucess, signFailure } from './actions'
import history from '../../../services/history';

export function* signIn({ payload }) {
  try{
    const { name, password } = payload;

    const response = yield call(api.post, 'sessions', {
      name,
      password
    });
    const { token, consultant } =  response.data;

    yield put(signInSucess(token, consultant))

    history.push('/dashboard')
  } catch (err){
    yield put(signFailure())
  }

}

export function* signUp({payload}) {
  try{
    const {name, password} = payload;

   yield call(api.post, 'consultants', {
      name,
      password
    })
  } catch (err) {
    yield put(signFailure())
  }

}

export function signOut() {
  history.push('/');
}
export default all([
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
  takeLatest('@auth/SIGN_UP_REQUEST', signUp),
  takeLatest('@auth/SIGN_OUT', signOut)
]);
