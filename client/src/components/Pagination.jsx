import React, { useState } from "react";
import { IoMdArrowBack, IoMdArrowForward } from "react-icons/io";

export default function Pagination({ state, setState, itemLen }) {
  const pageHandler = (direction) => {
    const { limit, offset, page } = state;
    direction == "next"
      ? setState({
          ...state,
          offset: offset + limit,
          page: page + 1,
        })
      : setState({
          ...state,
          offset: offset - limit,
          page: page - 1,
        });
  };

  return (
    <div className="nav-btns">
      <p className="back">
        {state.page === 1 ? (
          <IoMdArrowBack color="grey" onClick={() => null} />
        ) : (
          <IoMdArrowBack color="red" onClick={() => pageHandler("back")} />
        )}
      </p>
      <p>{state.page}</p>
      <p className="next">
        {itemLen / state.limit <= state.page ? (
          <IoMdArrowForward color="grey" onClick={() => null} />
        ) : (
          <IoMdArrowForward color="red" onClick={() => pageHandler("next")} />
        )}
      </p>
    </div>
  );
}
