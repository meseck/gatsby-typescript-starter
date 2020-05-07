/** @jsx jsx */

import React from 'react';
import { Link } from 'gatsby';
import { css, jsx } from '@emotion/core';

import Layout from '../components/Layout';
import Image from '../components/Image';
import SEO from '../components/Seo';
import { Subtitle, Title } from '../components/Title';

const IndexPage: React.FC = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <Title purple>Hi people</Title>
      <Subtitle purple>and all other intelligent live forms in the universe.</Subtitle>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <div
        css={css`
          max-width: 300px;
          margin-bottom: 1.45rem;
        `}
      >
        <Image />
      </div>
      <Link to="/page-2/">Go to page 2</Link>
    </Layout>
  );
};

export default IndexPage;
