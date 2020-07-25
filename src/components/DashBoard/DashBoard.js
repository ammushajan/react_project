import React, { Component } from "react";
import { DashBoardSection, ProductTableSection } from "./DashBoardStyle";
import SimpleCard from "../SimpleCard/SimpleCard";
import LatestProducts from "../LatestProducts/LatestProducts";
import LatestOrders from "../LatestOrders/LatestOrders";
import Charts from "../Charts/Charts";
export default class DashBoard extends Component {
  render() {
    return (
      <div>
        <DashBoardSection>
          <SimpleCard></SimpleCard>
          <Charts></Charts>
          <ProductTableSection>
            <LatestProducts></LatestProducts>
            <LatestOrders></LatestOrders>
          </ProductTableSection>
        </DashBoardSection>
      </div>
    );
  }
}
