import { TCard, TStarRating } from "./index";

describe("TCard Type", () => {
  it("correctly defines TCard properties", () => {
    const mockData: TCard = {
      id: 1,
      area: "Test Area",
      asset: "Test Asset",
      emissions_offset: "100",
      rating: 4,
    };

    expect(mockData.id).toBe(1);
    expect(mockData.area).toBe("Test Area");
    expect(mockData.asset).toBe("Test Asset");
    expect(mockData.emissions_offset).toBe("100");
    expect(mockData.rating).toBe(4);
  });
});

describe("TStarRating Type", () => {
  it("correctly defines TStarRating properties", () => {
    const mockStarRating: TStarRating = {
      rating: 3,
      setRating: jest.fn(),
      count: 5,
      size: 20,
    };

    expect(mockStarRating.rating).toBe(3);
    expect(mockStarRating.count).toBe(5);
    expect(mockStarRating.size).toBe(20);

    mockStarRating.setRating(4);
    expect(mockStarRating.setRating).toHaveBeenCalledWith(4);
  });

  it("correctly defines TStarRating properties without optional values", () => {
    const mockStarRating: TStarRating = {
      rating: 3,
      setRating: jest.fn(),
    };

    expect(mockStarRating.rating).toBe(3);

    mockStarRating.setRating(4);
    expect(mockStarRating.setRating).toHaveBeenCalledWith(4);
  });
});
