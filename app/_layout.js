import {Stack} from 'expo-router';
import { useCallback } from 'react';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen'

SplashScreen.preventAutoHideAsync(); 
const layout = () => {
	const [fontsLoaded] = useFonts({
		'MontserratExtraLight': require('../assets/fonts/Montserrat-ExtraLight.ttf'),
		'MontserratLight': require('../assets/fonts/Montserrat-Light.ttf'),
		'MontserratMedium': require('../assets/fonts/Montserrat-Medium.ttf'),
		'MontserratRegular': require('../assets/fonts/Montserrat-Regular.ttf'),
		'MontserratSemiBold': require('../assets/fonts/Montserrat-SemiBold.ttf'),
		'MontserratThin': require('../assets/fonts/Montserrat-Thin.ttf'),
		
	})

	const onLayoutRootView = useCallback(async () => {
		if(fontsLoaded){
			await SplashScreen.hideAsync(); 
		}
	}, [fontsLoaded])
	if(!fontsLoaded) return null; 
	
  return <Stack onLayout = {onLayoutRootView}/>;
}

export default layout