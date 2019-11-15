import React, { Component } from "react";
import {
  Container,
  SectionOne,
  SectionWrapper,
  SectionOneLeft,
  OneTitle,
  OneContext,
  Sub,
  SectionOneImage,
  SectionTwo,
  SectionThree,
  SectionTwoWrap,
  SectionTwoTitle,
  SectionTwoImage,
  SectionThreeWrap,
  STTitle,
  STContent,
  ThreePartCon,
  ConTitle,
  ConText
} from "./style";
class seekPair extends Component {
  render() {
    return (
      <Container>
        <SectionOne>
          <SectionWrapper>
            <SectionOneLeft>
              <OneTitle>seekPair</OneTitle>
              <OneContext>
                seekPair<Sub>TM</Sub>single cell sequencing platform provide an efficient approach to prepare mRNA sequencing library from 1000-10000
                cells with individual cell barcodes.
              </OneContext>
            </SectionOneLeft>
            <SectionOneImage></SectionOneImage>
          </SectionWrapper>
        </SectionOne>
        <SectionTwo>
          <SectionTwoWrap>
            <SectionTwoTitle>Work Flow</SectionTwoTitle>
            <SectionTwoImage />
          </SectionTwoWrap>
        </SectionTwo>
        <SectionThree>
          <SectionThreeWrap>
            <STTitle>Features</STTitle>
            <STContent>
              <ThreePartCon>
                <ConTitle>High throughput</ConTitle>
                <ConText>500-10000 cells per chip</ConText>
                <ConText>1-8 samples per person per run</ConText>
                <ConTitle>High quality</ConTitle>
                <ConText>More UMIs and genes detected</ConText>
                <ConText>More mapping rate to the transciptome</ConText>
              </ThreePartCon>
              <ThreePartCon>
                <ConTitle>Easy operation</ConTitle>
                <ConText>Single tube PCR for library preparation</ConText>
                <ConText>Ready to use microwell chips and barcoded beads</ConText>
                <ConTitle>Economical</ConTitle>
                <ConText>No need for expensive instruments</ConText>
              </ThreePartCon>
            </STContent>
          </SectionThreeWrap>
        </SectionThree>
      </Container>
    );
  }
}
export default seekPair;
