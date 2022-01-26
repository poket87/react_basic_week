// 리액트 패키지를 불러옵니다.
import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import Star from "./Star";

const MainList = (props) => {
  const history = useHistory();
  return (
    <>
      <div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            height: "100%",
          }}
        >
          <h3
            style={{
              margin: "20px",
            }}
          >
            내 일주일은?
          </h3>
          <div
            style={{
              display: "flex",
              width: "300px",
              margin: "20px auto",
              textAlign: "center",
            }}
          >
            <p
              style={{
                fontWeight: "bold",
                margin: "auto",
              }}
            >
              월
            </p>
            <Star />
            <Move
              onClick={() => {
                history.push("/Mon");
              }}
            />
          </div>
          <div
            style={{
              display: "flex",
              width: "300px",
              margin: "20px auto",
              textAlign: "center",
            }}
          >
            <p
              style={{
                fontWeight: "bold",
                margin: "auto",
              }}
            >
              화
            </p>
            <Star />
            <Move
              onClick={() => {
                history.push("/Tue");
              }}
            />
          </div>
          <div
            style={{
              display: "flex",
              width: "300px",
              margin: "20px auto",
              textAlign: "center",
            }}
          >
            <p
              style={{
                fontWeight: "bold",
                margin: "auto",
              }}
            >
              수
            </p>
            <Star />
            <Move
              onClick={() => {
                history.push("/Wed");
              }}
            />
          </div>
          <div
            style={{
              display: "flex",
              width: "300px",
              margin: "20px auto",
              textAlign: "center",
            }}
          >
            <p
              style={{
                fontWeight: "bold",
                margin: "auto",
              }}
            >
              목
            </p>
            <Star />
            <Move
              onClick={() => {
                history.push("/Thu");
              }}
            />
          </div>
          <div
            style={{
              display: "flex",
              width: "300px",
              margin: "20px auto",
              textAlign: "center",
            }}
          >
            <p
              style={{
                fontWeight: "bold",
                margin: "auto",
              }}
            >
              금
            </p>
            <Star />
            <Move
              onClick={() => {
                history.push("/Fri");
              }}
            />
          </div>
          <div
            style={{
              display: "flex",
              width: "300px",
              margin: "20px auto",
              textAlign: "center",
            }}
          >
            <p
              style={{
                fontWeight: "bold",
                margin: "auto",
              }}
            >
              토
            </p>
            <Star />
            <Move
              onClick={() => {
                history.push("/Sat");
              }}
            />
          </div>
          <div
            style={{
              display: "flex",
              width: "300px",
              margin: "20px auto",
              textAlign: "center",
            }}
          >
            <p
              style={{
                fontWeight: "bold",
                margin: "auto",
              }}
            >
              일
            </p>
            <Star />
            {/* <button
              style={{
                margin: "auto",
              }}
            >
              <Link to="./Sun">이동</Link>
            </button> */}
            <Move
              onClick={() => {
                history.push("/Sun");
              }}
            />
          </div>
        </div>
      </div>
    </>

    // <ListStyle>
    //   {my_lists.map((list, index) => {
    //     return (
    //       <>
    //         <ItemStyle
    //           className="list_item"
    //           key={index}
    //           onClick={() => {
    //             history.push("/Mon");
    //           }}
    //         >
    //           {list[0]}
    //         </ItemStyle>
    //       </>
    //     );
    //   })}
    // </ListStyle>
  );
};

const Move = styled.div`
  content: "";
  border-top: 15px solid transparent;
  border-left: 15px solid purple;
  border-right: 15px solid none;
  border-bottom: 15px solid transparent;
  vertical-align: middle;
  display: flex;
  margin: auto;
  cursor: pointer;
`;

export default MainList;
