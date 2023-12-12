import { logger , consoleTransport } from "react-native-logs";
import { appConfig } from "../../configs/env.config"

const defaultConfig = {
  levels: {
    debugger: 1,
    info: 0,
  },
  severity: "debug",
  transport: consoleTransport,
  transportOptions: {
    colors: {
      info: "greenBright",
      debugger: "red",
    },
    extensionColors: {
      'LETTING-YOU-KNOW': "magenta",
      'ERROR-DETECTED': "redBright",
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
      let infoLog = log.extend("LETTING-YOU-KNOW");
      let debuggerLog = log.extend("ERROR-DETECTED")

      if(config.env !== "DEV") return;

      if(type === "info"){
          infoLog.info(...args)
      }
      if(type === "debug"){
        debuggerLog.debugger(...args)
      }
}