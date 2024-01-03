import { Notification } from "components/Icons";
import { Layout } from "components/Layouts";
import { Text, View } from "components/atoms";
import { AnimatedLogo } from "components/molecules/AnimatedLogo";
import { hideGlobalModal, showGlobalModal } from "components/molecules/Modals/Modal";
import { PageHeader } from "components/organisms/PageHeader";
import { ModalKeys } from "constants/enums";
import { useGetUserProfile } from "hooks/user/useGetUserProfile";
import { useEffect } from "react";
import { ScrollView, TouchableOpacity } from "react-native";
import { useSelector } from "react-redux";
import { User } from "types/structs";

export const HomeScreen = () => {
const user = useSelector((state: {user:{user: User }}) => state.user.user);
// const {isLoading, isError, isSuccess} = useGetUserProfile();

// useEffect(() => {
//   if(isLoading) {
//     showGlobalModal({
//       modalKey: ModalKeys.appLoader,
//       Component: () => <AnimatedLogo width={30} height={30} />,
//       hideClose: true
//     })
//   }

//   if(isError || isSuccess){
//     hideGlobalModal(ModalKeys.appLoader)
//   }
// }, [isLoading, isError, isSuccess])

	return (
            <Layout
			className="flex-1 py-0 px-4 pt-8"
			edges={["left", "right", "top"]}
            >
			<View className="flex-1 space-y-10">
				<View className="flex-row items-center justify-between">
					<PageHeader
						className="flex-1"
						title={`Hello, ${user.first_name}!`}
						description="Challenge that your guy, chop him money!"
					/>
					<TouchableOpacity className=" py-2 pl-4 pr-2">
						<Notification isNotificationAvailable={false} width={26} height={26} />
					</TouchableOpacity>
				</View>
				<View className="flex-1">
					<ScrollView
						showsHorizontalScrollIndicator={false}
						showsVerticalScrollIndicator={false}
					>
						<View>
							<Text className="text-gray-300 text-sm">Tournaments</Text>
						</View>
					</ScrollView>
				</View>
			</View>
		</Layout>
	);
};
