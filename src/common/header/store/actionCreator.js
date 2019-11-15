import * as actionTypes from "./constant";
import { fromJS } from "immutable";
export const handleTabClick = index => ({
  type: actionTypes.TAB_CLICK,
  index: fromJS(index)
});
