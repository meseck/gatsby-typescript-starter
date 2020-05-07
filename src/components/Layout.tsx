/**
 * Layout component that queries for data
 * with Gatsbys useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { ReactNode } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { Global } from '@emotion/core';
import { ThemeProvider } from 'emotion-theming'

import { SiteMetaData } from '../models/querys.model';
import Header from './Header';
import Content from './Content';
import theme from '../styles/theme';
import global from '../styles/global';
import normalize from 'emotion-normalize';

interface Props {
  children: ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
  const { site } = useStaticQuery<SiteMetaData>(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <ThemeProvider theme={theme}>
      <Global styles={[global, normalize]} />
      <Header siteTitle={site.siteMetadata.title} />
      <Content>
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </Content>
    </ThemeProvider>
  );
};

export default Layout;
