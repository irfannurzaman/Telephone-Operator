import repository from './repository';
import { ApiEndpoints } from '~/plugins.types';

// endpoints
import AuthApi from '../repositories/auth.api';
import TelephoneOperatorEndpoints from '../repositories/telephoneOperator.api';

const http: ApiEndpoints = {
  auth: AuthApi(repository),
  telephoneOperator: TelephoneOperatorEndpoints(repository),
};

export default http;
