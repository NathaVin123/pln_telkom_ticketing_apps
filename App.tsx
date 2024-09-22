import React from 'react';

import {PaperProvider} from 'react-native-paper';
import AppRouter from './lib/core/router/router';
import {theme} from './lib/core/theme/theme';
import Toast from 'react-native-toast-message';
import {LogBox} from 'react-native';

function App(): React.JSX.Element {
  if (__DEV__) {
    LogBox.ignoreAllLogs();
  }

  return (
    <PaperProvider theme={theme}>
      <AppRouter />
      <Toast />
    </PaperProvider>
  );
}

export default App;
