import { Fragment } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import DefaultLayout from "./layouts/DefaultLayout";
import { publicRoutes } from "./routes/routes";


function App() {
  return <BrowserRouter>
          <Routes>
            {publicRoutes.map((route,index) => {
              const Page = route.component;
              let Layout = DefaultLayout
              if(route.layout) {
                Layout  = route.layout
              }else if (route.layout === null) {
                Layout = Fragment
              }
              return <Route 
                        key={index} 
                        path={route.path} 
                        element={
                          <Layout>
                            <Page />
                          </Layout>
                        } 
              />
            })}
          </Routes>
        </BrowserRouter>  
}

export default App;
