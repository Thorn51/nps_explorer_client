import React, { useState, useContext } from "react";
import { Favorite } from "@material-ui/icons";
import "./UserInteractions.css";
import { GlobalContext } from "../../context/GlobalState";

export default function UserInteractions(props) {
  const [favoritePark, setFavorite] = useState(0);

  const { favorite, addFavorite } = useContext(GlobalContext);

  let id = favorite.length === 0 ? 0 : favorite.length + 1;

  const onClick = () => {
    setFavorite({
      id: id,
      selected: !favoritePark.selected,
      parkCode: props.parkCode
    });

    addFavorite(favoritePark);
  };

  console.log(favoritePark, favorite);

  const favoriteIcon =
    favoritePark.selected === true ? (
      <Favorite onClick={onClick} color="secondary" fontSize="large" />
    ) : (
      <Favorite onClick={onClick} fontSize="large" />
    );

  return <div className="user_interactions">{favoriteIcon}</div>;
}
