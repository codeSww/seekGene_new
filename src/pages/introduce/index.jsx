import React, { Component } from "react";
import {
  Container,
  ContLine,
  ContWrap,
  ConOneText,
  ConOneTitle,
  ConOneDesc,
  ConOneImg,
  ConTwoInfo,
  ConTwoTitle,
  ConTwoSubTitle,
  ConTwoTip,
  ConTwoText,
  ConTwoUl,
  ConTwoLi,
  ConThreeWrap,
  ConThreeTitle,
  ConThreeImgList,
  ConThreeImg1,
  ConThreeImg2
} from "./style";
class Introduce extends Component {
  render() {
    return (
      <Container>
        {/*第一部分*/}
        <ContLine className="grayBg">
          <ContWrap>
            <ConOneText>
              <ConOneTitle>SeekGene</ConOneTitle>
              <ConOneDesc>
                With our proprietary single cell sequencing and TCR-pMHC pairing technologies, we focus on understanding immune responses in the
                single cell resulotion to help screen, treat and monitor disease.
              </ConOneDesc>
            </ConOneText>
            <ConOneImg></ConOneImg>
          </ContWrap>
        </ContLine>
        {/*第二部分*/}
        <ContLine>
          <ContWrap>
            <ConTwoInfo>
              <ConTwoTitle>Technology Platform</ConTwoTitle>
              <ConTwoSubTitle>
                SeekOne<ConTwoTip>TM</ConTwoTip> Single Cell Sequencing Platform
              </ConTwoSubTitle>
              <ConTwoText>
                Through a combination of novel microfluidics, bioenzymatics and informatics, our 10,000 cells-scale single-cell RNA sequencing system
                provides an efficient and economical tool for high throughput single cell transcriptome.
              </ConTwoText>
              <ConTwoSubTitle>
                SeekPair<ConTwoTip>TM</ConTwoTip> TCR-pMHC Pairing Platform
              </ConTwoSubTitle>
              <ConTwoText>
                SeekPair<ConTwoTip>TM</ConTwoTip> platform could afford information including:
              </ConTwoText>
              <ConTwoUl>
                <ConTwoLi>Paired TRA and TRB Sequences from single T cell</ConTwoLi>
                <ConTwoLi>T cell status: naive, effective, memory etc.</ConTwoLi>
                <ConTwoLi>TCR Paired MHC restricted Antigens</ConTwoLi>
              </ConTwoUl>
            </ConTwoInfo>
          </ContWrap>
        </ContLine>
        {/*第三部分*/}
        <ContLine className="grayBg">
          <ContWrap>
            <ConThreeWrap>
              <ConThreeTitle>Investors</ConThreeTitle>
              <ConThreeImgList>
                <ConThreeImg1></ConThreeImg1>
                <ConThreeImg2></ConThreeImg2>
              </ConThreeImgList>
            </ConThreeWrap>
          </ContWrap>
        </ContLine>
      </Container>
    );
  }
}
export default Introduce;
