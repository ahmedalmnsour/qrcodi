'use client';

import { Box } from '@mui/material';
import QrCodeIcon from '@mui/icons-material/QrCode';
import QrCodeScannerIcon from '@mui/icons-material/QrCodeScanner';

const icons = [
  { Icon: QrCodeIcon, top: '10%', left: '5%', transform: 'rotate(-15deg)', fontSize: 120 },
  { Icon: QrCodeScannerIcon, top: '20%', left: '80%', transform: 'rotate(20deg)', fontSize: 180 },
  { Icon: QrCodeIcon, top: '70%', left: '15%', transform: 'rotate(10deg)', fontSize: 220 },
  { Icon: QrCodeScannerIcon, top: '65%', left: '90%', transform: 'rotate(-25deg)', fontSize: 90 },
  { Icon: QrCodeIcon, top: '85%', left: '55%', transform: 'rotate(5deg)', fontSize: 150 },
];

export default function BackgroundIcons() {
  return (
    <Box
      aria-hidden="true"
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
        overflow: 'hidden',
        pointerEvents: 'none',
      }}
    >
      {icons.map((item, index) => (
        <Box
          key={index}
          component={item.Icon}
          sx={{
            position: 'absolute',
            top: item.top,
            left: item.left,
            fontSize: item.fontSize,
            transform: item.transform,
            color: 'grey.200',
            opacity: 0.5,
          }}
        />
      ))}
    </Box>
  );
}