import React from "react";
import { useParams } from "react-router-dom";
import data from "../data/articles";
import ReactHtmlParser from "react-html-parser";

export default function ArticleTesting() {
  const { id } = useParams();
  return (
    <article>
      <pre className="content">
        {ReactHtmlParser(data.find((e) => e.id == id).content)}
      </pre>
    </article>
  );
}
