import './App.css';
import 'antd/dist/antd.css';
import React, { lazy, Suspense } from 'react'
import { BrowserRouter } from 'react-router-dom';
import { Provider } from "react-redux"
import store from "./store"

const AppRouter = lazy(() => import('./routes'))

function App() {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Suspense fallback={<div className={'text-center mt-3'}>Loading Please Wait....</div>}>
            <AppRouter />
          </Suspense>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
