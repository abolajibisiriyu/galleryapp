import React from "react";

import { Container } from "./elements";
import { ControlContainer, Button } from "../elements";

const Header = () => (
  <Container>
    <ControlContainer type="header">
      <Button>Upload</Button>
    </ControlContainer>
  </Container>
);

export default Header;
