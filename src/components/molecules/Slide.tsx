import { FC } from "react";
import { Image } from "react-native";
import View from "components/atoms/View";
import Text from "components/atoms/Text";
import { clsx } from "clsx";

type Props = {
	item: {
		description: string;
		image: string;
		title: string;
	};
};

export const Slide: FC<Props> = ({ item }) => (
	<View className="relative w-screen h-full">
            <View className="flex-1 w-full relative">
                  <Image
                        source={item.image}
                        style={{
                              resizeMode: "cover",
                              width: "100%",
                              height: "100%",
                              objectFit:"cover"
                        }}
                  />
                  <View className="absolute w-full h-full bg-[#001B3350] overflow-hidden">
                        <View className="w-full h-[30%] absolute bottom-0" 
                              style={{
                                    shadowColor: '#001B3350',
                                    shadowOffset: { width: 0, height: 1 },
                                    shadowOpacity:  1,
                                    shadowRadius: 30,
                                    elevation: 5,
                                    backgroundColor: 'rgba(0, 27, 51, .92)',
                                    zIndex: 100,
                              }}
                        ></View>
                  </View>
            </View>
            <View className={clsx("w-full absolute bottom-0 px-4 pb-4")}>
                  <Text className="text-white text-3xl leading-8 font-cabinetGroteskBold">
                        {item.title}
                  </Text>
                  <Text className="text-white text-sm mt-2 text-gray-100 leading-5 tracking-[0.28px] font-interRegular">
                        {item.description}
                   </Text>
             </View>
	</View>
);
