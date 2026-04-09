import React, { useState } from 'react';
import { Grid } from '@mui/material';
import Exercici1_4 from './Exercici1_4'; // Importamos el componente de la tarjeta

const Exercici1_4_2 = () => {
  const [personatges] = useState([
    {
      id: 1,
      titol: "Malphite",
      imatge: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUkaghRHDIsGEOhJF2p6EaGfB2bGFgSIeg-w&s",
      text_paragraf: "A massive creature of living stone...",
      enllaç_boto: "https://www.leagueoflegends.com/en-us/champions/malphite/",
      enllaç_boto2: "https://op.gg/es/lol/champions/malphite/build",
      text_boto: "LEARN MORE",
      text_boto2: "BUILD"
    },
    {
      id: 2,
      titol: "Shaco",
      imatge: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJkXc8sIeMf-QqIQb9iHFlykj3xWiPCDplvw&s",
      text_paragraf: "Crafted long ago as a plaything...",
      enllaç_boto: "https://www.leagueoflegends.com/en-us/champions/shaco/",
      enllaç_boto2: "https://op.gg/es/lol/champions/shaco/build",
      text_boto: "INFO",
      text_boto2: "BUILD"
    },
    {
        id: 3,
        titol: "Dr. Mundo",
        imatge: "https://www.lolvvv.com/_next/image?url=https%3A%2F%2Fddragon.leagueoflegends.com%2Fcdn%2Fimg%2Fchampion%2Fsplash%2FDrMundo_3.jpg&w=1200&q=75",
        text_paragraf: "Utterly mad, tragically homicidal...",
        enllaç_boto: "https://www.leagueoflegends.com/en-us/champions/dr-mundo/",
        enllaç_boto2: "https://op.gg/es/lol/champions/dr-mundo/build",
        text_boto: "INFO",
        text_boto2: "BUILD"
      },
      {
        id: 4,
        titol: "Swain",
        imatge: "https://wiki.leagueoflegends.com/en-us/images/thumb/Swain_FriedChickenKingSkin.jpg/340px-Swain_FriedChickenKingSkin.jpg",
        text_paragraf: "Jericho Swain is the visionary ruler...",
        enllaç_boto: "https://www.leagueoflegends.com/en-us/champions/swain/",
        enllaç_boto2: "https://op.gg/es/lol/champions/swain/build",
        text_boto: "INFO",
        text_boto2: "BUILD"
      },
      {
        id: 5,
        titol: "Mordekaiser",
        imatge: "https://media.altchar.com/prod/images/gm_featured_image/7c55aa66fc64-prestige-money-miser-mordekaiser.webp",
        text_paragraf: "A brutal warlord from a forgotten era...",
        enllaç_boto: "https://www.leagueoflegends.com/en-us/champions/mordekaiser/",
        enllaç_boto2: "https://op.gg/es/lol/champions/mordekaiser/build",
        text_boto: "INFO",
        text_boto2: "BUILD"
      }
  ]);

  return (
    <Grid container spacing={2}>
      {personatges.map((item) => (
        <Grid item key={item.id} size={{ xs: 12, md: 6, lg: 3 }}>
          <Exercici1_4
            titol={item.titol}
            imatge={item.imatge}
            text_paragraf={item.text_paragraf}
            enllaç_boto={item.enllaç_boto}
            enllaç_boto2={item.enllaç_boto2}
            text_boto={item.text_boto}
            text_boto2={item.text_boto2}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default Exercici1_4_2;