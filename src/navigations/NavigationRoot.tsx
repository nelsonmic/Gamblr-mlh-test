import React from 'react';
import { type RootStackParamList } from './types';
import { Screens } from './Screens';
import NavigationModals from './NavigationModals';
import { createBottomSheetNavigator } from './bottom-sheet';
// import { bottomSheetPreset, earningSheetPreset } from "./animations";

const RootStack = createBottomSheetNavigator<RootStackParamList>();

function NavigationRoot() {
  return (
    <RootStack.Navigator>
      <RootStack.Screen component={NavigationModals} name={Screens.ModalRoot} />
    </RootStack.Navigator>
  );
}

export default NavigationRoot;
