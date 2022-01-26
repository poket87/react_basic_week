import React from "react";
import StarRating from "./StarRating";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Detail = (props) => {
  return (
    <>
      <h1>평점 남기기</h1>
      <StarRating />
      <Link to="./">
        <Button>평점 남기기</Button>
      </Link>
    </>
  );
};

const Button = styled.button`
  border-radius: 5px;
  color: white;
  background-color: purple;
  width: 150px;
  height: 50px;
  border: 1px solid purple;
  margin-top: 20px;
`;

export default Detail;
