import clsx from "clsx";
import { Email2Fa, Phone2Fa } from "components/Icons";
import { Pressable, Text, View } from "components/atoms";
import { BottomSheet } from "components/molecules/BottomSheet/BottomSheet"
import { useNavigateTo } from "hooks/useNavigateTo";
import { Screens } from "navigations/Screens";
import { useAppearanceContext } from "providers/Appearance.provider";
import { FC, ReactElement, useState } from "react";
import { KeyboardAvoidingView, Platform } from "react-native"
import Animated, { useAnimatedStyle, useSharedValue, withTiming, Easing } from "react-native-reanimated";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export const ChooseTwoFaSheet = () => {
      const sizes = {
            width: 50,
            height: 50
      }
      const data = [
            {
                  icon: <Phone2Fa {...sizes}/>,
                  title: "SMS",
                  description: "Receive an OTP verification code to authorize login access to your account via SMS at:",
                  contact: "+234 9126377451",
                  reroute: Screens.TwoFaOtp
            },
            {
                  icon: <Email2Fa {...sizes}/>,
                  title: "Email",
                  description: "Receive an OTP verification code to authorize login access to your account via Email at:",
                  contact: "thenelsonmichael@gmail.com",
                  reroute: Screens.TwoFaOtp
            }
      ]
      const [selected, setSelected] = useState<string>("")
      const inset = useSafeAreaInsets();
      return (
            <KeyboardAvoidingView
			behavior={Platform.OS === "ios" ? "padding" : "height"}
			keyboardVerticalOffset={10}
			style={{
				flex: 1
			}}
		>
			<BottomSheet
				bottom
				className="bg-white-100"
				style={{
					marginTop: inset.top,
					paddingBottom: inset.bottom
				}}
			>
				<BottomSheet.Handle />
                        <BottomSheet.Header className="items-start">
					<Text className="mb-6 ml-2 text-black-100 text-2xl font-cabinetGroteskBold leading-tight">
						Receive code via
					</Text>
				</BottomSheet.Header>
                        <BottomSheet.Content className="w-full">
                              <View className="space-y-4">
                                    {
                                          data.map((item, indx)=>{
                                                return (
                                                      <OtpOption 
                                                            key={indx} 
                                                            data={item} 
                                                            isSelected={!!(item.title === selected)}
                                                            onSelect={()=>{
                                                                setSelected(item.title)  
                                                            }}
                                                      />
                                                )
                                          })
                                    }
                              </View>
                        </BottomSheet.Content>
                  </BottomSheet>
            </KeyboardAvoidingView>
      )
}

type OtpOptionProp = {
      data: {
            icon: ReactElement;
            title: string;
            description: string;
            contact: string;
            reroute: Screens
      },
      isSelected: boolean;
      onSelect: () => void;
}

const OtpOption: FC<OtpOptionProp> = ({ data, isSelected, onSelect}) => {
      const {icon, title, description, contact, reroute} = data;
      const { goTo } = useNavigateTo();

  const color = useSharedValue("#ffffff");

  const animatedStyle = useAnimatedStyle(() => ({
    borderColor: color.value,
  }));

  const runAnimation = () => {
    color.value = withTiming("#131313", { duration: 300, easing: Easing.linear }, () => {
    });
  };

const handleSelect = () => {
    onSelect();
    runAnimation();

    setTimeout(() => {
      if (title === "SMS") {
        goTo(reroute, {
          data: {
            contact: contact,
          },
        });
      } else {
        goTo(reroute, {
          data: {
            contact: contact,
          },
        });
      }
    }, 1000);
  };

  return (
    <Animated.View
      style={[
        {
          elevation: 4,
          shadowColor: "#131313",
          shadowOffset: { width: 0, height: 1 },
          shadowOpacity: 0.1,
          shadowRadius: 6,
        },
        animatedStyle,
      ]}
    >
      <Pressable
        className={clsx("px-6 py-4 border border-white-100 bg-white-100 flex-row items-center space-x-4 mb-6 rounded-2xl", {
          "border-black-100": isSelected,
        })}
        onPress={handleSelect}
      >
        {icon}
        <View className="flex-1">
          <Text className={clsx("font-interBold text-black-100 text-sm mb-[4]")}>{title}</Text>
          <Text className="text-xs font-interRegular">
            {description}
            <Text className="font-interBold text-xs">{contact}</Text>
          </Text>
        </View>
      </Pressable>
    </Animated.View>
  );
};