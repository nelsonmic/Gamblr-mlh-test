import { Layout } from "components/Layouts";
import { View } from "components/atoms";
import { AnimatedLogo } from "components/molecules/AnimatedLogo";
import { hideGlobalModal, showGlobalModal } from "components/molecules/Modals/Modal";
import { ModalKeys } from "constants/enums";
import { useGetUserProfile } from "hooks/user/useGetUserProfile";
import { useEffect } from "react";

export const HomeScreen = () => {

const {isLoading, isError, isSuccess} = useGetUserProfile();

useEffect(() => {
  if(isLoading) {
    showGlobalModal({
      modalKey: ModalKeys.appLoader,
      Component: () => <AnimatedLogo width={30} height={30} />,
      hideClose: true
    })
  }

  if(isError || isSuccess){
    hideGlobalModal(ModalKeys.appLoader)
  }
}, [isLoading, isError, isSuccess])

	return (
		<Layout
			className="flex-col h-full space-y-2 px-2 relative"
			edges={["left", "right", "top"]}
		>
			<View>
			</View>
		</Layout>
	);
};
