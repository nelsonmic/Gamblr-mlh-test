import clsx from "clsx";
import { Layout } from "components/Layouts";
import { Button, Pressable, Text, View } from "components/atoms";
import { AuthScreenHeader } from "components/molecules/AuthScreensHeader";
import { BackHandler } from "components/molecules/BackHandler";
import useCountDown from "hooks/useCountdown";

export const VerifyScreen = () => {
      const { hms, restart, ended } = useCountDown({
            autoStart: true,
            delay: 10000,
      });
	return (
		<Layout
			className="h-full space-y-2 px-4 pt-8"
			edges={["left", "right", "top", "bottom"]}
		>
                  <BackHandler />
                  <View className="flex-1 justify-between space-y-4">
                        <View className="flex-1">
                              <AuthScreenHeader 
                                    title= "Verify your account"
                                    description="We sent a 6-digit OTP to your email. Enter the code below"
                              />
                              <View className="mt-6">
                                    <View className="flex-row space-x-[4]">
                                          <Pressable
                                          onPress={()=> {
                                                if(ended) restart()
                                          }}
                                          >
                                                <Text className={clsx("font-interMedium text-xs",
                                                      {
                                                            "text-gray-100" : !ended
                                                      }
                                                )}>Resend</Text>
                                          </Pressable>
                                          <Text className="text-red-100 font-interMedium text-xs">
                                                {ended? null : `${hms[1]}:${hms[2]}`}
                                          </Text>
                                    </View>
                              </View>
                        </View>
                        <Button size="lg" >Verify</Button>
                  </View>
		</Layout>
	);
};
