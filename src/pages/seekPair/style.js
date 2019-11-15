import styled from "styled-components";
import xibao from "../../static/xibao.png";
import workFlow1 from "../../static/workflow1.png";
export const Container = styled.div`
  width: 100%;
  min-height: 800px;
`;
export const SectionOne = styled.div`
  width: 100%;
  height: 453px;
  background-color: #fbf9f4;
`;
export const SectionWrapper = styled.div`
  width: 1440px;
  margin: 0 auto;
  display: flex;
  flex-diration: row;
  justify-content: spave-between;
  align-items: center;
`;
export const SectionOneLeft = styled.div`
  width: 856px;
  height: 453px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  font-weight: 300;
`;
export const OneTitle = styled.div`
  margin: 70px 0 25px;
  color: #3a729a;
  font-size: 35px;
`;
export const OneContext = styled.div`
  margin: 10px 0 25px;
  font-size: 23px;
  line-height: 1.5;
`;
export const Sub = styled.span`
  vertical-align: super;
`;
export const SectionOneImage = styled.div`
  width: 453px;
  height: 453px;
  background: url(${xibao}) 100% 100% no-repeat;
  background-size: contain;
`;
export const SectionTwo = styled.div`
  width: 100%;
  background-color: #fff;
`;
export const SectionThree = styled.div`
  width: 100%;
  background-color: #fbf9f4;
`;
export const SectionTwoWrap = styled.div`
  width: 1440px;
  height: 694px;
  margin: 100px auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: relative;
  font-weight: 300;
`;
export const SectionTwoTitle = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  font-size: 35px;
  color: #3a729a;
`;
export const SectionTwoImage = styled.div`
  width: 995px;
  height: 560px;
  background: url(${workFlow1}) 100% 100% no-repeat;
  background-size: contain;
`;
export const SectionThreeWrap = styled.div`
  width: 1440px;
  height: 485px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  font-weight: 200;
`;
export const STTitle = styled.div`
  color: #3a729a;
  margin-top: 100px;
  font-size: 35px;
`;
export const STContent = styled.div`
  width: 1440px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
`;
export const ThreePartCon = styled.div`
  width: 600px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;
export const ConTitle = styled.div`
  font-size: 17px;
  margin: 25px 0 12px;
  font-family: Nunito, sans-serif;
  color: #5e5d62;
  font-weight: 700;
  line-height: 1.5;
`;
export const ConText = styled.div`
  color: #5e5d62;
  font-size: 18px;
  line-height: 28px;
`;
