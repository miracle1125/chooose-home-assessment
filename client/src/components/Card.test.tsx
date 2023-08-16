import React from "react";
import { render, screen } from "@testing-library/react";
import { Card } from "./Card";

const mockCardData = {
  id: 1,
  area: "Test Area",
  asset: "Test Asset",
  emissions_offset: 'Test offset',
  rating: 4,
};

test("renders card with correct data", () => {
  render(<Card {...mockCardData} />);
  
  const areaElement = screen.getByTestId(mockCardData.area);
  expect(areaElement).toBeInTheDocument();

  const assetElement = screen.getByTestId(mockCardData.asset);
  expect(assetElement).toBeInTheDocument();

  const emissionElement = screen.getByTestId(mockCardData.emissions_offset);
  expect(emissionElement).toBeInTheDocument();

  const ratingElement = screen.getByText("Trip rating");
  expect(ratingElement).toBeInTheDocument();
});
