import React from "react";
import {
  UserInfoDashboard,
  UserInfo,
  UserImg,
  Border,
  Explore,
  ExploreDiv,
  Upgrade,
  UpgradeImg,
  UpgradeButton,
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
          <DashboardIcon fontSize="small"></DashboardIcon>
          <p>Dashboard</p>
        </ExploreDiv>
        <ExploreDiv>
          <GroupIcon fontSize="small"></GroupIcon>
          <p>Users</p>
        </ExploreDiv>
        <ExploreDiv>
          <ShoppingBasketIcon fontSize="small"></ShoppingBasketIcon>
          <p>Products</p>
        </ExploreDiv>
        <ExploreDiv>
          <LockOpenIcon fontSize="small"></LockOpenIcon>
          <p>Authentication</p>
        </ExploreDiv>
        <ExploreDiv>
          <TextFieldsIcon fontSize="small"></TextFieldsIcon>
          <p>Typography</p>
        </ExploreDiv>
        <ExploreDiv>
          <ImageIcon fontSize="small"></ImageIcon>
          <p>Icons</p>
        </ExploreDiv>
        <ExploreDiv>
          <AccountBoxIcon fontSize="small"></AccountBoxIcon>
          <p>Account</p>
        </ExploreDiv>
        <ExploreDiv>
          <SettingsIcon fontSize="small"></SettingsIcon>
          <p>Settings</p>
        </ExploreDiv>
      </Explore>
      <Upgrade>
        <UpgradeImg
          src={require("../assets/images/upgrade.jpg")}
          alt="Upgrade Image"
        ></UpgradeImg>
        <h6>Upgrade to PRO</h6>
        <p>Upgrade to get more components</p>
        <UpgradeButton>UPGRADE</UpgradeButton>
      </Upgrade>
    </UserInfoDashboard>
  );
}
