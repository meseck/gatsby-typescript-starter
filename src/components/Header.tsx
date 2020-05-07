import { Link } from 'gatsby';
import React from 'react';
import styled from '../utils/styled';

import Content from './Content';
import { Title } from './Title';

interface Props {
  siteTitle: string;
}

const HeaderElement = styled.div`
  margin-bottom: 1.45rem;
  background: ${props => props.theme.colors.primary};
`;

const Header: React.FC<Props> = ({ siteTitle = '' }) => { return  <HeaderElement>
    <Content>
      <Title light>
        <Link
          to="/"
          style={{
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </Title>
    </Content>
  </HeaderElement> };

export default Header;
