import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Container, Flex, Form, Input } from "../../styles";
import { useSelector, useDispatch } from "react-redux";
import { setRoom, setUserName } from "../../../services/user/userSlice";
import { addRoom } from "../../../services/rooms/roomsSlice";
import RoomCard from "./RoomCard";
import { CardContainer } from "./styles";

const Page = (props) => {
  const { socket } = useSelector((state) => state.socket);
  const { rooms } = useSelector((state) => state.rooms);
  const { userName, id } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [roomName, setRoomName] = useState("");
  const [newUserName, setNewUserName] = useState(userName);

  useEffect(() => {}, [socket]);

  const createRoom = (e) => {
    e.preventDefault();
    if (roomName === "") return;
    dispatch(addRoom({ name: roomName }));
    setRoomName("");
  };

  const changeName = (e) => {
    e.preventDefault();
    if (newUserName === "") return;
    dispatch(setUserName({socket, userName: newUserName}));
  };

  return (
    <>
      <Container>
        <Form onSubmit={changeName}>
          <input
            type="text"
            value={newUserName}
            onChange={({ target: { value } }) =>
              value.length < 16 && setNewUserName(value)
            }
          />
          <input type="submit" value="CHANGE NAME" />
        </Form>
        <Form onSubmit={createRoom}>
          <input
            type="text"
            value={roomName}
            onChange={({ target: { value } }) =>
              value.length < 16 && setRoomName(value)
            }
          />
          <input type="submit" value="CREATE ROOM" />
        </Form>
        <CardContainer>
          {rooms.map((room, index) => (
            <RoomCard key={index} room={room} />
          ))}
        </CardContainer>
      </Container>
    </>
  );
};

Page.propTypes = {};

export default Page;
