import React from 'react';
import { StatusBar } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import NavigationContainer from 'navigations/NavigationContainer';
import NavigationRoot from 'navigations/NavigationRoot';
import { AppearanceProvider } from 'providers/Appearance.provider';

function App(): JSX.Element {
  return (
    <SafeAreaProvider>
      <StatusBar animated barStyle="default" />
      <GestureHandlerRootView style={{ flex: 1 }}>
        <NavigationContainer>
          <AppearanceProvider>
            <NavigationRoot />
          </AppearanceProvider>
        </NavigationContainer>
      </GestureHandlerRootView>
    </SafeAreaProvider>
  );
}

export default App;
