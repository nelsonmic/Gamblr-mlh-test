import { useColorScheme } from "nativewind";
import { ReactNode, createContext, useContext } from "react";

type AppearanceContextType = {
      isDarkMode: boolean,
      toggleColorScheme: () => void,
      colors: {
            light: string,
            dark: string,
            bg: string
      }
}
const AppearanceContext = createContext<AppearanceContextType>({
      isDarkMode: true, 
      toggleColorScheme: () => {},
      colors: {
            light: "",
            dark: "",
            bg: ""
      }
})

type AppearanceProviderProps = {
      children: ReactNode;
}
const colors = {
      light: "#ffffff",
      dark: "#131313",
      bg: "#29292A"
}
export const AppearanceProvider = ({ children }: AppearanceProviderProps) => {
       const { colorScheme, toggleColorScheme } = useColorScheme();

       const isDarkMode = colorScheme === "dark";

       return (
            <AppearanceContext.Provider value={{ isDarkMode, toggleColorScheme, colors }}>
                  {children}
            </AppearanceContext.Provider>
       )
}

export const useAppearanceContext = () => {
      const context = useContext(AppearanceContext);

      	if (!context) {
		throw new Error("useAuthContext must be used within an AuthProvider.");
	}

	return context;
}