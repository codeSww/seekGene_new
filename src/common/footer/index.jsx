import React, { Component } from "react";
import {
  FootWrapper,
  CopyRight,
  OtherInfo,
  OtherItem,
  OtherLine
} from "./style";
class Footer extends Component {
  render() {
    return (
      <FootWrapper>
        <CopyRight>CopyRight © 2019 All Rights Reserved</CopyRight>
        <OtherInfo>
          <OtherItem className="point">SeekGene BioSciences</OtherItem>
          <OtherLine />
          <OtherItem className="point">Contact US</OtherItem>
          <OtherLine />
          <OtherItem className="point">Privacy policy</OtherItem>
          <OtherLine />
          <OtherItem className="point">SeekOne</OtherItem>
          <OtherLine />
          <OtherItem>ICP：京ICP备19047026号</OtherItem>
        </OtherInfo>
      </FootWrapper>
    );
  }
}
export default Footer;
