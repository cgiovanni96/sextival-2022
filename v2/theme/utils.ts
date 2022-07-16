export const media = (breakpoint: number, media = true, min = true) =>
  `${media ? "@media" : ""} (${min ? "min" : "max"}-width: ${breakpoint}px)`;
