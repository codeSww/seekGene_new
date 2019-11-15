import styled from "styled-components";
import TestImg from "../../static/shiyanshi.png";
import Zhenge from "../../static/zhenge.jpg";
import Delian from "../../static/delian.png";
export const Container = styled.div`
  width: 100%;
  min-height: 800px;
`;
export const ContLine = styled.div`
  width: 100%;
  background-color: #fff;
  &.grayBg {
    background-color: #fbf9f4;
  }
`;
export const ContWrap = styled.div`
  width: 1440px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
`;
export const ConOneText = styled.div`
  width: 770px;
  height: 453px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;
export const ConOneTitle = styled.div`
  color: #3a729a;
  font-size: 35px;
  padding-top: 70px;
  font-weight: 200;
  margin-bottom: 35px;
`;
export const ConOneDesc = styled.div`
  font-size: 23px;
  color: #5E%D62;
  font-weight: 300;
  line-height: 40px;
`;
export const ConOneImg = styled.div`
  width: 453px;
  height: 453px;
  background: url(${TestImg}) 100% 100% no-repeat;
  background-size: contain;
`;
export const ConTwoInfo = styled.div`
  width: 997px;
  height: 443px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;
export const ConTwoTitle = styled.div`
  color: #3a729a;
  font-size: 35px;
  padding-top: 30px;
  font-weight: 200;
  line-height: 40px;
  height: 40px;
  margin-bottom: 25px;
`;
export const ConTwoSubTitle = styled.div`
  font-size: 17px;
  font-weight: 700;
  line-height: 28px;
  height: 28px;
`;
export const ConTwoTip = styled.span`
  font-size: 14px;
  vertical-align: super;
`;
export const ConTwoText = styled.div`
  font-size: 18px;
  width: 100%;
  margin: 10px 0 25px;
  color: #5e5d62;
  font-weight: 300;
  line-height: 28px;
`;
export const ConTwoUl = styled.ul`
  margin-left: 38px;
  margin-bottom: 25px;
  font-size: 18px;
`;
export const ConTwoLi = styled.li`
  font-family: Nunito, sans-serif;
  color: #5e5d62;
  font-weight: 300;
  line-height: 1.5;
  list-style: disc;
`;
export const ConThreeWrap = styled.div`
  width: 996px;
  height: 179px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;
export const ConThreeTitle = styled.div`
  color: #3a729a;
  font-size: 35px;
  padding-top: 30px;
  margin-bottom: 25px;
`;
export const ConThreeImgList = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;
export const ConThreeImg1 = styled.div`
  width: 200px;
  height: 60px;
  background: url(${Zhenge}) 100% 100% no-repeat;
  background-size: contain;
`;
export const ConThreeImg2 = styled.div`
  width: 200px;
  height: 60px;
  margin-left: 10px;
  background: url(${Delian}) 100% 100% no-repeat;
  background-size: contain;
`;
