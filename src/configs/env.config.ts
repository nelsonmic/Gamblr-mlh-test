import { EnvModes } from "constants/enums";


export const appConfig = (): EnvValues => {
  switch (process.env.NODE_ENV) {
    case EnvModes.DEV:
      return {
        env: 'DEV',
        BASE_URL: process.env.BASE_URL || '',
      };
    case EnvModes.PROD: {
      return {
        env: 'PROD',
        BASE_URL: process.env.BASE_URL || '',
      };
    }
    default: {
      return {
        env: 'DEV',
        BASE_URL: ''
      };
    }
  }
};

type EnvValues = {
  env: keyof typeof EnvModes;
  BASE_URL: string;
};

// export default appConfig();
