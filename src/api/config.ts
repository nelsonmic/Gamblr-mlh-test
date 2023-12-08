import { appConfig } from "configs/env.config"

export const AUTH_HEADER_CONFIG = {
      accept: "application/json",
      "Content-Type": "application/json",
      "x-gamblr-key": appConfig().X_GAMBLR_KEY,
}

export const UNAUTH_HEADER_CONFIG = {
      accept: "application/json",
      "Content-Type": "application/json",
}