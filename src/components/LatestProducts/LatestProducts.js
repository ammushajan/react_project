import React from "react";
import {LatestProductImg,LatestProductSession,Product,Icon } from "./LatestProductStyle";
import MoreVertIcon from '@material-ui/icons/MoreVert';
export default function LatestProducts() {
  return (
    <LatestProductSession>
      <h6>Latest Products</h6>
      <Product>
        <LatestProductImg
          src={require("../assets/images/dropbox.png")}
          alt="User Image"
        ></LatestProductImg>
        <div>
          <p>Dropbox</p>
          <p>Updated 2 hours ago</p>
        </div>
        <Icon>
        <MoreVertIcon></MoreVertIcon>
        </Icon>
        
      </Product>
      <Product>
        <LatestProductImg
          src={require("../assets/images/medium.png")}
          alt="User Image"
        ></LatestProductImg>
        <div>
          <p>Medium Corporation</p>
          <p>Updated 2 hours ago</p>
        </div>
        <Icon>
        <MoreVertIcon></MoreVertIcon>
        </Icon>
        
      </Product>
    </LatestProductSession>
  );
}
