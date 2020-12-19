import React from "react";
import * as coreData from "./core-data.json";

import {
  Button,
  Container,
  Dialog,
  DialogContent,
  Grid,
  Typography
} from "@material-ui/core";

class Board extends React.Component { 
  constructor(props) {
    super(props);
    this.state = {
      currentCard: null,
      dialogOpen: false,
      Easy: coreData.default.filter(({Name}) => Name === "Easy"),
      Medium: coreData.default.filter(({Name}) => Name === "Medium"),
      Hard: coreData.default.filter(({Name}) => Name === "Hard"),
      Bronze: coreData.default.filter(({Name}) => Name === "Bronze"),
      Silver: coreData.default.filter(({Name}) => Name === "Silver"),
      Gold: coreData.default.filter(({Name}) => Name === "Gold"),
    };
  }

  getRandomIndex = (length) => Math.floor(Math.random() * length);

  handleClick = (deckName) => {
    const deck = [...this.state[deckName]];
    /* Show alert if no cards left */
    if (deck.length === 0) {
      this.setState({
        currentCard: {
          ["Action"]: "No more cards left in this deck!"
        },
        dialogOpen: true,
      });
      return;
    }
    /* Choose random index from deck */
    const i = this.getRandomIndex(deck.length);
    /* Remove that element from array */
    const currentCard = deck.splice(i,1)[0];
    /* Open dialog + show current card */
    this.setState({
      [deckName]: deck,
      currentCard,
      dialogOpen: true,
    })
  }

  handleDialogClose = () => {
    this.setState({
      currentCard: null,
      dialogOpen: false,
    })
  }

  renderDialog = () => {
    console.log("Current Card Render: ", this.state.currentCard);
    return (
      <Dialog open={this.state.dialogOpen} onClose={this.handleDialogClose}>
        <DialogContent>
          <Typography variant="h6">{this.state.currentCard ? this.state.currentCard.Action : ""}</Typography>
        </DialogContent>
      </Dialog>  
    )
  }

  render() {
    const cards = [
      {
        color: "green",
        name: "Easy",
      },
      {
        color: "yellow",
        name: "Medium",
      },
      {
        color: "red",
        name: "Hard",
      },
      {
        color: "#cd7f32",
        name: "Bronze",
      },
      {
        color: "#c0c0c0",
        name: "Silver",
      },
      {
        color: "#FFD700",
        name: "Gold",
      }
    ]
    return (
      <Container maxWidth="md">
        <Grid container>
          {cards.map((card, index) => (
            <Grid item key={index} style={{backgroundColor: card.color, minHeight: 300}} xs={4}>
              <Grid container justify="center">
                <Grid item style={{paddingTop: '40%'}} xs={12}>
                  <Button onClick={() => this.handleClick(card.name)} variant="outlined">{card.name}</Button>
                  <Typography>({this.state[card.name].length} Cards Left)</Typography>
                </Grid>
              </Grid>
            </Grid>
          ))}
        </Grid>
        <div>{this.renderDialog()}</div>
      </Container>
    )
  }
}

export default Board;
