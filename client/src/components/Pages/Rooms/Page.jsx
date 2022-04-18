import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Container, Flex, Form,Input } from "../../styles";
import { useSelector, useDispatch } from "react-redux";
import { setRoom, setUserName } from "../../../services/user/userSlice";
import { addRoom } from "../../../services/rooms/roomsSlice";
import RoomCard from "./RoomCard";
import { CardContainer } from "./styles";

const Page = (props) => {
  const {socket} = useSelector((state) => state.socket);
  const { rooms } = useSelector((state) => state.rooms);
  const { userName } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [roomName, setRoomName] = useState("");

  useEffect(() => {}, [socket]);

  const createRoom = (e) => {
    e.preventDefault();
    if (roomName === "") return;
    dispatch(addRoom({name: roomName}));
    setRoomName("");
  };

  return (
    <>
      <Container>
        <Input
          type="text"
          value={userName}
          onChange={(e) => dispatch(setUserName(e.target.value))}
        />
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
