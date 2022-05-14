import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header/Header";
import MainNavBar from "./components/MainNavBar/MainNavBar";
import FilterView from "./components/FilterView/FilterView";
import Container from "@mui/material/Container";
import { Switch, Route, Routes, BrowserRouter } from "react-router-dom";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

import Trend from "./Pages/Trend/Trend";
import Popular from "./Pages/Popular/Popular";
import Newest from "./Pages/Newest/Newest";
import Toprated from "./Pages/Toprated/Toprated";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function App() {
  return (
    <BrowserRouter>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid container item spacing={2} xs={10}>
            <Grid item xs={3}>
              <Item>
                <Header />
              </Item>
            </Grid>
            <Grid container spacing={2} item xs={9}>
              <Grid item xs={12}>
                <Item>
                  <MainNavBar />
                </Item>
              </Grid>
              {/* <Grid item xs={3}>
                <Item>Search</Item>
              </Grid> */}
            </Grid>
            <Container></Container>
          </Grid>
          <Grid item xs={2}>
            <Item>
              <FilterView />
            </Item>
          </Grid>
        </Grid>
      </Box>
    </BrowserRouter>
  );
}

export default App;
