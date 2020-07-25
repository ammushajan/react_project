import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import MoneyIcon from "@material-ui/icons/Money";
import CardContent from "@material-ui/core/CardContent";
import Avatar from "@material-ui/core/Avatar";
import GroupIcon from "@material-ui/icons/Group";
import PollIcon from "@material-ui/icons/Poll";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import LinearDeterminate from "./LinearDeterminate";
import "./SimpleCard.css";
const useStyles = makeStyles({
  root: {
    minWidth: 250,
    margin: "15px",
  },
  bluecolor: {
    backgroundColor: "#0000cd",
    color: "white",
    minWidth: 250,
    margin: "15px",
  },
  displayCard: {
    display: "flex",
  },
  icon:
  {
    marginRight:"0px"
  }
});

export default function SimpleCard() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <div className={classes.displayCard}>
      <Card className={classes.root}>
        <CardContent>
          <h6>BUDGET</h6>
          <h6>$24000</h6>
          <Avatar
            style={{
              backgroundColor: "red",
              position: "absolute",
              right: 0,
              top: 0,
              marginTop: "15px",
              marginRight: "15px",
            }}
          >
            <MoneyIcon className={classes.icon}></MoneyIcon>
          </Avatar>
          <div className={classes. displayCard}>
             <ArrowDownwardIcon fontSize="small"></ArrowDownwardIcon>
             <div>12%</div>
             <div>Since last Month</div>
          </div>
        </CardContent>
      </Card>
      <Card className={classes.root}>
        <CardContent>
          <h6>TOTAL USERS</h6>
          <h6>1,600</h6>
          <Avatar
            style={{
              backgroundColor: "green",
              position: "absolute",
              right: 0,
              top: 0,
              marginTop: "15px",
              marginRight: "15px",
            }}
          >
            <GroupIcon className={classes.icon}></GroupIcon>
          </Avatar>
          <div className={classes. displayCard}>
             <ArrowUpwardIcon fontSize="small"></ArrowUpwardIcon>
             <div>16%</div>
             <div>Since last Month</div>
          </div>
        </CardContent>
      </Card>
      <Card className={classes.root}>
        <CardContent>
          <h6>TASKS PROGRESS</h6>
          <h6>75.5%</h6>
          <Avatar
            style={{
              backgroundColor: "#0000cd",
              position: "absolute",
              right: 0,
              top: 0,
              marginTop: "15px",
              marginRight: "15px",
            }}
          >
            <PollIcon className={classes.icon}></PollIcon>
          </Avatar>
          <LinearDeterminate></LinearDeterminate>
        </CardContent>
      </Card>
      <Card className={classes.bluecolor}>
        <CardContent>
          <h6>BUDGET</h6>
          <h6>$24000</h6>
          <Avatar
            style={{
              backgroundColor: "white",
              position: "absolute",
              right: 0,
              top: 0,
              marginTop: "15px",
              marginRight: "15px",
              color: "#0000cd",
            }}
          >
            <AttachMoneyIcon className={classes.icon}></AttachMoneyIcon>
          </Avatar>
        </CardContent>
      </Card>
    </div>
  );
}
