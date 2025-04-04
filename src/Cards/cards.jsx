import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";

import '../index.css'

const cards = [
  {
    id: 1,
    title: "Plants",
    description: "Plants are essential for all life.",
  },
  {
    id: 2,
    title: "Animals",
    description: "Animals are a part of nature.",
  },
  {
    id: 3,
    title: "Humans",
    description: "Humans depend on plants and animals for survival.",
  },
];

function Cards() {
  const [selectedCard, setSelectedCard] = React.useState(0);

  return (
    <Box
      sx={{
        width: "100%",
              display: "grid",
        
        gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
        gap: 2,
        padding: 1,
      }}
    >
      {cards.map((card, index) => (
        <Card
          key={card.id}
          sx={{
            borderRadius: 2,
            boxShadow: 3,
            transition: "transform 0.3s ease, box-shadow 0.3s ease",
            "&:hover": {
              transform: "scale(1.05)",
              boxShadow: 6,
            },
          }}
        >
          <CardActionArea
            onClick={() => setSelectedCard(index)}
            data-active={selectedCard === index ? "" : undefined}
            sx={{
              height: "100%",
              "&[data-active]": {
                backgroundColor: "action.selected",
                "&:hover": {
                  backgroundColor: "action.selectedHover",
                },
              },
            }}
          >
            <CardContent sx={{ padding: 5}}>
              <Typography
                variant="h5"
                component="div"
                sx={{ fontWeight: "bold" }}
              >
                {card.title}
              </Typography>
              <Typography variant="body2" color="text.m">
                {card.description}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      ))}
    </Box>
  );
}

export default Cards;
