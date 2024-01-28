import { Button, ButtonGroup, Show } from "@chakra-ui/react";
import { Grid, GridItem } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";

function App() {
  return (
    <Grid
      templateAreas={{ base: `'nav main'`, lg: `'nav nav' 'aside main'` }}
      gap={3}
    >
      <GridItem area={"nav"} bg="blue.500">
        <NavBar />
      </GridItem>
      <Show above="lg">
        <GridItem area={"aside"} bg="blue.500">
          ASIDE
        </GridItem>
      </Show>
      <GridItem area={"main"} bg="blue.500">
        <GameGrid />
      </GridItem>
    </Grid>
  );
}

export default App;
