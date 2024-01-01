import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { ConfigProvider } from 'antd';
import trTR from 'antd/lib/locale/tr_TR';

import { getLanguageSelector } from './features';
import { useAppSelector } from './hooks';
import Router from './routes/routes';
import { IStore } from './store/IStore';
import { boToken } from './utils/config/antdToken';
import { i18n } from './utils/helpers/internationalization';

const App = () => {
  const { language } = useAppSelector((state: IStore) => ({
    language: getLanguageSelector(state),
  }));

  const [i18nLocale, seti18nLocale] = React.useState(trTR);

  React.useEffect(() => {
    i18n.setAntdLanguage(language, seti18nLocale);
    i18n.setDayjsLocale(language);
  }, [language]);

  return (
    <ConfigProvider locale={i18nLocale} theme={boToken}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ConfigProvider>
  );
};

export default App;
