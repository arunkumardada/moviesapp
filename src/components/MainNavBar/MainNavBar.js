import React, { useEffect, useState } from "react";
// import PropTypes from "prop-types";
// import Box from "@mui/material/Box";
// import Tabs from "@mui/material/Tabs";
// import Tab from "@mui/material/Tab";
import { Link, useNavigate } from "react-router-dom";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Button from "@mui/material/Button";

import SearchIcon from "@mui/icons-material/Search";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";

import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import Trend from "../../Pages/Trend/Trend";
import Newest from "../../Pages/Newest/Newest";
import Popular from "../../Pages/Popular/Popular";
import Toprated from "../../Pages/Toprated/Toprated";
import axios from "axios";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function MainNavBar() {
  const [value, setValue] = useState(0);
  const [searchText, setSearchText] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    if (value === 0) {
      navigate("/popular");
    } else if (value === 1) {
      navigate("/trend");
    } else if (value === 2) {
      navigate("/newest");
    } else if (value === 3) {
      navigate("/toprated");
    }
  }, [value, navigate]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  // const fetchSearch = async () => {
  //   const { data } = await axios.get(
  //     `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&query=${searchText}`
  //   );
  //   console.log(data.results);
  // };

  const onSearchPress = () => {};

  const onChangeSearch = (e) => {
    setSearchText(e.target.value);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="Movie tabs example"
        >
          <Tab label="Popular" {...a11yProps(0)} />
          <Tab label="Trend" {...a11yProps(1)} />
          <Tab label="Newest" {...a11yProps(2)} />
          <Tab label="Toprated" {...a11yProps(3)} />
        </Tabs>
        <Toolbar>
          <Search>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
              onChange={(e) => onChangeSearch(e)}
            />
            <Button variant="container" onClick={onSearchPress}>
              <SearchIcon />
            </Button>
          </Search>
        </Toolbar>
      </Box>
      <TabPanel value={value} index={0}>
        <Popular searchText={searchText} />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Trend searchText={searchText} />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Newest />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Toprated searchText={searchText} />
      </TabPanel>
    </Box>
  );
}
