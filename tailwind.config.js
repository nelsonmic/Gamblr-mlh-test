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
          200: "#F1F5F9"
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
          400: "#555555"
        },
        red:{
          100: "#FF3922",
          'tint': "#AC3A301A"
        }
      }
    }
  },
  plugins: [],
}