'use client';

import { useState, useRef } from 'react';
import { Container, Box, Typography, Card, CardContent, TextField, Button } from '@mui/material';
import { QRCodeCanvas } from 'qrcode.react';
import QrCode2Icon from '@mui/icons-material/QrCode2';
import BackgroundIcons from '@/components/BackgroundIcons';

export default function HomePage() {
  const [url, setUrl] = useState('');
  const qrRef = useRef<HTMLDivElement>(null);

  const downloadQRCode = () => {
    if (qrRef.current) {
      const canvas = qrRef.current.querySelector('canvas');
      if (canvas) {
        const image = canvas.toDataURL('image/png');
        const link = document.createElement('a');
        link.href = image;
        link.download = 'qrcodi.png';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }
    }
  };

  return (
    <>
      <BackgroundIcons />
      <Container maxWidth="md">
        <Box
          sx={{
            minHeight: '100vh', display: 'flex', flexDirection: 'column',
            alignItems: 'center', justifyContent: 'center', p: 2,
          }}
        >
          <Card sx={{ minWidth: { xs: '100%', md: 600 }, p: 2, boxShadow: 3, textAlign: 'center' }}>
            <CardContent>
              <QrCode2Icon sx={{ fontSize: 80, color: 'primary.main', mb: 2 }} />

              <Typography variant="h5" component="h1" gutterBottom>
                كودي | مولّد رموز QR
              </Typography>
              <Typography variant="body1" color="text.secondary" mb={4}>
                الصق رابطًا أدناه لإنشاء رمز QR الخاص.
              </Typography>

              <TextField
                fullWidth
                label="الصق الرابط هنا"
                variant="outlined"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
              />

              {url && (
                <Box sx={{ mt: 4, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
                  <div ref={qrRef}>
                    <QRCodeCanvas
                      value={url} size={256} bgColor={"#ffffff"}
                      fgColor={"#000000"} level={"L"} includeMargin={true}
                    />
                  </div>
                  
                  {/* الزر النهائي باللون الرصاصي المخصص */}
                  <Button
                    variant="contained"
                    onClick={downloadQRCode}
                    sx={{
                      backgroundColor: '#757575', // اللون الرصاصي
                      '&:hover': {
                        backgroundColor: '#616161', // درجة أغمق عند مرور الماوس
                      },
                    }}
                  >
                    تحميل الرمز
                  </Button>
                </Box>
              )}
            </CardContent>
          </Card>

          <Typography variant="body2" color="text.secondary" align="center" sx={{ mt: 4 }}>
            © {new Date().getFullYear()} كودي | تصميم وبرمجة أحمد المنصور
          </Typography>
        </Box>
      </Container>
    </>
  );
}