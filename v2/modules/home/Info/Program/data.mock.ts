export type ProgramType = Array<{
  time: string;
  title: string;
  guests: string[];
}>;

type DataType = Array<{
  day: string;
  program: ProgramType;
}>;

export const Data: DataType = [
  {
    day: "24/06",
    program: [
      {
        time: "11:30 - 12:00",
        title: "Giorno 1 evento 1 titolo abbastanza lungo per andare",
        guests: ["Ulivieri", "Di Loreto", "Melio"],
      },
      {
        time: "12:30 - 13:00",
        title: "Giorno 1 evento 2 titolo meno lungo ma un po'",
        guests: ["Ulivieri", "Di Loreto", "Melio"],
      },

      {
        time: "37:30 - 49:00",
        title: "Giorno 1 evento 2 titolo corto",
        guests: ["Ulivieri", "Di Loreto", "Melio"],
      },

      {
        time: "54:30 - 19:00",
        title: "Giornio 1 evento 2",
        guests: ["Ulivieri", "Di Loreto", "Melio"],
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
        guests: ["Ulivieri", "Di Loreto", "Melio"],
      },
      {
        time: "02:30 - 13:00",
        title: "Giorno 2 evento 2 titolo meno lungo ma un po'",
        guests: ["Ulivieri", "Di Loreto", "Melio"],
      },

      {
        time: "07:30 - 49:00",
        title: "Giorno 2 evento 2 titolo corto",
        guests: ["Ulivieri", "Di Loreto", "Melio"],
      },

      {
        time: "04:30 - 19:00",
        title: "Giornio 2 evento 2",
        guests: ["Ulivieri", "Di Loreto", "Melio"],
      },
    ],
  },

  {
    day: "24/06",
    program: [
      {
        time: "81:30 - 12:00",
        title:
          "Giorno 3 evento 1 titolo abbastanza lungo per andare qualche volta a capo",
        guests: ["Ulivieri", "Di Loreto", "Melio"],
      },
      {
        time: "82:30 - 13:00",
        title: "Giorno 3 evento 2 titolo meno lungo ma un po'",
        guests: ["Ulivieri", "Di Loreto", "Melio"],
      },

      {
        time: "87:30 - 49:00",
        title: "Giorno 3 evento 2 titolo corto",
        guests: ["Ulivieri", "Di Loreto", "Melio"],
      },

      {
        time: "84:30 - 19:00",
        title: "Giornio 3 evento 2",
        guests: ["Ulivieri", "Di Loreto", "Melio"],
      },
    ],
  },
];
