/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        cabinetGroteskBlack: ["CabinetGrotesk-Black"],
        cabinetGroteskBold: ["CabinetGrotesk-Bold"],
        cabinetGroteskExtrabold: ["CabinetGrotesk-Extrabold"],
        cabinetGroteskExtralight: ["CabinetGrotesk-Extralight"],
        cabinetGroteskLight: ["CabinetGrotesk-Light"],
        cabinetGroteskMedium: ["CabinetGrotesk-Medium"],
        cabinetGroteskRegular: ["CabinetGrotesk-Regular"],
        cabinetGroteskThin: ["CabinetGrotesk-Thin"],
        interBlack: ["Inter-Black"],
        interBold: ["Inter-Bold"],
        interExtraBold: ["Inter-ExtraBold"],
        interExtraLight: ["Inter-ExtraLight"],
        interLight: ["Inter-Light"],
        interMedium: ["Inter-Medium"],
        interRegular: ["Inter-Regular"],
        interSemiBold: ["Inter-SemiBold"],
        interThin: ["Inter-Thin"],
      },
      colors: {
        white:{
          100: "#ffffff",
          200: "#F1F5F9",
          300: "#F2F2F2",
          400: "#F9F9F9",
          tint: "#F9F9F90D"
        },
        black:{
          100: "#131313"
        },
        background:{
          light: "#ffffff",
          dark: "#131313",
          blue: "#001B33"
        },
        gray:{
          100: "#cccccc",
          200: "#515C6C",
          300: "#808080",
          400: "#555555",
          500: "#EDEDED",
          600: "#E9E9E9",
          700: "#AAAAAA",
          800: "#E0E0E0"
        },
        red:{
          100: "#B94545",
          200: "#FF392280",
          'tint': "#AC22221A"
        },
        green:{
          100: "#3E863E", 
          'tint': "#0096181A"
        },
        blue:{
          100: "#0853C2",
          'tint': "#0853C21A"
        },
        orange:{
          100: "#DA8420"
        },
        darkMode: {
          'input-bg': "#29292A"
        }
      }
    }
  },
  plugins: [],
}