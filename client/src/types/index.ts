export type TCard = {
  id: number;
  area: string;
  asset: string;
  emissions_offset: string;
  rating: number;
};

export type TStarRating = {
  rating: number;
  setRating: (num: number) => void;
  count?: number;
  size?: number;
};
