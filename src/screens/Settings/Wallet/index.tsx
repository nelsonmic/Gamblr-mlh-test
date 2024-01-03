import { Notification } from "components/Icons";
import { Layout } from "components/Layouts";
import { Text, View } from "components/atoms";
import { Avatar } from "components/molecules/Avatar";
import { TouchableOpacity } from "react-native";
import { useSelector } from "react-redux";
import { User } from "types/structs";

export const WalletScreen = () => {
	const user = useSelector((state: {user:{user: User }}) => state.user.user);
	return (
            <Layout
			className="flex-1 py-0 px-4"
			edges={["left", "right", "bottom"]}
            >
			<View className="flex-1">
				<View className="flex-row items-center justify-between">
					<Avatar 
						size="sm" 
						labelPosition="right"
						name={`${user.first_name} ${user.last_name}`} 
						imgSrc={require("../../../assets/images/onboarding-2.jpg")}
						tag={user.username}
					/>
					<TouchableOpacity className=" py-2 pl-4 pr-2 mb-8">
						<Notification isNotificationAvailable={false} width={26} height={26} />
					</TouchableOpacity>
				</View>
			</View>
		</Layout>
	);
};
