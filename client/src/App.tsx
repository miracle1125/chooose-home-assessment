import * as React from "react";
import {
  ChakraProvider,
  Box,
  Grid,
  theme,
} from "@chakra-ui/react";
import { ColorModeSwitcher } from "./ColorModeSwitcher";
import { Wrapper } from "./components/Wrapper";
import { getData } from "./apis";
import { TCard } from "./types";
import { Card } from "./components/Card";

export const App = () => {
  const [data, setData] = React.useState<TCard[]>([]);
  React.useEffect(() => {
    (async () => {
      const response = await getData();
      setData(response);
    })();
  }, []);

  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <Grid minH="100vh" p={3} gridTemplateRows={"50px 1fr"}>
          <ColorModeSwitcher justifySelf="flex-end" />
          <Wrapper>
            <Grid gap="20px" templateColumns={{base: 'repeat(1, 1fr)', md: 'repeat(3, 1fr)'}}>
              {data.map((card) => (
                <Card key={card.id} {...card}/>
              ))}
            </Grid>
          </Wrapper>
        </Grid>
      </Box>
    </ChakraProvider>
  );
};
