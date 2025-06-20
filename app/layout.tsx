import type { Metadata } from 'next';
import { Pacifico } from 'next/font/google';
import './globals.css';

import ReduxProvider from '@/providers/Redux.provider';
import ThemeProvider from '@/providers/Theme.provider';
import SocketProvider from '@/providers/Socket.provider';
import ToastProvider from '@/providers/Toast.provider';
import UserProvider from '@/providers/User.provider';
import CursorEffect from '@/components/utils/CursorEffect';

const pacifico = Pacifico({
  weight: '400',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Net Kids',
  description: 'Net Kids',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body cz-shortcut-listen="true" className={pacifico.className}>
        <ReduxProvider>
          <ThemeProvider>
            <SocketProvider>
              <ToastProvider>
                <UserProvider>
                  <CursorEffect />
                  {children}
                </UserProvider>
              </ToastProvider>
            </SocketProvider>
          </ThemeProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}
