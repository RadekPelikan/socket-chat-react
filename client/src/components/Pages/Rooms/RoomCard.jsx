import React from "react";
import PropTypes from "prop-types";
import { Card, CardDesc } from "./styles";
import { Flex } from "../../styles";
import { BsFillPersonFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import {useDispatch, useSelector} from 'react-redux'
import { addUser } from "../../../services/rooms/roomsSlice";


const RoomCard = ({ room }) => {
  const dispatch = useDispatch();
  const {userName} = useSelector((state) => state.user)
  return (
    <>
    <Link to={`chat/${room.id}`}>
      <Card onClick={() => dispatch(addUser({id: room.id, userName}))}>
        <div>
          <h4>{room.name || "No name"}</h4>
          <div>
            <p>{room.users.length}</p>
            <BsFillPersonFill />
          </div>
        </div>
        <CardDesc>{room.desc || "No description"}</CardDesc>
      </Card>
    </Link>
    </>
  );
};

RoomCard.propTypes = {
  room: PropTypes.object,
};

export default RoomCard;
