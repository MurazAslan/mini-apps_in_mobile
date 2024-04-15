import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import {
  SafeAreaProvider,
  SafeAreaView,
  initialWindowMetrics,
} from "react-native-safe-area-context";
import { Home } from "./src/screens/Home";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { colors } from "./src/theme/colors";
import {  MusicScreen } from "screens/Music";

// SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    "Nunito-Regular": require("./assets/fonts/Nunito-Regular.ttf"),
    "Nunito-SemiBold": require("./assets/fonts/Nunito-SemiBold.ttf"),
  });
  const onLayoutView = async () => {
    if (fontsLoaded || fontError) {
     return await SplashScreen.hideAsync();
    }

    if (!fontsLoaded || !fontError) return null

    
  };
  return (
    <SafeAreaProvider initialMetrics={initialWindowMetrics}
     onLayout={onLayoutView} style={styles.container}>
      <StatusBar style="light"/>
      <SafeAreaView style={styles.safe}>
       <Home />
       {/* <MusicScreen /> */}
        
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.darkBack,
    paddingHorizontal: 16
  },
  
  safe: {
    flex: 1
  }
});
