import 'react-perfect-scrollbar/dist/css/styles.css';
import React, { useEffect } from 'react';
import { useLocation, useRoutes } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core';
import GlobalStyles from 'src/components/GlobalStyles';
import 'src/mixins/chartjs';
import theme from 'src/theme';
import routes from 'src/routes';
import TagManager from 'react-gtm-module';

const App = () => {
  const routing = useRoutes(routes);

  const tagManagerArgs = {
    gtmId: 'GTM-K9HCZ69'
  };
  TagManager.initialize(tagManagerArgs);
  const location = useLocation();
  useEffect(() => {
    TagManager.dataLayer({
      dataLayer: {
        pathname: location.pathname,
        event: 'pageView',
      },
    });
  }, [location]);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {routing}
    </ThemeProvider>
  );
};

export default App;
