export type Film = {
  id: number,
  title: string,
  description: string,
  poster: string,
  cover: string,
  src: string,
  genres: string[],
  release: number,
  duration: string,
  rating: number,
  numberRating: number,
  director: string,
  actors: string[],
  reviews: number[]
};
export type Films = Film[];
