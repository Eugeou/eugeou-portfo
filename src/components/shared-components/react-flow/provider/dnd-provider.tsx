import {
  createContext,
  useContext,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";
import { ImageItemType } from "@/types";

type DnDContextType = [
  ImageItemType | null,
  Dispatch<SetStateAction<ImageItemType | null>>,
];

const DnDContext = createContext<DnDContextType>([null, () => {}]);

interface DnDProviderProps {
  children: ReactNode;
}

export const DnDProvider = ({ children }: DnDProviderProps) => {
  const [item, setItem] = useState<ImageItemType | null>(null);

  return (
    <DnDContext.Provider value={[item, setItem]}>
      {children}
    </DnDContext.Provider>
  );
};

export default DnDContext;

export const useDnD = (): DnDContextType => {
  return useContext(DnDContext);
};
