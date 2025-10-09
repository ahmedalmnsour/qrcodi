'use client';
import { createTheme } from '@mui/material/styles';

// الثيم النهائي الموحد
const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      // اللون الأساسي المعتمد هو الرمادي الداكن الاحترافي
      main: '#374151', 
    },
  },
});

export default theme;