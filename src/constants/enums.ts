export enum EnvModes {
  DEV = 'development',
  PROD = 'production',
}

export enum StorageKeys {
  CatToken = "cat_token",
  WelcomeUser = "welcome_user",
  IsDarkMode = "is_darkmode",
  IsBiometricsEnabled = "is_biometrics_enabled"
}

export enum ModalKeys {
  appLoader = "app-loader",
  LogoutModal = "logout-modal"

}

export enum QueryKeys {
  checkUsername = "check-username",
  getUserProfile = "get-user-profile"
}

export enum ToastNotificationTitles {
  SomethingWentWrong = "Something went wrong!",
  RequestSuccess = "Request Successful"
}

export enum ErrorMessages {
  VerifyAccount = "User account not verified!",
  PinExists = "Pin already set!"
}
