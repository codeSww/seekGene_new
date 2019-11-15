import React, { Component } from "react";
import { connect } from "react-redux";
import { actionCreator } from "./store";
import { HeaderWrapper, Logo, TitleWrap, TabItem, TabLine } from "./style";
import { Link } from "react-router-dom";
class Header extends Component {
  render() {
    const { tabList, currentTab, handleTabClick } = this.props;
    const JSTabList = tabList.toJS();
    return (
      <HeaderWrapper>
        <Logo />
        <TitleWrap>
          {JSTabList.length > 0
            ? JSTabList.map((item, index) => {
                return (
                  <Link to={item.path}>
                    <TabItem
                      key={item.text}
                      onClick={() => {
                        handleTabClick(index);
                      }}
                    >
                      {item.text}
                      {index === currentTab ? <TabLine /> : null}
                    </TabItem>
                  </Link>
                );
              })
            : null}
        </TitleWrap>
      </HeaderWrapper>
    );
  }
}
const mapStateToProps = state => {
  return {
    currentTab: state.getIn(["header", "currentTab"]),
    tabList: state.getIn(["header", "tabList"])
  };
};
const mapDispatchToProps = dispatch => {
  return {
    handleTabClick(index) {
      dispatch(actionCreator.handleTabClick(index));
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Header);
