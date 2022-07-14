import create from "zustand";

type Status = "idle" | "scrolling";

type ScrollStore = {
  element: number;
  status: Status;

  setElement: (element: number) => void;
  setStatus: (status: Status) => void;
};

const useScrollStore = create<ScrollStore>((set) => ({
  element: 1,
  status: "idle",
  setElement: (element: number) => set({ element }),
  setStatus: (status: Status) => set({ status }),
}));

export default useScrollStore;
