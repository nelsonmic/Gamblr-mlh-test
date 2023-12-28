import Animated, {
	AnimatedScrollViewProps,
	useSharedValue
} from "react-native-reanimated";
import { LayoutRectangle, Pressable } from "react-native";
import { memo, useEffect, useRef, useState } from "react";
import clsx from "clsx";
import { sleep } from "./utils";
import { TabIndicator } from "./TabIndicator";
import Text from "components/atoms/Text";
import { useAppearanceContext } from "providers/Appearance.provider";

type MenuLayout = {
	[key: number]: LayoutRectangle;
};

type MenuProps = AnimatedScrollViewProps & {
	activeIndex: number;
	animationDuration?: number;
	initialIndex?: number;
	menu: string[];
	onChange: (index: number) => void;
};

export const TabsMenu = memo(
	({
		activeIndex,
		animationDuration = 300,
		initialIndex = 1,
		menu,
		onChange,
		...rest
	}: MenuProps) => {
            const {isDarkMode} = useAppearanceContext();
		const _menuLayout = useRef<MenuLayout>({});
		const [isVisible, setIsVisible] = useState(false);
		const activeMenu = useSharedValue(0);

		useEffect(() => {
			if (isVisible) {
				if (initialIndex > menu.length) {
					throw new Error("initialIndex out of range");
				}
				activeMenu.value = initialIndex;
			} else {
				activeMenu.value = initialIndex;
			}
		}, [activeMenu, initialIndex, isVisible, menu.length]);

		return (
			<Animated.View
				{...rest}
                        className={clsx("flex-row justify-between space-x-2 items-center justify-center rounded-xl w-full h-16 p-[4]", {
                              "bg-black-100" : isDarkMode,
                              "border border-gray-100": !isDarkMode
                        })}
			>
                        {menu.map((m, index) => (
                                    <Pressable
                                          key={m}
                                          onLayout={(ev) => {
                                                _menuLayout.current[index] = {
                                                      ...ev.nativeEvent.layout
                                                };

                                                if (
                                                      Object.keys(_menuLayout.current).length === menu.length &&
                                                      !isVisible
                                                ) {
                                                      setIsVisible(true);
                                                }
                                          }}
                                          onPress={async () => {
                                                if (index === activeMenu.value) {
                                                      return;
                                                }
                                                activeMenu.value = index;
                                                onChange(index);
                                                await sleep(animationDuration / 2, true);
                                          }}
                                          className="flex-1 h-full py-2 items-center justify-center z-40"
                                    >
                                          <Text
                                                className={clsx(
                                                      "text-gray-700 capitalize text-sm font-interSemiBold text-center",
                                                      {
                                                            "text-white-100": activeIndex === index
                                                      }
                                                )}
                                          >
                                                {m}
                                          </Text>
                                    </Pressable>
				))}
				{isVisible ? (
					<TabIndicator
						activeMenu={activeMenu}
						animationDuration={animationDuration}
						menuLayout={_menuLayout.current}
					/>
				) : null}
			</Animated.View>
		);
	}
);
