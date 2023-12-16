import { StorageKeys } from "constants/enums";
import { useEncryptedStorage } from "hooks/useEncryptedStorage";
import { useColorScheme } from "nativewind";
import { Dispatch, ReactNode, createContext, useContext, useEffect, useState } from "react";

type AppearanceContextType = {
  isDarkMode: boolean,
  toggleColorScheme: () => void,
  setIsDarkMode: Dispatch<React.SetStateAction<boolean>>
  colors: {
    light: string,
    dark: string,
    bg: string,
    lightGray: string,
    darkGray: string
  }
}
const AppearanceContext = createContext<AppearanceContextType>({
  isDarkMode: true, 
  toggleColorScheme: () => {},
  setIsDarkMode: ()=> {},
  colors: {
    light: "",
    dark: "",
    bg: "",
    lightGray: "",
    darkGray: ""
  }
});

type AppearanceProviderProps = {
  children: ReactNode;
}
const colors = {
  light: "#ffffff",
  dark: "#131313",
  bg: "#29292A", 
  lightGray: "#f2f2f2",
  darkGray: "#808080"
};
export const AppearanceProvider = ({ children }: AppearanceProviderProps) => {
  const { colorScheme, toggleColorScheme } = useColorScheme();
  const { getEncryptItemFromStorage } = useEncryptedStorage();

  const [isDarkMode, setIsDarkMode] = useState<boolean>(colorScheme === "dark");

  useEffect(() => {
    (async () => {
      try {
        const storedIsDarkMode = await getEncryptItemFromStorage(StorageKeys.IsDarkMode);
        setIsDarkMode(storedIsDarkMode !== null ? JSON.parse(storedIsDarkMode) : colorScheme === "dark");
      } catch (error) {
        setIsDarkMode(colorScheme === "dark");
      }
    })();
  }, [getEncryptItemFromStorage]);

  return (
    <AppearanceContext.Provider value={{ isDarkMode, setIsDarkMode, toggleColorScheme, colors }}>
      {children}
    </AppearanceContext.Provider>
  );
};

export const useAppearanceContext = () => {
  const context = useContext(AppearanceContext);

  if (!context) {
    throw new Error("useAuthContext must be used within an AuthProvider.");
  }

  return context;
};
