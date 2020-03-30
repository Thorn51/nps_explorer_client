import React, { useState, useEffect, useContext } from "react";
import { Favorite } from "@material-ui/icons";
import "./UserInteractions.css";
import TokenServices from "../../services/token-service";
import { GlobalContext } from "../../context/GlobalState";

export default function UserInteractions(props) {
  const [isFavorite, setIsFavorite] = useState();
  const [hasFavorite, setHasFavorite] = useState();
  const { addFavorite, patchFavorite } = useContext(GlobalContext);

  useEffect(() => {
    let user = TokenServices.getUsersDetails(TokenServices.getAuthToken());
    let userId = user.userId;
    let hasUserFavorite = props.favorites.find(
      favorite => favorite.userAccount === userId
    );
    hasUserFavorite ? setHasFavorite(true) : setHasFavorite(false);
    hasUserFavorite
      ? setIsFavorite(hasUserFavorite.favorite)
      : setIsFavorite(false);
  }, [props.favorites]);

  const onClick = e => {
    e.preventDefault();
    if (hasFavorite === false) {
      let newFavorite = {
        parkCode: props.parkCode,
        favorite: true
      };
      addFavorite(newFavorite);
      setHasFavorite(true);
      setIsFavorite(true);
    } else {
      let user = TokenServices.getUsersDetails(TokenServices.getAuthToken());
      let userId = user.userId;
      let userFavorite = {
        ...props.favorites.filter(favorite => favorite.userAccount === userId)
      };
      let updateField = {
        favorite: !isFavorite
      };
      patchFavorite(userFavorite[0].id, updateField);
      setIsFavorite(!isFavorite);
    }
  };

  const favoriteIcon =
    isFavorite === false ? (
      <Favorite onClick={onClick} fontSize="large" />
    ) : (
      <Favorite onClick={e => onClick(e)} color="secondary" fontSize="large" />
    );

  return <div className="user_interactions">{favoriteIcon}</div>;
}
