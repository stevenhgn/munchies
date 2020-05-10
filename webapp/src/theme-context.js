// Make sure the shape of the default value passed to
// createContext matches the shape that the consumers expect!

import React from 'react';
import themes from '../src/shared/themes';

const ThemeContext = React.createContext({
  theme: themes.light,
  toggleTheme: () => {},
});

export default ThemeContext;
