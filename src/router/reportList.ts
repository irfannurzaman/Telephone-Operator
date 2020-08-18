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
