import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";

export default function NewsReleaseList() {
  const { news } = GlobalContext(useContext);
  console.log(news);
  return <div></div>;
}
