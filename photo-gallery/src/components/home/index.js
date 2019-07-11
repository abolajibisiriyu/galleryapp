import React, { Component } from "react";

import Header from "../header";
import { Section } from "./elements";
import { ControlContainer } from "../elements";

class App extends Component {
  render() {
    return (
      <main>
        <Header />
        <Section>
          <ControlContainer type="content" />
        </Section>
      </main>
    );
  }
}

export default App;
