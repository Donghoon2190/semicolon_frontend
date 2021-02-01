import React from "react";
import Input from "./Input";
import Popup from 'reactjs-popup';
import styled from "styled-components";
const contentStyle = {
  background: "rgba(255,255,255,0)",
  width: "80%",
  border: "none"
};
const Inputs = styled.div`
    text-align: center;
`
const Button = styled.button`
  width: 100%;
  border: 0;
  border-radius: ${props => props.theme.borderRadius};
  color: white;
  font-weight: 600;
  background-color: ${props => props.theme.navyColor};
  text-align: center;
  padding: 7px 0px;
  font-size: 14px;
  cursor:pointer;
      display: inline;
    margin: auto;
    width: 10%;
height: 35px;
    margin-top: 10px;
`;
// { close, Button }
export default ({ close }) => (
  <Popup
    modal
    overlayStyle={{ background: "rgba(255,255,255,0.8" }}
    contentStyle={contentStyle}
    closeOnDocumentClick={false}
    trigger={(open) => (<div className="menu">
      <ul>
        <li open={open}>제목수정</li>
        <li onClick={close}>삭제</li>
        <li onClick={close}>닫기</li>
      </ul>
    </div >
    )}
  >

    {(close) => (<Inputs><Input /> <Inputs><Button onClick={close}>수정 </Button>
      <Button onClick={close}> 취소</Button></Inputs></Inputs>)}
  </Popup>

)


