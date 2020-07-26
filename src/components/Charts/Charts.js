import React, { Component } from "react";
import {
  LatestSales,
  Border,
  Duration,
  LatestSalesTitle,
  Overview,
  UsersByDevice,
  ChartSession,
  Device,
  UsersDevice,
  PercentageBlue,
  PercentageRed,
  PercentageYellow,
} from "./ChartStyle";
import Barchart from "../Barchart";
import PieChart from "../PieChart";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";
import RefreshIcon from "@material-ui/icons/Refresh";
import DesktopMacIcon from "@material-ui/icons/DesktopMac";
import TabletAndroidIcon from "@material-ui/icons/TabletAndroid";
import PhoneIphoneIcon from "@material-ui/icons/PhoneIphone";

import Dropdown from "react-bootstrap/Dropdown";
import "./Charts.css";
export default class Charts extends Component {
  state = {
    series: [
      {
        name: "Net Profit",
        data: [44, 55, 57, 56, 61, 58],
      },
      {
        name: "Revenue",
        data: [76, 85, 101, 98, 87, 105],
      },
    ],
    donutSeries: [63, 15, 23],
  };
  render() {
    return (
      <ChartSession>
        <LatestSales>
          <LatestSalesTitle>
            <h6>LatestSales</h6>
            <Duration>
              <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                  LAST 7 DAYS
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">LAST 7 DAYS</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">LAST 14 DAYS</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Duration>
          </LatestSalesTitle>

          <Border></Border>
          <Barchart
            series={this.state.series}
            categories={["1 Aug", "2 Aug", "3 Aug", "4 Aug", "5 Aug", "6 Aug"]}
          />
          <Overview>
            <h6>OVERVIEW</h6>
            <ArrowRightIcon></ArrowRightIcon>
          </Overview>
        </LatestSales>
        <UsersByDevice>
          <LatestSalesTitle>
            <h6>Users By Device</h6>
            <RefreshIcon></RefreshIcon>
          </LatestSalesTitle>
          <Border></Border>
          <PieChart
            series={this.state.donutSeries}
            color={["rgb(69,80,178)", "rgb(229,46,51)", "rgb(227,144,45)"]}
          />

          <Device>
            <UsersDevice>
              <DesktopMacIcon fontSize="small"></DesktopMacIcon>
              <h6>Desktop</h6>
              <PercentageBlue>{this.state.donutSeries[0]}%</PercentageBlue>
            </UsersDevice>
            <UsersDevice>
              <TabletAndroidIcon fontSize="small"></TabletAndroidIcon>
              <h6>Tablet</h6>
              <PercentageRed>{this.state.donutSeries[1]}%</PercentageRed>
            </UsersDevice>
            <UsersDevice>
              <PhoneIphoneIcon fontSize="small"></PhoneIphoneIcon>
              <h6>Mobile</h6>
              <PercentageYellow>{this.state.donutSeries[2]}%</PercentageYellow>
            </UsersDevice>
          </Device>
        </UsersByDevice>
      </ChartSession>
    );
  }
}
