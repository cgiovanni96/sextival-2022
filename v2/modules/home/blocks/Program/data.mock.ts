export type ProgramType = Array<{
  time: string;
  title: string;
  guests: Array<{ name: string; img?: string }>;
}>;

type DataType = Array<{
  day: string;
  program: ProgramType;
}>;

const guests = [
  { name: "Ulivieri", img: undefined },
  { name: "Di Loreto", img: undefined },
  { name: "Melio", img: undefined },
];

export const Data: DataType = [
  {
    day: "24/06",
    program: [
      {
        time: "11:30 - 12:00",
        title: "Giorno 1 evento 1 titolo abbastanza lungo per andare",
        guests,
      },
      {
        time: "12:30 - 13:00",
        title: "Giorno 1 evento 2 titolo meno lungo ma un po'",
        guests,
      },

      {
        time: "37:30 - 49:00",
        title: "Giorno 1 evento 2 titolo corto",
        guests,
      },

      {
        time: "54:30 - 19:00",
        title: "Giornio 1 evento 2",
        guests,
      },
    ],
  },

  {
    day: "25/06",
    program: [
      {
        time: "01:30 - 12:00",
        title:
          "Giorno 2 evento 1 titolo abbastanza lungo per andare qualche volta a capo",
        guests,
      },
      {
        time: "02:30 - 13:00",
        title: "Giorno 2 evento 2 titolo meno lungo ma un po'",
        guests,
      },

      {
        time: "07:30 - 49:00",
        title: "Giorno 2 evento 2 titolo corto",
        guests,
      },

      {
        time: "04:30 - 19:00",
        title: "Giornio 2 evento 2",
        guests,
      },
    ],
  },

  {
    day: "26/06",
    program: [
      {
        time: "81:30 - 12:00",
        title:
          "Giorno 3 evento 1 titolo abbastanza lungo per andare qualche volta a capo",
        guests,
      },
      {
        time: "82:30 - 13:00",
        title: "Giorno 3 evento 2 titolo meno lungo ma un po'",
        guests,
      },

      {
        time: "87:30 - 49:00",
        title: "Giorno 3 evento 2 titolo corto",
        guests,
      },

      {
        time: "84:30 - 19:00",
        title: "Giornio 3 evento 2",
        guests,
      },
    ],
  },
];
