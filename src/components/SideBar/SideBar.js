import React from "react";
import {
  UserInfoDashboard,
  UserInfo,
  UserImg,
  Border,
  Explore,
  ExploreDiv,
} from "./SideBarStyle";
import DashboardIcon from "@material-ui/icons/Dashboard";
import GroupIcon from "@material-ui/icons/Group";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import LockOpenIcon from "@material-ui/icons/LockOpen";
import SettingsIcon from "@material-ui/icons/Settings";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import ImageIcon from "@material-ui/icons/Image";
import TextFieldsIcon from "@material-ui/icons/TextFields";
import "./SideBar.css";

export default function SideBar() {
  return (
    <UserInfoDashboard>

      <UserInfo>
        <UserImg
          src={require("../assets/images/user_info.jpg")}
          alt="User Image"
        ></UserImg>
        <h6>Shen Zhi</h6>
        <p>Director</p>
      </UserInfo>

      <Border></Border>

      <Explore>
        <ExploreDiv>
          <DashboardIcon></DashboardIcon>
          <p>Dashboard</p>
        </ExploreDiv>
        <ExploreDiv>
          <GroupIcon></GroupIcon>
          <p>Users</p>
        </ExploreDiv>
        <ExploreDiv>
          <ShoppingBasketIcon></ShoppingBasketIcon>
          <p>Products</p>
        </ExploreDiv>
        <ExploreDiv>
          <LockOpenIcon></LockOpenIcon>
          <p>Authentication</p>
        </ExploreDiv>
        <ExploreDiv>
          <TextFieldsIcon></TextFieldsIcon>
          <p>Typography</p>
        </ExploreDiv>
        <ExploreDiv>
          <ImageIcon></ImageIcon>
          <p>Icons</p>
        </ExploreDiv>
        <ExploreDiv>
          <AccountBoxIcon></AccountBoxIcon>
          <p>Account</p>
        </ExploreDiv>
        <ExploreDiv>
          <SettingsIcon></SettingsIcon>
          <p>Settings</p>
        </ExploreDiv>
      </Explore>

    </UserInfoDashboard>
  );
}
