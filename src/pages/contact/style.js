import styled from "styled-components";
import address from "../../static/address.png";
export const Container = styled.div`
  width: 100%;
  min-height: 800px;
  background-color: #fbf9f4;
`;
export const ContactWrap = styled.div`
  width: 1440px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  font-family: Nunito, sans-serif;
  font-weight: 200;
`;
export const ContactTitle = styled.div`
  color: #3a729a;
  font-size: 35px;
  margin: 25px 0 30px;
`;
export const ConLeft = styled.div`
  width: 520px;
`;
export const ConLeftTitle = styled.div`
  font-size: 17px;
  margin-bottom: 15px;
  font-weight: 700;
  color: #5e5d62;
`;
export const ConLeftText = styled.div`
  font-size: 18px;
  line-height: 28px;
  margin-bottom: 5px;
`;
export const ConImage = styled.div`
  width: 664px;
  height: 442px;
  background: url(${address}) 100% 100% no-repeat;
  background-size: contain;
`;
export const ContactCon = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
`;
