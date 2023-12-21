export const intlPhoneNumberFormat = (phone: string): string => {
      return `+234 ${phone.slice(1)}` || ""
}