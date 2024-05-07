'use client';
import {
  Dispatch,
  SetStateAction,
  createContext,
  useState,
  useContext,
} from 'react';
export type ContextType = {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  id: string;
  setId: Dispatch<SetStateAction<string>>;
};
export const popupContext = createContext<ContextType | undefined>(undefined);

export const PopupContextProvider = ({
  children,
}: React.PropsWithChildren<{}>) => {
  const [isOpen, setIsOpen] = useState(false);
  const [id, setId] = useState<string>('');
  return (
    <popupContext.Provider value={{ isOpen, setIsOpen, id, setId }}>
      {children}
    </popupContext.Provider>
  );
};
export function useDialogContext() {
  const context = useContext(popupContext);
  if (!context) {
    throw new Error('useDialogContext must be used within an ContextProvider');
  }
  return context;
}
