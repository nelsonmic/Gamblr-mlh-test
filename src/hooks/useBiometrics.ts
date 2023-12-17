import { useEffect, useState } from "react"
import FingerprintScanner from 'react-native-fingerprint-scanner';
import { useToast } from "react-native-toast-notifications";

//TODO: add error message title to enum for here and logout in settings
export const useBiometrics = () => {
      const toast = useToast();
      const [biometryType, setBiometryType] = useState<string | null | undefined>(null)

      useEffect(()=>{
            FingerprintScanner.isSensorAvailable()
            .then((type) => {
                  setBiometryType(type)
            }).catch(() =>{})
      }, [])

      const message = `Scan your ${biometryType === "Face ID" ? "Face" : "Fingerprint"} to continue`

      const showAuthenticationDialog = (onBiometryAuthComplete: any) => {
            if(biometryType !== null && biometryType !== undefined){
                  FingerprintScanner.authenticate({
                        description: message
                  })
                  .then(() => {
                        onBiometryAuthComplete();
                  })
                  .catch(() => {})
            }
      }

      return {
            handleBiometryAuth: showAuthenticationDialog
      }

}