import useAsync from '../useAsync';

import * as userApi from '../../services/auth-service/signUp';

export default function useSignUp() {
  const {
    loading: signUpLoading,
    error: signUpError,
    act: signUp,
  } = useAsync(userApi.signUp, false);

  return {
    signUpLoading,
    signUpError,
    signUp,
  };
}
