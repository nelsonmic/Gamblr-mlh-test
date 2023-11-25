import { Layout } from "components/Layouts";
import { Text } from "components/atoms";

export const HomeScreen = () => {

	return (
		<Layout
			className="flex-col h-full space-y-2 px-2"
			edges={["left", "right", "top"]}
		>
			<Text>Home</Text>
		</Layout>
	);
};
