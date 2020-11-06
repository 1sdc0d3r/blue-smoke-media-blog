import React from "react";
import { IoMdArrowBack, IoMdArrowForward } from "react-icons/io";

export default function Pagination({ state, setState, itemLen }) {
  const pageHandler = (direction) => {
    const { limit, offset, page } = state;
    window.scrollTo(0, 0);
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
          <IoMdArrowBack
            color="grey"
            className="react-icon"
            onClick={() => null}
          />
        ) : (
          <IoMdArrowBack
            color="red"
            className="react-icon"
            onClick={() => pageHandler("back")}
          />
        )}
      </p>
      <p>{state.page}</p>
      <p className="next">
        {itemLen / state.limit <= state.page ? (
          <IoMdArrowForward
            color="grey"
            className="react-icon"
            onClick={() => null}
          />
        ) : (
          <IoMdArrowForward
            color="red"
            className="react-icon"
            onClick={() => pageHandler("next")}
          />
        )}
      </p>
    </div>
  );
}
