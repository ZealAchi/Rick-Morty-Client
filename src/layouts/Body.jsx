import React, { memo } from "react";
import {  withRouter} from "react-router-dom";

import styled from "styled-components";
const Contenido = styled.div`
  padding-top: 0px;
`;
//In this function its very very important for the functioning  the body(the Magic it's in the children)
export default memo(withRouter(function Body({ match,children}) {
  return (
    <>
      <Contenido  style={{background:'linear-gradient(76213deg, rgb(171, 210, 19), rgb(87, 101, 116))'}}>
        <center style={{background:'linear-gradient(0deg, rgb(171, 210, 19), rgb(87, 101, 116)'}}>
      {match.url !== "/episodes" ? (
      <strong className="h1">Characters</strong>
      ):
      <strong className="h1">Episodes</strong>
      }
      </center>
      {children}
      </Contenido>
    </>
  )
}))