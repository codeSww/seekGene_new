import * as actionTypes from "./constant";
import { fromJS } from "immutable";
const defaultState = fromJS({
  currentTab: 0,
  tabList: [
    {
      text: "About SeekGene",
      path: "/"
    },
    {
      text: "SeekOne",
      path: "/seekOne"
    },
    {
      text: "SeekPair",
      path: "/seekPair"
    },
    {
      text: "Contact US",
      path: "/contact"
    }
  ]
});
export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.TAB_CLICK:
      return state.set("currentTab", action.index);
    default:
      return state;
  }
};
