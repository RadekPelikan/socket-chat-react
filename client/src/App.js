import React, { useEffect, useState, useContext } from "react";
import PropTypes from "prop-types";
import { Route, Routes } from "react-router-dom";
import { ChatPage, RoomsPage } from "./components/Pages";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./components/styles/Global";
import { useDispatch } from "react-redux";
import { setID, setUserName } from "./services/user/userSlice";
import {SocketContext} from './context/socket';

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

  const socket = useContext(SocketContext);
  const dispatch = useDispatch();

  useEffect(() => {
    socket.on("user:asign-id", ({id, userName}) => {
      dispatch(setID({id}));
      dispatch(setUserName(userName))
    });
  }, [socket]);

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
