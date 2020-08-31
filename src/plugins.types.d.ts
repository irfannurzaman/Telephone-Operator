import { AuthEndpoints } from '~/api/repositories/auth.api';
import { TelephoneOperatorEndpoints } from '~/api/repositories/telephoneOperator.api';

export interface ApiEndpoints {
  auth: AuthEndpoints;
  telephoneOperator: TelephoneOperatorEndpoints;
}

declare module 'vue/types/vue' {
  interface Vue {
    $api: ApiEndpoints;
  }
}
