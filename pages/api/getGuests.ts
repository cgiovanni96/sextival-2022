import { client } from "./client";

export type Guest = {
  id: number;
  name: string;
  description: string;
  img: string;
};

export type Guests = Array<Guest>;

export const getGuests = async (): Promise<Guests | null> => {
  try {
    const guests = await client
      .from<Guest>("guests")
      .select("id, name, description, img");

    return guests.data;
  } catch {
    return null;
  }
};
