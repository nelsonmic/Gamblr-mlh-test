import { EnvModes } from "constants/enums";
import Config from "react-native-config";


export const appConfig = (mode = "development"): EnvValues => {
  switch (mode) {
    case EnvModes.DEV:
      return {
        env: 'DEV',
        BASE_URL: Config.BASE_URL_DEV || '',
        X_GAMBLR_KEY: Config.X_GAMBLR_KEY || ''
      };
    case EnvModes.PROD: {
      return {
        env: 'PROD',
        BASE_URL: Config.BASE_URL_PROD || '',
        X_GAMBLR_KEY: Config.X_GAMBLR_KEY || ''
      };
    }
    default: {
      return {
        env: 'DEV',
        BASE_URL: '',
        X_GAMBLR_KEY: ''
      };
    }
  }
};

type EnvValues = {
  env: keyof typeof EnvModes;
  BASE_URL: string;
  X_GAMBLR_KEY: string;
};

export default appConfig();
