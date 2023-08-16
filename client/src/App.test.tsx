import { render } from "@testing-library/react";
import { App } from "./App";

jest.mock("./apis", () => ({
  getData: jest.fn().mockResolvedValue([]), 
}));

describe("App component", () => {
  it("renders without crashing", () => {
    render(<App />);
  });

  it("renders the correct number of cards", async () => {
    const mockData = [
      { id: 1, title: "Card 1" },
      { id: 2, title: "Card 2" },
    ];
    const { getData } = require("./apis");
    getData.mockResolvedValue(mockData);

    const { findAllByTestId } = render(<App />);

    const cards = await findAllByTestId("card");
    expect(cards).toHaveLength(mockData.length);
  });
});
