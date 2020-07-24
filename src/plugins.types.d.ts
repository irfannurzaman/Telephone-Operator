import { GeneralLedgerEndpoints } from '~/api/repositories/generalLedger.api';
import { AccountReceivableEndpoints } from '~/api/repositories/accountReceivable.api';
import { AuthEndpoints } from '~/api/repositories/auth.api';
import { HousekeepingEndpoints } from '~/api/repositories/housekeeping.api';
import { FrontOfficeCashierEndpoints } from '~/api/repositories/frontOfficeCashier.api';
import { AccountsPayableEndpoints } from './api/repositories/accountsPayable.api';
import { TelephoneOperatorEndpoints } from '~/api/repositories/telephoneOperator.api';

export interface ApiEndpoints {
  generalLedger: GeneralLedgerEndpoints;
  accountReceivable: AccountReceivableEndpoints;
  auth: AuthEndpoints;
  housekeeping: HousekeepingEndpoints;
  frontOfficeCashier: FrontOfficeCashierEndpoints;
  accountsPayable: AccountsPayableEndpoints;
  telephoneOperator: TelephoneOperatorEndpoints;
}

declare module 'vue/types/vue' {
  interface Vue {
    $api: ApiEndpoints;
  }
}
