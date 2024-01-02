import { Layout } from "components/Layouts";
import { Text, View } from "components/atoms";
import { PageHeader } from "components/organisms/PageHeader";

export const WagerScreen = () => {

	return (
            <Layout
			className="flex-1 py-0 px-4 pt-6"
			edges={["left", "right", "top"]}
            >
			<View>
				<PageHeader
				className="w-full" 
					title="Wager"
					description="Create your custom wager and invite friends or chatroom groups for a showdown!"
				/>
			</View>
		</Layout>
	);
};
