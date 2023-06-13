import UseAsync from '../useAsync';

import * as authApi from '../../services/auth-service/signIn';

export default function useSignUp() {
  const {
    loading: signInLoading,
    error: signInError,
    act: signIn
  } = UseAsync(authApi.signIn, false);

  return {
    signInLoading,
    signInError,
    signIn
  };
}