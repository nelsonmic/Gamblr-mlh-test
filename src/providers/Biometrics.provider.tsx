import { StorageKeys } from "constants/enums";
import { useEncryptedStorage } from "hooks/useEncryptedStorage";
import { ReactNode, createContext, useContext, useEffect, useState } from "react"
import FingerprintScanner from 'react-native-fingerprint-scanner';

type BiometricsProviderProps = {
      children: ReactNode;
}

type BiometricsContextType = {
      isBiometricsEnabled: boolean;
      toggleBiometrics: () => void;
      isBiometricsAvailable: boolean;
      handleBiometryAuth: (onSuccess: any) => void;
}

const BiometricsContext = createContext<BiometricsContextType>({
      isBiometricsEnabled: false,
      toggleBiometrics: () => {},
      isBiometricsAvailable: false,
      handleBiometryAuth: () => {}
})

export const BiometricsProvider = ({children}: BiometricsProviderProps) => {
      const [isBiometricsEnabled, setIsBiometricsEnabled] = useState<boolean>(false);
      const [biometryType, setBiometryType] = useState<string | null | undefined>(null);
      const [isBiometricsAvailable, setIsBiometricsAvailable] = useState<boolean>(false);

      const {setEncryptItemToStorage, getEncryptItemFromStorage} = useEncryptedStorage()

      const message = `Scan your ${biometryType === "Face ID" ? "Face" : "Fingerprint"} to continue`;

      useEffect(() => {
            (async () => {
                  try{
                        const storedIsBiometricsEnabled = await getEncryptItemFromStorage(StorageKeys.IsBiometricsEnabled)
                        setIsBiometricsEnabled(storedIsBiometricsEnabled !== null ? JSON.parse(storedIsBiometricsEnabled): false )
                  }catch(error){}
            })()
      }, [getEncryptItemFromStorage])

      useEffect(()=>{
            FingerprintScanner.isSensorAvailable()
            .then((type) => {
                  setBiometryType(type)
                  setIsBiometricsAvailable(true)
            }).catch(() =>{
                  setIsBiometricsAvailable(false)
            })
      }, [])

      const toggleBiometrics = () => {
            setIsBiometricsEnabled((prevIsBiometricsEnabled) => {
                  const newValue = !prevIsBiometricsEnabled
                  setEncryptItemToStorage(StorageKeys.IsBiometricsEnabled, newValue)
                  return newValue;
            });
      }

      const handleBiometryAuth = async (onSuccess: () => void) => {
            if(isBiometricsAvailable){
                  FingerprintScanner.authenticate({
                        description: message
                  })
                  .then(() => {
                        onSuccess();
                  })
                  .catch(() => {})
            }
      }

      return (
            <BiometricsContext.Provider value={{ isBiometricsEnabled, toggleBiometrics, handleBiometryAuth, isBiometricsAvailable}}>
                  { children }
            </BiometricsContext.Provider>
      )
}

export const useBiometricsContext = () => {
      const context = useContext(BiometricsContext);

      if(!context){
            throw new Error("useBiometricsContext must be use withtin a BiometricsProvider.");
      }

      return context;
}