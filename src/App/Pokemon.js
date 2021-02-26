import { Button, Link, Typography } from "@material-ui/core";
import React, { useState } from "react";
import MockData from "./MockData";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
const Pokemon = (props) => {
  const { history } = props;
  const { match } = props;
  const { params } = match;
  const { idPok } = params;
  const toFirstUpperCase = (name) => {
    return name.charAt(0).toUpperCase() + name.slice(1);
  };

  const [pokemn, setPokemn] = useState(MockData[idPok]);
  const pokipoki = () => {
    const { name, id, species, height, weight, types, sprites } = pokemn;
    const fullImageUrl = `https://pokeres.bastionbot.org/images/pokemon/${id}.png`;
    const { front_default } = sprites;
    return (
      <>
        <Typography variant="h1">
          {id}.{toFirstUpperCase(name)}
          <img src={front_default} alt={name} />
        </Typography>
        <img src={fullImageUrl} alt={name} width="300" height="300" />
        <Typography variant="h3">Pokemon info</Typography>
        <Typography>
          <Link href={species.url}>{species.name}</Link>
        </Typography>
        <Typography>height:{height}</Typography>
        <Typography>weight:{weight}</Typography>
        <Typography variant="h6">Types</Typography>
        {types.map((typeInfo) => {
          const { type } = typeInfo;
          const { name } = type;
          return <Typography key={name}>{name}</Typography>;
        })}
        <Button
          variant="contained"
          startIcon={<ArrowBackIcon />}
          onClick={() => history.goBack()}
        >
          Go back
        </Button>
      </>
    );
  };
  return <>{pokipoki()}</>;
};

export default Pokemon;
