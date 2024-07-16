import React from 'react';

import {PaperProvider} from 'react-native-paper';
import AppRouter from './lib/core/router/router';
import {theme} from './lib/core/theme/theme';

function App(): React.JSX.Element {
  return (
    <PaperProvider theme={theme}>
      <AppRouter />
    </PaperProvider>
  );
}

export default App;
