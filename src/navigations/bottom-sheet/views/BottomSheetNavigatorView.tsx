/* eslint-disable @typescript-eslint/explicit-function-return-type */
import {
  NavigationHelpersContext,
  StackActions,
  type StackNavigationState,
} from '@react-navigation/native';
import React, { useCallback, useMemo, useRef } from 'react';
import type {
  BottomSheetDescriptorMap,
  BottomSheetNavigationConfig,
  BottomSheetNavigationHelpers,
} from '../types';
import { type RootStackParamList } from '../../types';
import useForceUpdate from '../../../hooks/useForceUpdate';
import BottomSheetRoute from './BottomSheetRoute';

type Props = BottomSheetNavigationConfig & {
  descriptors: BottomSheetDescriptorMap;
  navigation: BottomSheetNavigationHelpers;
  state: StackNavigationState<RootStackParamList>;
};

function BottomSheetNavigatorView({
  descriptors,
  navigation,
  state,
}: Props) {
  // #region hooks
  const forceUpdate = useForceUpdate();
  // #endregion

  // #region variables
  const descriptorsCache = useRef<BottomSheetDescriptorMap>({});
  const [firstKey, ...restKeys] = useMemo(
    () => state.routes.map((route) => route.key),
    [state.routes],
  );

  restKeys.forEach((key) => {
    descriptorsCache.current[key] = descriptors[key];
  });

  Object.keys(descriptorsCache.current)
    .filter((key) => !restKeys.includes(key))
    .forEach((key) => {
      descriptorsCache.current[key].removing = true;
    });
  // #endregion

  // #region callbacks
  const handleOnDismiss = useCallback((key: string, removed: boolean) => {
    // eslint-disable-next-line @typescript-eslint/no-dynamic-delete
    delete descriptorsCache.current[key];

    if (removed) {
      forceUpdate();
    } else {
      navigation?.dispatch?.({
        ...StackActions.pop(),
        source: key,
        target: state.key,
      });
    }
  }, [forceUpdate, navigation, state.key]);

  // #endregion
  return (
    <NavigationHelpersContext.Provider value={navigation}>
      {descriptors[firstKey].render()}

      {Object.keys(descriptorsCache.current).map((key) => (
        <BottomSheetRoute
          key={key}
          descriptor={descriptorsCache.current[key]}
          onDismiss={handleOnDismiss}
          removing={descriptorsCache.current[key].removing}
          routeKey={key}
        />
      ))}
    </NavigationHelpersContext.Provider>
  );
}

export default BottomSheetNavigatorView;
