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
      }
    }
  },
  plugins: [],
}