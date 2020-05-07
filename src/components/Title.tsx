import styled from '../utils/styled';
import ThemeModel from '../models/theme.model';

interface TitleProps {
  dark?: boolean;
  light?: boolean;
  purple?: boolean;
  theme: ThemeModel;
}

// Search for possibly existing colors in props
const searchPropsForColor = (props: any) => {
  let selectedColor = Object.keys(props).find(color => {
    if (Object.keys(props.theme.font.colors).indexOf(color) > 0) {
      return color;
    }
  });
  if (selectedColor !== undefined) {
    return props.theme.font.colors[selectedColor];
  }
};

export const Title = styled.h1<TitleProps>`
  margin: 1rem 0;
  font-family: ${props => props.theme.font.family}, sans-serif;
  font-size: ${props => props.theme.font.sizes.title};
  font-weight: 400;
  color: ${props => props.theme.font.colors.dark};

  &,
  a {
    color: ${props => {
      return searchPropsForColor(props);
    }};
  }
`;

export const Subtitle = styled.h2<TitleProps>`
  margin-bottom: 2rem;
  font-family: ${props => props.theme.font.family}, sans-serif;
  font-size: ${props => props.theme.font.sizes.subtitle};
  font-weight: 400;

  &,
  a {
    color: ${props => {
      return searchPropsForColor(props);
    }};
  }
`;
