import React from 'react';
import styled from 'styled-components';

function xor(x?: string, or?: string) {
  return x === undefined ? or : x;
}

type StyledBoxProps = {
  paddingTop?: string;
  paddingRight?: string;
  paddingBottom?: string;
  paddingLeft?: string;
  marginTop?: string;
  marginRight?: string;
  marginBottom?: string;
  marginLeft?: string;
};

const StyledBox = styled.div`
  ${({
    paddingTop,
    paddingRight,
    paddingBottom,
    paddingLeft,
    marginTop,
    marginRight,
    marginBottom,
    marginLeft
  }: StyledBoxProps) => ({
    paddingTop,
    paddingRight,
    paddingBottom,
    paddingLeft,
    marginTop,
    marginRight,
    marginBottom,
    marginLeft
  })}
`;

type BoxProps = {
  p?: string;
  px?: string;
  py?: string;
  pt?: string;
  pr?: string;
  pb?: string;
  pl?: string;
  m?: string;
  mx?: string;
  my?: string;
  mt?: string;
  mr?: string;
  mb?: string;
  ml?: string;
  as?: any;
};

/**
 * The box allows for margin or padding
 * @param param0 this does it
 */
const Box: React.FC<BoxProps> = ({
  p,
  px,
  py,
  pt,
  pr,
  pb,
  pl,
  m,
  mx,
  my,
  mt,
  mr,
  mb,
  ml,
  ...props
}) => {
  let paddingTop = xor(pt, xor(py, p));
  let paddingRight = xor(pr, xor(px, p));
  let paddingBottom = xor(pb, xor(py, p));
  let paddingLeft = xor(pl, xor(px, p));
  let marginTop = xor(mt, xor(my, m));
  let marginRight = xor(mr, xor(mx, m));
  let marginBottom = xor(mb, xor(my, m));
  let marginLeft = xor(ml, xor(mx, m));
  return (
    <StyledBox
      paddingTop={paddingTop}
      paddingRight={paddingRight}
      paddingBottom={paddingBottom}
      paddingLeft={paddingLeft}
      marginTop={marginTop}
      marginRight={marginRight}
      marginBottom={marginBottom}
      marginLeft={marginLeft}
      {...props}
    />
  );
};

export default Box;
