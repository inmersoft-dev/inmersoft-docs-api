// sito components
import SitoContainer from "sito-container";

// @mui components
import { List, ListItem, Link, Typography } from "@mui/material";

function Home() {
  return (
    <SitoContainer flexDirection="column" sx={{ padding: "1rem" }}>
      <Typography variant="h3">Lista de APIs</Typography>
      <List>
        <ListItem>
          <Link href="/#/trinidad">Descubre Trinidad</Link>
        </ListItem>
      </List>
    </SitoContainer>
  );
}

export default Home;
