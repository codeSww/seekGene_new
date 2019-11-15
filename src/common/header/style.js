import styled from "styled-components";
import LogoPic from "../../static/logo.png";
export const HeaderWrapper = styled.div`
  position: relative;
  height: 80px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
export const Logo = styled.div`
  position: absolute;
  top: 10px;
  left: 30px;
  width: 65px;
  height: 60px;
  background: url(${LogoPic}) 100% 100% no-repeat;
  background-size: contain;
`;
export const TitleWrap = styled.div`
  width: 1440px;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;
export const TabItem = styled.div`
  font-size: 19px;
  margin-right: 38px;
  color: #5e5d62;
  height: 32px;
  line-height: 32px;
  &.active {
    color: #fff;
  }
  position: relative;
  cursor: pointer;
`;
export const TabLine = styled.div`
  width: 100%;
  height: 2px;
  background-color: #3a729a;
`;
