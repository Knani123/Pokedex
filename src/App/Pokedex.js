import React, { useState } from "react";
import {
  AppBar,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  CircularProgress,
  Grid,
  TextField,
  Toolbar,
  Typography,
} from "@material-ui/core";
import MyLocationIcon from "@material-ui/icons/MyLocation";
import { makeStyles } from "@material-ui/styles";
import MockData from "./MockData";

const useStyle = makeStyles((theme) => ({
  pokedexContainer: { padding: "50px  50px 0px 20px" },
  cardMedia: { margin: "auto" },
  cardContent: { textAlign: "center" },
  searchContainer: {
    display: "flex",
    alignItems: "center",
    background: "rgba(255,255,255,0.1)",
  },
  searchIcon: { alignSelf: "flex-end" },
}));

const toFirstUpperCase = (name) => {
  return name.charAt(0).toUpperCase() + name.slice(1);
};

const Pokedex = (props) => {
  const { history } = props;
  const [pokemenData, setPokemenData] = useState(MockData);
  const [info, setInfo] = useState("");
  const classes = useStyle();

  const getPokemnCard = (idp) => {
    const { id, name } = pokemenData[idp];
    const sprite = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${idp}.png`;
    return (
      <Grid item xs={8} sm={4} md={3} key={id}>
        <Card onClick={() => history.push(`/${id}`)}>
          <CardActionArea>
            <CardMedia
              image={sprite}
              style={{ width: 130, height: 130 }}
              className={classes.cardMedia}
            />
            <CardContent className={classes.cardContent}>
              <Typography style={{ border: "1px solid black" }}>
                {id}.{toFirstUpperCase(name)}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
    );
  };
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <div className={classes.searchContainer}>
            <MyLocationIcon className={classes.searchIcon} />
            <TextField
              className={classes.searchInput}
              label="POKEMON"
              onChange={(e) => setInfo(e.target.value)}
            />
          </div>
        </Toolbar>
      </AppBar>
      {pokemenData ? (
        <Grid
          container
          spacing={2}
          className={classes.pokedexContainer}
          justify="center"
        >
          {Object.keys(pokemenData).map(
            (pokemonId) =>
              pokemenData[pokemonId].name.includes(info) &&
              getPokemnCard(pokemonId)
          )}
        </Grid>
      ) : (
        <CircularProgress />
      )}
    </>
  );
};

export default Pokedex;
