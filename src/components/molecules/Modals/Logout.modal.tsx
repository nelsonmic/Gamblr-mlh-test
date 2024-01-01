import { clsx } from "clsx"
import { Button, Text, View } from "components/atoms"
import { StorageKeys } from "constants/enums"
import { useEncryptedStorage } from "hooks/useEncryptedStorage"
import React, { useState } from "react"
import { hideGlobalModal } from "./Modal"
import { Screens } from "navigations/Screens"
import { useNavigateTo } from "hooks/useNavigateTo"
import { useAppearanceContext } from "providers/Appearance.provider"

const LogoutModal = () => {
      const[isLoading, setIsLoading] = useState<boolean>(false)
      const { reset } = useNavigateTo();
      const { isDarkMode } = useAppearanceContext();
	const { removeEncryptedItemFromStorage } = useEncryptedStorage();
      const onSubmit = () => {
		setIsLoading(true)
		removeEncryptedItemFromStorage(StorageKeys.CatToken)
		setTimeout(()=> {
			setIsLoading(false)
			hideGlobalModal("logout-modal")
			reset({
				index: 0,
				routes: [{name: Screens.SignInScreen}]
			})
		}, 4000)
	}
  return (
      <View className="px-8">
            <View>
                  <Text 
                        className={clsx("text-black-100 font-interMedium leading-5 tracking-tight text-lg text-center", {
                              "text-white-100" : isDarkMode
                        })}
                  >Are you sure you want to logout?</Text>
            </View>
            <Button 
                  size="lg"
                  className="mt-6"
                  onPress={onSubmit}
                  isLoading={isLoading}
            >Logout</Button>
      </View>
  )
}

export default LogoutModal