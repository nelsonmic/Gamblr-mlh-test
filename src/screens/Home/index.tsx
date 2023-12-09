import { Layout } from "components/Layouts";
import { View } from "components/atoms";
import { AnimatedLogo } from "components/molecules/AnimatedLogo";

export const HomeScreen = () => {

	return (
		<Layout
			className="flex-col h-full space-y-2 px-2 relative"
			edges={["left", "right", "top"]}
		>
			<View>
			</View>
			<AnimatedLogo width={30} height={30}/>
		</Layout>
	);
};
