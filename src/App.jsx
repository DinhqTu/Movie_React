import { useEffect } from 'react';
import { Fragment } from 'react';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import { SkeletonTheme } from 'react-loading-skeleton';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { ToastContainer, Slide } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import 'react-loading-skeleton/dist/skeleton.css';
import './App.css';
import DefaultLayout from './layouts/DefaultLayout';
import { publicRoutes } from './routes/routes';

function ScrollToTop() {
  const navigate = useNavigate();
  useEffect(() => {
    const unListen = () => {
      window.scrollTo(0, 0);
    };
    return () => unListen();
  }, [navigate]);

  return null;
}

// Toast config
// toast.configure({
//   autoClose: 2000, // Đặt thời gian tự động đóng là 2 giây (2000ms)
// });

const theme = createTheme({
  palette: {
    white: {
      main: '#fff',
    },
    secondary: {
      main: '#428BCA',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <SkeletonTheme baseColor="#adacac" highlightColor="#696868">
        <BrowserRouter>
          <ToastContainer transition={Slide} />
          <ScrollToTop />
          <Routes>
            {publicRoutes.map((route, index) => {
              const Page = route.component;
              let Layout = DefaultLayout;
              if (route.layout) {
                Layout = route.layout;
              } else if (route.layout === null) {
                Layout = Fragment;
              }
              return (
                <Route
                  key={index}
                  path={route.path}
                  element={
                    <Layout>
                      <Page />
                    </Layout>
                  }
                />
              );
            })}
          </Routes>
        </BrowserRouter>
      </SkeletonTheme>
    </ThemeProvider>
  );
}

export default App;
