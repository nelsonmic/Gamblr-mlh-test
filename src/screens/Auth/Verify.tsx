import { Layout } from "components/Layouts";
import { Button, View } from "components/atoms";
import { AuthScreenHeader } from "components/molecules/AuthScreensHeader";

export const VerifyScreen = () => {

	return (
		<Layout
			className="h-full space-y-2 px-4 pt-8"
			edges={["left", "right", "top", "bottom"]}
		>
                  <View className="flex-1 justify-between space-y-4">
                        <View className="flex-1">
                              <AuthScreenHeader 
                                    title= "Verify your account"
                                    description="We sent a 6-digit OTP to your email. Enter the code below"
                              />
                        </View>
                        <Button size="lg" >Verify</Button>
                  </View>
		</Layout>
	);
};
