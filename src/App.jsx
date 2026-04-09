import { useState } from "react";
import "./App.css";
import Menu from "./Menu";
import Exercici1 from "./components/Exercici1";
import Exercici2 from "./components/Exercici2";
import Exercici3 from "./components/Exercici3";
import Exercici4 from "./components/Exercici4";
import Exercici1_2 from "./components2/Exercici1_2";
import Exercici2_2 from "./components2/Exercici2_2";
import Exercici1_3 from "./components3/Exercici1_3";
import Exercici1_4 from "./components4/Exercici1_4";
import Exercici1_4_2 from "./components4/Exercici1_4_2";
import Grid from '@mui/material/Grid';

function App() {
  const [tarea, setTarea] = useState("Exercici 1");

  function getTascaComponent() {
    switch (tarea) {
      case "Exercici 1":
        return <Exercici1 />;
      case "Exercici 2":
        return <Exercici2 />;
      case "Exercici 3":
        return <Exercici3 />;
      case "Exercici 4":
        return <Exercici4 />;
      case "Exercici 1_2":
        return <Exercici1_2 />;
      case "Exercici 2_2":
        return <Exercici2_2 />;
      case "Exercici 1_3":
        return (
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Exercici1_3
              titol="Malphite"
              imatge="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUkaghRHDIsGEOhJF2p6EaGfB2bGFgSIeg-w&s" 
              text_paragraf="A massive creature of living stone, Malphite struggles to impose blessed order on a chaotic world. Birthed as a servitor-shard to an otherworldly obelisk known as the Monolith, he used his tremendous elemental strength to maintain and protect his progenitor, but ultimately failed. The only survivor of the destruction that followed, Malphite now endures Runeterra's soft folk and their fluid temperaments, while struggling to find a new role worthy of the last of his kind."
              enllaç_boto="https://www.leagueoflegends.com/en-us/champions/malphite/"
              enllaç_boto2="https://op.gg/es/lol/champions/malphite/build"
              text_boto="LEARN MORE"
              text_boto2="BUILD"
            />
            <Exercici1_3
              titol="Shaco"
              imatge="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJkXc8sIeMf-QqIQb9iHFlykj3xWiPCDplvw&s" 
              text_paragraf="Crafted long ago as a plaything for a lonely prince, the enchanted marionette Shaco now delights in murder and mayhem. Corrupted by dark magic and the loss of his beloved charge, the once-kind puppet finds pleasure only in the misery of the poor souls he torments. He uses toys and simple tricks to deadly effect, finding the results of his bloody “games” hilarious—and for those who hear a dark chuckle in the dead of night, the Demon Jester may have marked them as his next plaything."
              enllaç_boto="https://www.leagueoflegends.com/en-us/champions/shaco/"
              enllaç_boto2="https://op.gg/es/lol/champions/shaco/build"
              text_boto="INFO"
              text_boto2="BUILD"
            />
            <Exercici1_3
              titol="Dr. Mundo"
              imatge="https://www.lolvvv.com/_next/image?url=https%3A%2F%2Fddragon.leagueoflegends.com%2Fcdn%2Fimg%2Fchampion%2Fsplash%2FDrMundo_3.jpg&w=1200&q=75" 
              text_paragraf={`Utterly mad, tragically homicidal, and horrifyingly purple, Dr. Mundo is what keeps many of Zaun's citizens indoors on particularly dark nights. Now a self-proclaimed physician, he was once a patient of Zaun's most infamous asylum. After "curing" the entire staff, Dr. Mundo established his practice in the empty wards that once treated him and began mimicking the highly unethical procedures he had so often experienced himself. With a full cabinet of medicines and zero medical knowledge, he now makes himself more monstrous with each injection and terrifies the hapless "patients" who wander near his office.`}
              enllaç_boto2="https://op.gg/es/lol/champions/dr-mundo/build"
              text_boto="INFO"
              text_boto2="BUILD"
            />
            <Exercici1_3
              titol="Swain"
              imatge="https://wiki.leagueoflegends.com/en-us/images/thumb/Swain_FriedChickenKingSkin.jpg/340px-Swain_FriedChickenKingSkin.jpg?806e7" 
              text_paragraf="Jericho Swain is the visionary ruler of Noxus, an expansionist nation that reveres only strength. Though he was cast down and crippled in the Ionian wars, his left arm severed, he seized control of the empire with ruthless determination… and a new, demonic hand. Now, Swain commands from the front lines, marching against a coming darkness that only he can see—in glimpses gathered by shadowy ravens from the corpses all around him. In a swirl of sacrifice and secrets, the greatest secret of all is that the true enemy lies within."
              enllaç_boto="https://www.leagueoflegends.com/en-us/champions/swain/"
              enllaç_boto2="https://op.gg/es/lol/champions/swain/build"
              text_boto="INFO"
              text_boto2="BUILD"
            />
            <Exercici1_3
              titol="Mordekaiser"
              imatge="https://media.altchar.com/prod/images/gm_featured_image/7c55aa66fc64-prestige-money-miser-mordekaiser.webp" 
              text_paragraf="Twice slain and thrice born, Mordekaiser is a brutal warlord from a foregone epoch who uses his necromantic sorcery to bind souls into an eternity of servitude. Few now remain who remember his earlier conquests, or know the true extent of his powers—but there are some ancient souls that do, and they fear the day when he may return to claim dominion over both the living and the dead."
              enllaç_boto="https://www.leagueoflegends.com/en-us/champions/mordekaiser/"
              enllaç_boto2="https://op.gg/es/lol/champions/mordekaiser/build"
              text_boto="INFO"
              text_boto2="BUILD"
            />
          </div>);
      case "Exercici 1_4":
        return (
          <Grid container spacing={2} style={{ justifyContent: "center" }}>
            <Grid size={{ xs: 12, md: 6, lg: 3 }}>
              <Exercici1_4
                titol="Malphite"
                imatge="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUkaghRHDIsGEOhJF2p6EaGfB2bGFgSIeg-w&s"
                text_paragraf="A massive creature of living stone, Malphite struggles to impose blessed order on a chaotic world. Birthed as a servitor-shard to an otherworldly obelisk known as the Monolith, he used his tremendous elemental strength to maintain and protect his progenitor, but ultimately failed. The only survivor of the destruction that followed, Malphite now endures Runeterra's soft folk and their fluid temperaments, while struggling to find a new role worthy of the last of his kind."
                enllaç_boto="https://www.leagueoflegends.com/en-us/champions/malphite/"
                enllaç_boto2="https://op.gg/es/lol/champions/malphite/build"
                text_boto="LEARN MORE"
                text_boto2="BUILD"
              />
            </Grid>

            <Grid size={{ xs: 12, md: 6, lg: 3 }}>
              <Exercici1_4
                titol="Shaco"
                imatge="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJkXc8sIeMf-QqIQb9iHFlykj3xWiPCDplvw&s"
                text_paragraf="Crafted long ago as a plaything for a lonely prince, the enchanted marionette Shaco now delights in murder and mayhem. Corrupted by dark magic and the loss of his beloved charge, the once-kind puppet finds pleasure only in the misery of the poor souls he torments. He uses toys and simple tricks to deadly effect, finding the results of his bloody “games” hilarious—and for those who hear a dark chuckle in the dead of night, the Demon Jester may have marked them as his next plaything."
                enllaç_boto="https://www.leagueoflegends.com/en-us/champions/shaco/"
                enllaç_boto2="https://op.gg/es/lol/champions/shaco/build"
                text_boto="INFO"
                text_boto2="BUILD"
              />
            </Grid>

            <Grid size={{ xs: 12, md: 6, lg: 3 }}>
              <Exercici1_4
                titol="Dr. Mundo"
                imatge="https://www.lolvvv.com/_next/image?url=https%3A%2F%2Fddragon.leagueoflegends.com%2Fcdn%2Fimg%2Fchampion%2Fsplash%2FDrMundo_3.jpg&w=1200&q=75"
                text_paragraf={`Utterly mad, tragically homicidal, and horrifyingly purple, Dr. Mundo is what keeps many of Zaun's citizens indoors on particularly dark nights. Now a self-proclaimed physician, he was once a patient of Zaun's most infamous asylum. After "curing" the entire staff, Dr. Mundo established his practice in the empty wards that once treated him and began mimicking the highly unethical procedures he had so often experienced himself. With a full cabinet of medicines and zero medical knowledge, he now makes himself more monstrous with each injection and terrifies the hapless "patients" who wander near his office.`}
                enllaç_boto="https://www.leagueoflegends.com/en-us/champions/dr-mundo/"
                enllaç_boto2="https://op.gg/es/lol/champions/dr-mundo/build"
                text_boto="INFO"
                text_boto2="BUILD"
              />
            </Grid>

            <Grid size={{ xs: 12, md: 6, lg: 3 }}>
              <Exercici1_4
                titol="Swain"
                imatge="https://wiki.leagueoflegends.com/en-us/images/thumb/Swain_FriedChickenKingSkin.jpg/340px-Swain_FriedChickenKingSkin.jpg"
                text_paragraf="Jericho Swain is the visionary ruler of Noxus, an expansionist nation that reveres only strength. Though he was cast down and crippled in the Ionian wars, his left arm severed, he seized control of the empire with ruthless determination… and a new, demonic hand. Now, Swain commands from the front lines, marching against a coming darkness that only he can see—in glimpses gathered by shadowy ravens from the corpses all around him. In a swirl of sacrifice and secrets, the greatest secret of all is that the true enemy lies within."
                enllaç_boto="https://www.leagueoflegends.com/en-us/champions/swain/"
                enllaç_boto2="https://op.gg/es/lol/champions/swain/build"
                text_boto="INFO"
                text_boto2="BUILD"
              />
            </Grid>

            <Grid size={{ xs: 12, md: 6, lg: 3 }}>
              <Exercici1_4
                titol="Mordekaiser"
                imatge="https://media.altchar.com/prod/images/gm_featured_image/7c55aa66fc64-prestige-money-miser-mordekaiser.webp"
                text_paragraf="Twice slain and thrice born, Mordekaiser is a brutal warlord from a foregone epoch who uses his necromantic sorcery to bind souls into an eternity of servitude. Few now remain who remember his earlier conquests, or know the true extent of his powers—but there are some ancient souls that do, and they fear the day when he may return to claim dominion over both the living and the dead."
                enllaç_boto="https://www.leagueoflegends.com/en-us/champions/mordekaiser/"
                enllaç_boto2="https://op.gg/es/lol/champions/mordekaiser/build"
                text_boto="INFO"
                text_boto2="BUILD"
              />
            </Grid>
          </Grid>);
      case "Exercici 1_4_2":
        return <Exercici1_4_2 />;
      default:
        return null;
    }
  }

  return (
    <div>
      <Menu canviarTasca={setTarea} />
      {getTascaComponent()}
    </div>
  );
}

export default App;