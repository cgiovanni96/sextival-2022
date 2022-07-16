export const media = (breakpoint: number, media = true) =>
  `${media ? "@media" : ""} (min-width: ${breakpoint}px)`;
