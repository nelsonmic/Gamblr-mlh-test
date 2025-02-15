import { ChangePin, Privacy, Referral, Scan, SettingsProfile, Support, Terms, TwoFa, Wallet } from "components/Icons";
import { Layout } from "components/Layouts";
import { Text, View, Button } from "components/atoms";
import LogoutModal from "components/molecules/Modals/Logout.modal";
import { showGlobalModal } from "components/molecules/Modals/Modal";
import { SectionListItem } from "components/molecules/SectionListItem";
import { PageHeader } from "components/organisms/PageHeader";
import { useNavigateTo } from "hooks/useNavigateTo";
import { Screens } from "navigations/Screens";
import { ScrollView } from "react-native";

export const SettingsScreen = () => {
	const { goTo } = useNavigateTo()
	const sizes = {
		width : 24,
		height: 24
	}
	 const sections = [
		{
			data: [
			{
				title: "Profile",
				rightElement: "",
				onPress: () => goTo(Screens.Profile),
				leftElement: <SettingsProfile {...sizes} />
			},
			{
				title: "Wallet",
				rightElement: "",
				onPress: () => goTo(Screens.Wallet),
				leftElement: <Wallet {...sizes} />
			},
			{
				title: "Referrals",
				rightElement: "",
				onPress: () => goTo(Screens.Referrals),
				leftElement: <Referral {...sizes}/>
			}
			], 
			title: "Account"
		}, 
		{
			data: [
				{
					title: "Change Password",
					rightElement: "",
					onPress: () => goTo(Screens.ChangePassword),
					leftElement: <ChangePin {...sizes} />
				},
				{
					title: "Change Pin",
					rightElement: "",
					onPress: () => goTo(Screens.ChangePin),
					leftElement: <ChangePin {...sizes} />
				},
				{
					title: "Two-Factor Authentication",
					rightElement: "",
					onPress: () => goTo(Screens.TwoFaHomeScreen),
					leftElement: <TwoFa {...sizes} />
				},
				{
					title: "Enable Biometrics",
					rightElement: <></>,
					onPress: () => {},
					leftElement: <Scan {...sizes} />
				}
			], 
			title: "Security"
		},
		{
			data: [
				{
					title: "Privacy Policy",
					rightElement: "",
					onPress: () => goTo(Screens.PrivacyPolicy),
					leftElement: <Privacy {...sizes} />
				},
				{
					title: "Terms and Conditions",
					rightElement: "",
					onPress: () => goTo(Screens.Terms),
					leftElement: <Terms {...sizes} />
				},
				{
					title: "Support",
					rightElement: "",
					onPress: () => goTo(Screens.Support),
					leftElement: <Support {...sizes} />
				},
			], 
			title: "Other"
		},
		{
			data: [], 
			title: "Dark Mode"
		}
	]

	return (
		<Layout
			className="h-full space-y-2 px-4 pt-14"
			edges={["left", "right", "top", "bottom"]}
		>
			<View className="flex-1 justify-between space-y-4">
				<PageHeader title="Settings" />
				<ScrollView
				      showsVerticalScrollIndicator={false}
                              showsHorizontalScrollIndicator={false}
				>
					{sections.map((item, index) => (
						<SectionListItem key={index} data={item} />
					))}
				</ScrollView>
				
				<View className="items-center">
					<Button 
						className={"w-[120px] bg-red-tint rounded-lg"}
						onPress={() => {
							showGlobalModal({
								modalKey: 'logout-modal',
								Component: () => <LogoutModal />,
								hideClose: false
							})
						}}
					>
						<Text className="text-red-100 text-sm">Log Out</Text>
					</Button>
				</View>
			</View>
		</Layout>
	);
};
