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
