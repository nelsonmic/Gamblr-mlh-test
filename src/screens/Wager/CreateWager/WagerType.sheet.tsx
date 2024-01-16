import { Multiplayer, Oneonone } from "components/Icons";
import { Pressable, Text, View } from "components/atoms";
import { BottomSheet } from "components/molecules/BottomSheet/BottomSheet"
import { BottomSheetOptions } from "components/molecules/BottomSheetOptions";
import { SvgBackground } from "components/molecules/SvgBackground";
import { FC, ReactElement } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export const WagerTypeSheet = () => {
      const inset = useSafeAreaInsets();
      const sizes = {
            width: 24,
            height: 24
      }

      const DATA = [
            {
                  title: "One on One",
                  description: "Face off against a single opponent.",
                  leftElement: <Oneonone {...sizes} />,
            },
            {
                  title: "Multiplayer",
                  description: "Team up for a group challenge, conquer together or play against each other.",
                  leftElement: <Multiplayer {...sizes} />,
            }
      ]

      return (
            <BottomSheet
                  bottom
                  style={{
                  marginTop: inset.top,
                  paddingBottom: inset.bottom
                  }}
            >
                  <BottomSheet.Handle />
                  <BottomSheet.Header title="Wager type" />
                  <BottomSheet.Content className="w-full">
                        <View>
                              <BottomSheetOptions data={{
                                    title: "One on One",
                                    description: "Face off against a single opponent.",
                                    leftElement: <SvgBackground>
                                          <Oneonone width={24} height={24} />
                                    </SvgBackground>,
                              }} />
                        </View>
                  </BottomSheet.Content>
            </BottomSheet>
      )
};