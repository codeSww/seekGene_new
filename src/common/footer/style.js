import styled from "styled-components";
export const FootWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 80px;
  background-color: #818181;
`;
export const CopyRight = styled.div`
  font-size: 14px;
  color: #fff;
  margin-bottom: 14px;
`;
export const OtherInfo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  color: #fff;
`;
export const OtherItem = styled.div`
  &.point {
    cursor: pointer;
  }
`;
export const OtherLine = styled.div`
  width: 1px;
  height: 12px;
  background-color: #fff;
  margin: 0 12px;
`;
