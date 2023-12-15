import { SignInUserPayload } from "types/structs";
import DeviceInfo from "react-native-device-info";
import { useState } from "react";

export const useGetDeviceInfo = (): Pick<SignInUserPayload, "device"> => {
  const [deviceName, setDeviceName] = useState("")

const getDeviceName = async () => {
  try {
    let [name] = await Promise.all([DeviceInfo.getDeviceName()]);
    setDeviceName(name);
  } catch (error) {
    setDeviceName("Unknown");
  }
};


  let deviceId = DeviceInfo.getDeviceId();
  let os = DeviceInfo.getSystemVersion();
  let version = DeviceInfo.getReadableVersion();

  getDeviceName()

  return {
    device: {
      device_name: deviceName || "",
      device_id: deviceId || "",
      version: version || "",
      platform: "mobile",
      os: os || "",
    },
  };
};
