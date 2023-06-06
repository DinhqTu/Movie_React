import { useEffect } from 'react';
import { Fragment } from 'react';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import { SkeletonTheme } from 'react-loading-skeleton';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
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

function App() {
  return (
    <SkeletonTheme baseColor="#adacac" highlightColor="#696868">
      <BrowserRouter>
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
  );
}

export default App;
