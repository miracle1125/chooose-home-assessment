import React from "react";
import { render, screen } from "@testing-library/react";
import { Wrapper } from "./Wrapper";

describe("Wrapper Component", () => {
  it("renders children within a Container", () => {
    render(
      <Wrapper>
        <div>Test Content</div>
      </Wrapper>
    );

    const containerElement = screen.getByTestId("wrapper-container");
    expect(containerElement).toBeInTheDocument();

    const childElement = screen.getByText("Test Content");
    expect(childElement).toBeInTheDocument();
  });
});
