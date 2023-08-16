import { Container } from "@chakra-ui/react";
import * as React from "react";

export const Wrapper: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <Container maxW="container.xl" p={3} data-testid='wrapper-container'>
      {children}
    </Container>
  );
};
