// @flow
import React, { type ChildrenArray, type Element } from 'react';
import { Layout as LayoutComponent } from 'antd';
import { Route } from 'react-router-dom';

import Navbar from './Navbar/Navbar';

import STYLES from './layoutProvider.less';

const { Header, Content } = LayoutComponent;

type PageLayoutProps = {
  children: ChildrenArray<Element<typeof Route>>,
};

const PageLayout = ({ children }: PageLayoutProps) => {
  return (
    <LayoutComponent className={STYLES.layout}>
      <Header>
        <Navbar />
      </Header>
      <Content>{children}</Content>
    </LayoutComponent>
  );
};

export default PageLayout;
