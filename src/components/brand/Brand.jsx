import React from "react";
import styled from "styled-components";
import brandLight from "./logo.png";
import brandDark from "./logo-dark.png";

const MainBrand = styled.div`
  img {
    width: ${(props) => props.width};
    max-width: 100%;
    height: ${(props) => props.height};
  }
  .v-light &,
  & {
    .logo-dark {
      display: block;
    }
    .logo-light {
      display: none;
    }
  }

  .v-dark & {
    .logo-dark {
      display: none;
    }
    .logo-light {
      display: block;
    }
  }
`;

const Brand = ({ width, height, alt }) => {
  return (
    <MainBrand className="main-brand" width={width} height={height}>
      <div
        className="logo-light"
        alt={`${alt} - logo dark`}
        width={width}
        height={height}
        style={{fontFamily: 'Montserrat, sans-serif', fontWeight: '1000', fontSize: '22px', lineHeight: '22px', rgba: '255,255,0.68'}}
      >
        ../WebPath/
      </div>
    </MainBrand>
  );
};

MainBrand.defaultProps = { width: "80px", height: "auto" };
Brand.defaultProps = { alt: "WebPath" };

export default React.memo(Brand);
