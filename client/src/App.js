import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Route, Routes } from "react-router-dom";
import io from "socket.io-client";
import { ChatPage, RoomsPage } from "./components/Pages";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./components/styles/Global";
import { useDispatch } from "react-redux";
import {setSocket} from "./services/socket/socketSlice"

const socket = io.connect(process.env.REACT_APP_SERVER_IP);

const App = (props) => {
  const theme = {
    bgColors: {
      header: "#011627",
      body: "#2EC4B6",
      footer: "#FF3366",
    },
    colors: {
      header: "#FFF",
      body: "#111",
      footer: "#FFF",
    },
    resp: {
      mobile: "768px",
    },
  };

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setSocket(socket))
  }, [])

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Routes>
          <Route exact index element={<RoomsPage />} />
          <Route path="chat/:roomID" element={<ChatPage />} />
        </Routes>
      </ThemeProvider>
    </>
  );
};

App.propTypes = {};

export default App;
