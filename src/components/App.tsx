import React from 'react';
import {Layout} from 'antd';
import HeaderCustom from './layouts/HeaderCustom';
import ContentCustom from './layouts/ContentCustom';
import FooterCustom from './layouts/FooterCustom';
import SidebarCustom from './layouts/SidebarCustom';

const App: React.FC = () => {
  return (
    <Layout hasSider>
      <SidebarCustom />
      <Layout style={{ marginLeft: 200 }}>
        <HeaderCustom />

        <ContentCustom />

        <FooterCustom />
        
      </Layout>
    </Layout>
  );
};

export default App;