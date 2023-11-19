/* eslint-disable @typescript-eslint/strict-boolean-expressions */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import BottomSheet, {
  BottomSheetBackdrop,
  type BottomSheetBackdropProps,
} from '@gorhom/bottom-sheet';
import React, {
  useCallback, useEffect, useMemo, useRef,
} from 'react';
import { Keyboard, View, type ViewStyle } from 'react-native';
import {
  CONTAINER_HEIGHT,
  DEFAULT_BACKDROP_COLOR,
  DEFAULT_BACKDROP_OPACITY,
  DEFAULT_HEIGHT,
} from '../constants';
import { BottomSheetNavigatorContext } from '../contexts/internal';
import type { BottomSheetDescriptor } from '../types';
import { android } from '../../../constants';
import isKeyboardOpen from '../../../handlers/helpers/isKeyboardOpen';

interface Props {
  descriptor: BottomSheetDescriptor;
  onDismiss: (key: string, removed: boolean) => void;
  removing?: boolean;
  routeKey: string;
}

function BottomSheetRoute({
  descriptor: { navigation, options, render },
  onDismiss,
  removing = false,
  routeKey,
}: Props) {
  // #region extract options
  const {
    backdropColor = DEFAULT_BACKDROP_COLOR,
    backdropOpacity = DEFAULT_BACKDROP_OPACITY,
    enableContentPanningGesture,
    enableHandlePanningGesture,
    height = DEFAULT_HEIGHT,
    index = 0,
    offsetY = (android) ? 20 : 3,
    snapPoints = ['100%'],
  } = options || {};
  // #endregion

  // #region refs
  const ref = useRef<BottomSheet>(null);

  const removingRef = useRef(false);
  removingRef.current = removing;

  // const
  // #endregion

  // #region styles
  const screenContainerStyle: ViewStyle = useMemo(
    () => ({
      bottom: 0,
      height,
      position: 'absolute',
      width: '100%',
    }),
    [height],
  );

  const backdropStyle = useMemo(
    () => ({
      backgroundColor: backdropColor,
    }),
    [backdropColor],
  );
  // #endregion

  // #region context methods
  const handleSettingSnapPoints = useCallback(
    (_snapPoints: Array<string | number>) => {
      navigation.setOptions({ snapPoints: _snapPoints });
    },
    [],
  );

  const handleSettingEnableContentPanningGesture = useCallback(
    (value: boolean) => {
      navigation.setOptions({ enableContentPanningGesture: value });
    },
    [],
  );

  const handleSettingEnableHandlePanningGesture = useCallback(
    (value: boolean) => {
      navigation.setOptions({ enableHandlePanningGesture: value });
    },
    [],
  );

  const contextVariables = useMemo(
    () => ({
      setEnableContentPanningGesture: handleSettingEnableContentPanningGesture,
      setEnableHandlePanningGesture: handleSettingEnableHandlePanningGesture,
      setSnapPoints: handleSettingSnapPoints,
    }),
    [
      handleSettingEnableContentPanningGesture,
      handleSettingEnableHandlePanningGesture,
      handleSettingSnapPoints,
    ],
  );
  // #endregion

  // #region callbacks
  const handleOnClose = useCallback(() => {
    onDismiss(routeKey, removingRef.current);
  }, []);
  // #endregion

  // #region effects
  useEffect(() => {
    if (removing && ref.current) {
      // close keyboard before closing the modal
      if (isKeyboardOpen() && android) {
        Keyboard.dismiss();
      }
      ref.current.close();
    }
  }, [removing]);

  // #endregion

  // #region renders
  const renderBackdropComponent = useCallback(
    (props: BottomSheetBackdropProps) => (
      <BottomSheetBackdrop
        appearsOnIndex={0}
        disappearsOnIndex={-1}
        opacity={backdropOpacity}
        style={backdropStyle}
        {...props}
      />
    ),
    [backdropOpacity, backdropStyle],
  );

  return (
    <BottomSheetNavigatorContext.Provider value={contextVariables}>
      <BottomSheet
        ref={ref}
        activeOffsetY={[-offsetY, offsetY]}
        animateOnMount
        backdropComponent={renderBackdropComponent}
        backgroundComponent={null}
        containerHeight={CONTAINER_HEIGHT}
        enableContentPanningGesture={enableContentPanningGesture}
        enableHandlePanningGesture={enableHandlePanningGesture}
        enablePanDownToClose
        handleComponent={null}
        index={index}
        onClose={handleOnClose}
        simultaneousHandlers={[]}
        snapPoints={snapPoints}
        waitFor={[]}
      >
        <View style={screenContainerStyle}>{render()}</View>
      </BottomSheet>
    </BottomSheetNavigatorContext.Provider>
  );
}

export default BottomSheetRoute;
