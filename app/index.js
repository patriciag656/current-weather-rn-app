import { StatusBar, View, Text, Image, TouchableOpacity, ScrollView, ImageBackground , SafeAreaView} from 'react-native';
import {Home, ScreenHeaderBtn, Search, login} from '../components'
import { images, icons, COLORS, FONT, SIZES } from '../constants'
import { Stack, useRouter } from "expo-router";
import useFetch from '../hook/useFetch';
import { StyleSheet } from 'react-native';
import {useEffect, useState} from 'react';

const index = () => {
	const [searchTerm, setSearchTerm] = useState('Denver,US');
	let {data: defaultData, isLoading, error, refetch} = useFetch(searchTerm);
	const [update, setUpdate] = useState(false);
	const handleSearch = () => {
		if(searchTerm !== 'Denver,US' || searchTerm !== ''){
		console.log("Changed Update Variable");
		refetch(); 
		}
	}

	useEffect(() => {
		handleSearch(); 
		setUpdate(false);
	  },[ update === true]);


  return (
	<ImageBackground
        source={images.snow}
		style = {styles.backgroundImage}
      >

	<SafeAreaView style={{ height: '100%', backgroundColor: 'rgba(0, 0, 0, 0.515)'}}>
	
	
	<Stack.Screen
        options={{
          headerShown: false,
        }}
      />
		<Search
		searchTerm = {searchTerm}
		setSearchTerm = {setSearchTerm}
		setUpdate = {setUpdate}
		/>

	  <ScrollView 
	//   style = {{backgroundColor: 'pink'}}
	  contentContainerStyle = {{ width: "100%", height: '100%'}}
	  horizontal = {true}
	  showsHorizontalScrollIndicator= {true}>
			<View style = {{ flex: 1, paddingHorizontal: SIZES.xLarge}}>
			<Home data = {defaultData} isLoading = {isLoading}
			error = {error}/>
		
			</View>
	
	  </ScrollView>
	</SafeAreaView>
	</ImageBackground>
	
  )
}

const styles = StyleSheet.create({
	backgroundImage: {
		
		resizeMode: 'cover', 
		justifyContent: 'center', 
	  },
  });
export default index