import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.registrogp',
  appName: 'registrogp',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;
