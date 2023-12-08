import { logger , consoleTransport } from "react-native-logs";
import { appConfig } from "../../configs/env.config"

const defaultConfig = {
  levels: {
    error: 1,
    info: 0,
  },
  severity: "debug",
  transport: consoleTransport,
  transportOptions: {
    colors: {
      info: "blueBright",
      error: "redBright",
    },
  },
  async: true,
  dateFormat: "time",
  printLevel: true,
  printDate: true,
  enabled: true,
};

export const debug = (type : "info" | "debug", ...args: any[]) => {
      const config = appConfig();
      let log = logger.createLogger(defaultConfig);

      if(config.env !== "DEV") return;

      if(type === "info"){
          log.info(...args)
      }else{
        log.error(...args)
      }
}