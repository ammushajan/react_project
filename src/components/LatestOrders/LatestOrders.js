import React from "react";
import {
  LatestOrdersSection,
  Button,
  LatestOrdersTitle,
} from "./LatestOrdersStyle";
import "bootstrap/dist/css/bootstrap.min.css";
import Table from "react-bootstrap/Table";

export default function LatestOrders() {
  return (
    <LatestOrdersSection>
      <LatestOrdersTitle>
        <h6>Latest Orders</h6>
        <Button>NEW ENTRY</Button>
      </LatestOrdersTitle>
      <Table responsive>
        <thead>
          <tr>
            <th>Order</th>
            <th>Customer</th>
            <th>Date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>CD01049</td>
            <td>Ekaterina Tankova</td>
            <td>12/04/2019</td>
            <td>pending</td>
          </tr>
          <tr>
            <td>CD01046</td>
            <td>Cao Yu</td>
            <td>12/04/2019</td>
            <td>delivered</td>
          </tr>
        </tbody>
      </Table>
    </LatestOrdersSection>
  );
}
