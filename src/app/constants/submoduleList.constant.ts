import { reportList } from '~/router/reportList';

interface Submodule {
  [key: string]: string[];
}

interface ModulePath {
  [key: string]: any[];
}

const SUBMODULES: Submodule = {
  GL: [
    'Chart Of Accounts',
    'General Journal',
    'General Ledger',
    'Posting',
    'Profit And Loss Budget',
    'Accounting Date Parameter',
    'Closing',
  ],
  FOC: [
    'Guest Folio',
    'Nonguest Folio',
    'Master Folio',
    'Closed Folio',
    'Reservation Deposit',
    'Individual Check Out',
    'Group Check Out',
    'Quick Posting To Guest Folio',
    'Money Change Posting',
    'Foreign Currency Exchange Rate',
    'Report Fo Transaction',
    'Report Booking Journal By User',
    'Report Payment Journal By User',
    'Report Fo Cancellation',
    'Report Outstanding Folio',
    'Report Today Departed Guest',
    'Report Over Credit Limit',
    'Report Departed Unbalance Guest',
  ],
  HK: [
    'Overview',
    'Room Status Admin',
    'Out Of Order',
    'Rooming List',
    'Discrepancy',
    'Lost And Found',
    'Guest Preference List',
    'Trace',
  ],
  AP: [
    'Supplier Profile',
    'Purchase Order',
    'Outstanding And Balance',
    'Payment',
  ],
  TO: [
    'TelephoneOperator',
  ],
};

export const generateModulePath = (moduleAbbr: string, name: string) => {
  const pageName = name.replace(/ /g, '');
  const path = name.replace(/\s+/g, '-').toLowerCase();

  return {
    icon: `${moduleAbbr}/Icon-${pageName}`,
    name,
    path: `/${moduleAbbr.toLowerCase()}/${path}`,
    componentName: `${moduleAbbr}/Page${moduleAbbr}${pageName}.vue`,
    meta: { module: moduleAbbr, reportList: reportList[moduleAbbr] },
    pageName,
  };
};

export const SUBMODULE_LIST: ModulePath = {
  ...Object.keys(SUBMODULES).reduce((prev, curr) => {
    prev[curr] = SUBMODULES[curr].map((name) => generateModulePath(curr, name));
    return prev;
  }, {}),
};
