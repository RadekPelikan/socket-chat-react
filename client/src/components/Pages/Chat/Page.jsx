import React from "react";
import PropTypes from "prop-types";
import { Container } from "../../styles";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "../../../services/rooms/roomsSlice";

const Page = (props) => {
  const dispatch = useDispatch();
  const { roomID } = useParams();
  const user = useSelector((state) => state.user);
  return (
    <>
      <Container>
        <Link to="/" onClick={() => dispatch(removeUser({ id: roomID, user }))}>
          <button>LEAVE CHAT</button>
        </Link>
      </Container>
    </>
  );
};

Page.propTypes = {};

export default Page;
