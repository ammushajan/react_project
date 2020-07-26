import React from "react";
import { ToolBarSection, ToolBarIcon } from "./ToolBarStyle";
import NotificationsNoneOutlinedIcon from "@material-ui/icons/NotificationsNoneOutlined";
import ExitToAppOutlinedIcon from "@material-ui/icons/ExitToAppOutlined";
export default function ToolBar() {
  return (
    
      <ToolBarSection>
        <ToolBarIcon>
          <NotificationsNoneOutlinedIcon fontSize="small"></NotificationsNoneOutlinedIcon>
          <ExitToAppOutlinedIcon fontSize="small"></ExitToAppOutlinedIcon>
        </ToolBarIcon>
      </ToolBarSection>
   
  );
}
