import { useColorScheme } from "nativewind";

const themeData = [
      {
      name: "light",
      theme: {
                  colors: {
                        white:{
                              100: "#d40000",
                              200: "#F1F5F9"
                        },
                        black:{
                              100: "#d40000"
                        },
                        background:{
                              light: "#d40000",
                              dark: "#131313",
                              blue: "#001B33"
                        },
                        gray:{
                              100: "#cccccc",
                              200: "#515C6C",
                              300: "#808080",
                              400: "#555555",
                              500: "#EDEDED"
                        },
                        red:{
                              100: "#FF3922",
                              'tint': "#AC3A301A"
                        }
                  }
            }
      },
{
      name: "dark"
}
];

const theme = () => {
      const { colorScheme  } = useColorScheme();

      const index = themeData.findIndex(
		(theme) => theme.name === colorScheme
	);

      return themeData[index].theme
}

export default theme;