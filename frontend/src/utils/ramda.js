import * as R from "ramda";

export const byRating = R.groupBy(function (item) {
  const average_rating_rounded = item.average_rating_rounded;
  return average_rating_rounded < 1
    ? "F"
    : average_rating_rounded < 2
      ? "D"
      : average_rating_rounded < 3
        ? "C"
        : average_rating_rounded < 4
          ? "B"
          : "A";
});
