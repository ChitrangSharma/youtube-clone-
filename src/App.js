import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Box } from "@mui/material";
import {
  Navbar,
  Feed,
  SearchFeed,
  ChannelDetail,
  VideoDetail,
} from "./coponents";
const App = () => (
  <BrowserRouter>
    <Box sx={{ background: "black" }}>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Feed />}></Route>
        <Route path="/video/:id" exact element={<VideoDetail />}></Route>
        <Route path="/channel/:id" exact element={<ChannelDetail />}></Route>
        <Route
          path="/search/:searchTerm"
          exact
          element={<SearchFeed />}
        ></Route>
      </Routes>
    </Box>
  </BrowserRouter>
);

export default App;
