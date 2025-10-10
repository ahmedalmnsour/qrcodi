'use client';
import { createTheme } from '@mui/material/styles';

// الثيم النهائي الموحد
const theme = createTheme({
  direction: 'rtl',
  palette: {
    mode: 'light',
    primary: {
      // اللون الأساسي المعتمد هو الرمادي الداكن الاحترافي
      main: '#374151', 
    },
  },
});

export default theme;