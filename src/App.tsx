import React from 'react';
import { useTranslation } from 'react-i18next';

import { DatePicker } from 'antd';
import { ConfigProvider } from 'antd';
import trTR from 'antd/lib/locale/tr_TR';

import { getLanguageSelector } from './features';
import { useAppSelector } from './hooks';
import { IStore } from './store/IStore';
import { i18n } from './utils/helpers/internationalization';

import './App.css';

const App = () => {
  const { t } = useTranslation();
  const { language } = useAppSelector((state: IStore) => ({
    language: getLanguageSelector(state),
  }));

  const [i18nLocale, seti18nLocale] = React.useState(trTR);

  React.useEffect(() => {
    i18n.setAntdLanguage(language, seti18nLocale);
    i18n.setDayjsLocale(language);
  }, [language]);

  return (
    <ConfigProvider locale={i18nLocale}>
      <DatePicker />
      <h1>{t('test')}</h1>
    </ConfigProvider>
  );
};

export default App;
