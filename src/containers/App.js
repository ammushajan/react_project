import React, { Component } from "react";
import ToolBar from "../components/ToolBar/ToolBar";
import SideBar from "../components/SideBar/SideBar"
import DashBoard from "../components/DashBoard/DashBoard"
import {UserContribution} from "../components/style"
import "./App.css"
export default class App extends Component {
  
  render() {
    return (
      <div>
        <ToolBar></ToolBar>
        <UserContribution>
        <SideBar></SideBar>
        <DashBoard></DashBoard>
        </UserContribution>

        
      </div>
    );
  }
}
