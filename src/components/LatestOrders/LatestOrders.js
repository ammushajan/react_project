import React, { Component } from "react";
import {
  LatestOrdersSection,
  Button,
  LatestOrdersTitle,
  TableHeading,
} from "./LatestOrdersStyle";
import "bootstrap/dist/css/bootstrap.min.css";
import Table from "react-bootstrap/Table";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import { green } from '@material-ui/core/colors';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
export default class LatestOrders extends Component {
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
      <LatestOrdersSection>
        <LatestOrdersTitle>
          <h6>Latest Orders</h6>
          <Button>NEW ENTRY</Button>
        </LatestOrdersTitle>
        <Table responsive>
          <TableHeading>
            <tr>
              <th>Order</th>
              <th>Customer</th>
              <th><span>Date</span>
              <ArrowDownwardIcon fontSize="small"></ArrowDownwardIcon>
              </th>
              <th>Status</th>
            </tr>
          </TableHeading>
          <TableHeading>
            <tr>
              <td>CD01049</td>
              <td>Ekaterina Tankova</td>
              <td>12/04/2019</td>
              <td>
                <FiberManualRecordIcon fontSize="small" style={{ color: green[500] }}></FiberManualRecordIcon>
                <span>pending</span>
              </td>
            </tr>
            <tr>
              <td>CD01046</td>
              <td>Cao Yu</td>
              <td>12/04/2019</td>
              <td>
              <FiberManualRecordIcon fontSize="small" ></FiberManualRecordIcon>
              <span>delievered</span>
              </td>
            </tr>
          </TableHeading>
        </Table>
      </LatestOrdersSection>
    );
  }
}
