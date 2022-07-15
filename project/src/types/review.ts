export type Review = {
  filmId: number,
  id: number,
  text: string,
  userRating: number,
  name: string,
  date: string
};

export type Reviews = Review[];
