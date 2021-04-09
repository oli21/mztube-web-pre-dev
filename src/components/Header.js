// All imports

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import logo from "../assets/images/udemy-logo.png";
import { Avatar, Badge, Input, Typography } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import NotificationsNoneOutlinedIcon from "@material-ui/icons/NotificationsNoneOutlined";
import MenuIcon from "@material-ui/icons/Menu";

// Customization for material ui

const useStyles = makeStyles((theme) => ({
  //Design of the container of the header
  appbar: {
    boxShadow: "none",
  },

  toolbar: {
    background: "#ffffff",
    boxShadow: "none",
    height: "75px",
    display: "flex",
    justifyContent: "space-between",
    borderBottom: "1px solid #c9c8c3",
    [theme.breakpoints.down(800)]: {
      display: "grid",
      gridTemplateColumns: "repeat(3,1fr)",
      height: "30px",
      paddingTop: "0.5rem",
    },
  },

  //Design of the udemy logo

  logo: {
    width: 110,
    height: 32,
    cursor: "pointer",
  },

  //Design of the Whole Input base

  inputBase: {
    height: "1.8rem",
    width: "40%",
    border: "1px solid #777774",
    borderRadius: "30px",
    display: "flex",
    alignItems: "center",
    padding: "0.6rem",
    [theme.breakpoints.down(1080)]: {
      width: "30%",
    },
    [theme.breakpoints.down(800)]: {
      display: "none",
    },
  },

  //Design of the Input field

  input: {
    width: "90%",
    color: "#777774",
    fontSize: "14px",
    border: "none",
    outline: "none",
  },

  //Design for All Buttons

  btn: {
    color: "#3c3b37",
    fontSize: "14px",
    cursor: "pointer",
    "&:hover": {
      color: "#3A96A8",
    },
  },

  // Design for individual buttons

  catagoriesBtn: {
    [theme.breakpoints.down(800)]: {
      display: "none",
    },
  },

  businessBtn: {
    [theme.breakpoints.down(1080)]: {
      display: "none",
    },
  },

  instructorBtn: {
    [theme.breakpoints.down(960)]: {
      display: "none",
    },
  },

  myLearningBtn: {
    [theme.breakpoints.down(800)]: {
      display: "none",
    },
  },

  //Design for all Icons

  icon: {
    color: "#777774",
    cursor: "pointer",
    "&:hover": {
      color: "#3A96A8",
    },
  },

  //Design for Individual Icons

  searchIcon: {
    marginRight: "1rem",
  },

  favoriteIcon: {
    [theme.breakpoints.down(800)]: {
      display: "none",
    },
  },

  notificationIcon: {
    [theme.breakpoints.down(800)]: {
      display: "none",
    },
  },

  avatar: {
    background: "#73726C",
    height: 32,
    width: 32,
    [theme.breakpoints.down(800)]: {
      display: "none",
    },
  },

  //design of the mobile view icons

  mobileIcon: {
    marginRight: "0.5rem",
    [theme.breakpoints.up(800)]: {
      display: "none",
    },
  },

  mobileSearchCartIcon: {
    [theme.breakpoints.down(800)]: {
      display: "flex",
      justifyContent: "flex-end",
    },
  },

  //Design of the badges on the icons

  standardBadge: {
    background: "#EC5252",
    width: "23px",
    height: "20px",
  },
  dotBadge: {
    background: "#EC5252",
    right: 3,
    height: 12,
    width: 12,
    borderRadius: "50%",
  },

  avatarBadge: {
    top: 5,
    right: 7,
    [theme.breakpoints.down(800)]: {
      display: "none",
    },
  },
}));

export default function Header() {
  const classes = useStyles();
  return (
    <>
      <div>
        <AppBar className={classes.appbar}>
          <Toolbar className={classes.toolbar}>

            {/* Menu icon of the mobile view */}

            <MenuIcon className={`${classes.icon} ${classes.mobileIcon}`} />

            {/* udemy logo */}

            <img className={classes.logo} src={logo} alt="" />

            {/* Categories button */}

            <Typography
              className={`${classes.btn} ${classes.catagoriesBtn}`}
              variant="body1"
            >
              Categories
            </Typography>

            {/* InputBase and Input with search Icon */}

            <div className={classes.inputBase}>
              <SearchIcon className={`${classes.icon} ${classes.searchIcon}`} />
              <Input
                disableUnderline
                className={classes.input}
                placeholder="Search for anything"
              />
            </div>

            {/* Business button */}

            <Typography
              className={`${classes.btn} ${classes.businessBtn}`}
              variant="body1"
            >
              Udemy for Business
            </Typography>

            {/* Instructor button */}

            <Typography
              className={`${classes.btn} ${classes.instructorBtn}`}
              variant="body1"
            >
              Instructor
            </Typography>

            {/* Learning Button */}

            <Typography
              className={`${classes.btn} ${classes.myLearningBtn}`}
              variant="body1"
            >
              My learning
            </Typography>

            {/* Love Icon */}

            <FavoriteBorderIcon
              className={`${classes.icon} ${classes.favoriteIcon}`}
            />

            {/* Search Icon of the mobile view and Shopping cart Icon */}

            <div className={classes.mobileSearchCartIcon}>
              <SearchIcon className={`${classes.icon} ${classes.mobileIcon}`} />
              <Badge
                classes={{ badge: classes.standardBadge }}
                badgeContent={4}
              >
                <ShoppingCartOutlinedIcon className={classes.icon} />
              </Badge>
            </div>

            {/* Notification Icon */}

            <Badge
              variant="dot"
              classes={{
                badge: `${classes.dotBadge} ${classes.notificationIcon}`,
              }}
            >
              <NotificationsNoneOutlinedIcon
                className={`${classes.icon} ${classes.notificationIcon}`}
              />
            </Badge>

            {/* Avatar  */}

            <Badge
              variant="dot"
              classes={{ badge: `${classes.dotBadge} ${classes.avatarBadge}` }}
            >
              <Avatar className={classes.avatar}>H</Avatar>
            </Badge>
          </Toolbar>
        </AppBar>
      </div>
    </>
  );
}
