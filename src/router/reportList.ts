interface ReportList {
  [key: string]: {
    title: string;
    reports: {
      path: string;
      name: string;
      keyword: string;
    }[];
  };
}

export const reportList: ReportList = {
  GL: {
    title: 'General Ledger',
    reports: [
      {
        path: '/gl/report/trial-balance',
        name: 'Trial Balance',
        keyword: 'General-Ledger',
      },
    ],
  },
  HK: {
    title: 'Housekeeping',
    reports: [],
  },
  FOC: {
    title: 'Front Office Cashier',
    reports: [
      {
        path: '/foc/report/fo-transaction',
        name: 'FO Transaction',
        keyword: 'FrontOfficeCashier',
      },
      {
        path: '/foc/report/booking-journal-by-user',
        name: 'Booking Journal By User',
        keyword: 'FrontOfficeCashier',
      },
      {
        path: '/foc/report/fo-payment-by-user',
        name: 'FO Payment By User',
        keyword: 'FrontOfficeCashier',
      },
      {
        path: '/foc/report/fo-cancellation',
        name: 'FO Cancellation',
        keyword: 'FrontOfficeCashier',
      },
      {
        path: '/foc/report/outstanding-folio',
        name: 'Outstanding Folio',
        keyword: 'FrontOfficeCashier',
      },
      {
        path: '/foc/report/today-departed-guest',
        name: 'Today Departed Guest',
        keyword: 'FrontOfficeCashier',
      },
      {
        path: '/foc/report/over-credit-limit',
        name: 'Over Credit Limit',
        keyword: 'FrontOfficeCashier',
      },
      {
        path: '/foc/report/departed-unbalance-guest',
        name: 'Departed Unbalance Guest',
        keyword: 'FrontOfficeCashier',
      },
    ],
  },
  AP: {
    title: 'Accounts Payable',
    reports: [],
  },

  TO: {
    title: 'TelephoneOperator',
    reports: [
      {
        path: '/inv/stock-item',
        name: 'Stock Item',
        keyword: 'Inventory',
      },
    ],
  }
};
