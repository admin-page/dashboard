import { combineReducers } from "redux";
import users from "./users";
import admins from "./admins";
import admins from "./houses";

export default combineReducers({ users, admins, houses });