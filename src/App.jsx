import { useEffect } from 'react';
import MyRoutes from './routes/MyRoutes'
import { setSessionStorage } from './utils/getSessionStorage';
import { Toaster } from 'react-hot-toast';
// import {Analytics} from '@vercel/analytics/react'

function App() {
  return (
    < >
      <Toaster />
      <MyRoutes />
      {/* <Analytics /> */}
    </>
  );
}

export default App;
