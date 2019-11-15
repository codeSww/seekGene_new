import React, { Component } from "react";
import { Container, ContactWrap, ContactTitle, ConLeft, ConLeftTitle, ContactCon, ConLeftText, ConImage, ConEmail } from "./style";
class Contact extends Component {
  render() {
    return (
      <Container>
        <ContactWrap>
          <ContactTitle>Contact Us</ContactTitle>
          <ContactCon>
            <ConLeft>
              <ConLeftTitle>Beijing SeekGene BioSciences Co., Ltd</ConLeftTitle>
              <ConLeftText>Building 1, Zone 1, 8 Life Science Parkway</ConLeftText>
              <ConLeftText>Changping District, Beijing, China</ConLeftText>
              <ConLeftText>Telephone: 010-56918048</ConLeftText>
              <ConLeftText>E-Mail: seekgene@seekgene.com</ConLeftText>
              <ConLeftText>Recruiting E-Mail: hr@seekgene.com</ConLeftText>
            </ConLeft>
            <ConImage></ConImage>
          </ContactCon>
        </ContactWrap>
      </Container>
    );
  }
}
export default Contact;
