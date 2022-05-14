import React from 'react'
import { Route , Routes } from 'react-router-dom';
import { Layout } from 'antd';
import Header from '../components/header/index'
import Footer from '../components/footer/index'
import Home from './home/Home';

const { Content } = Layout;

const Main = () => {
   return (
      <Layout style={{ minHeight: '100vh' }}>
            <Content>
               <Header />
               <Routes>
                  <Route path="/" exact element={<Home />} />
               </Routes>
            </Content>
            <Footer />
      </Layout>
   );
}
export default Main;