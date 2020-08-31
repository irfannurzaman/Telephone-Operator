import { reportList } from '~/router/reportList';

interface Submodule {
  [key: string]: string[];
}

interface ModulePath {
  [key: string]: any[];
}

const SUBMODULES: Submodule = {
  TO: [
    'TelephoneOperator',
    'CallAdministration',
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
