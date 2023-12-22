import clsx from "clsx";
import { Logo } from "components/Icons";
import { Layout } from "components/Layouts";
import { Text, View } from "components/atoms";
import { Banner } from "components/molecules/Banner";

export const TermsScreen = () => {

	return (
            <Layout
			className="h-full space-y-2 px-4 pt-4"
			edges={["left", "right", "bottom"]}
            >
			<View className={clsx("flex-1")}>
				<Banner text="Welcome to Gamblr - Play Fair!" />
			</View>
		</Layout>
	);
};
