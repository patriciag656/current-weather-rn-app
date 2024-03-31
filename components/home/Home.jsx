import { View, Text, TouchableOpacity,ActivityIndicator } from 'react-native'
import React, {useState, useEffect} from 'react'
import styles from './home.style'
import * as Progress from 'react-native-progress';
import { COLORS, SIZES, FONT } from '../../constants';
import { FontAwesome, FontAwesome5, Fontisto, AntDesign, MaterialIcons, Feather } from '@expo/vector-icons';
import useFetch from '../../hook/useFetch';
import {Link} from 'expo-router';
const Home = ({data, isLoading, error}) => {
	  {/* <Text style={styles.cityName}>{data['name']}</Text> */}
	//   console.log(weatherData);
	// const {data, isLoading, error} = useFetch('Bronx,US');
	// const {data, isLoading, error} = useFetch('2000,AU');
	
	const [currentDateTime, setCurrentDateTime] = useState(new Date());
	useEffect(() => {
		
		// const intervalId = setInterval(() => {
		//   setCurrentDateTime(new Date());
		// }, 1000);
	  
		// return () => clearInterval(intervalId);
	  }, []);
	//   console.log(data);
	//   console.log(data.weather[0].icon);
	const displayIcon = () => {
		switch (data.weather[0].icon) {
			case "01d":
			case "01n":
				return (<FontAwesome name="circle" size={24} color="white" />)
			case "02d":
				return(<FontAwesome5 name="cloud-sun" size={24} color="white" />)
			case "02n":
				return (<FontAwesome5 name="cloud-moon" size={24} color="white"/>)
			case "03d":
			case "03n":
				return (<FontAwesome5 name="cloud" size={24} color="white" />)
			case "04d":
			case "04n":
				return (<Fontisto name="cloudy-gusts" size={24} color="white" />)
			case "09d":
			case "09n":
				return (<FontAwesome5 name="cloud-rain" size={24} color="white" />)
			case "10d":
			case "10n":
				return (<FontAwesome5 name="cloud-showers-heavy" size={24} color="white" />)
			case "11d":
			case "11n":
				return (<Feather name="cloud-lightning" size={24} color="white" />)
			case "13d":
			case "13n":
				return (<FontAwesome5 name="snowflake" size={24} color="white" />)
			case "50d":
			case "50n":
				return (<MaterialIcons name="waves" size={24} color="white" />)
			default:
				return null;
		}
	}	
  return (


<View>
		{isLoading? (<ActivityIndicator size="large" color={COLORS.primary}/>)
		: error ? (<Text>Something went wrong</Text>)
		: data.length===0 ? (<Text>No Data</Text>)
		: (
			<View style={styles.container}>
				
				
			<View style = {{flexDirection: 'row',  width: '25%', justifyContent: 'space-between', marginBottom: SIZES.xxLarge, marginTop: SIZES.xxLarge}}>
			<FontAwesome name="circle" size={10} color="#FFF" />
			<FontAwesome name="circle" size={10} color='rgba(255, 255, 255, 0.5)' />
			
			<FontAwesome name="circle" size={10} color='rgba(255, 255, 255, 0.5)' />
			<FontAwesome name="circle" size={10} color='rgba(255, 255, 255, 0.5)' />
			</View>
			
			
				<Text style={styles.cityName}>{data.name}</Text>
				<Text style={styles.date}>{currentDateTime.toLocaleString('en-US',
				{ weekday: 'long', year: 'numeric', month: 'short', day: 'numeric', })}</Text>
				<Text style={styles.degree}>{Math.round(data.main['temp'])}°</Text>
			
				<View style = {{flexDirection: 'row', alignItems: 'center', gap: 8}}>
					{displayIcon() }
					<Text style={styles.description}> {data.weather[0].description}</Text>
					
				</View>
				{data.snow? (<Text style={styles.precipitation}>Last Hour Snow: {data.snow['1h']}mm </Text>)
				:data.rain?  (<Text style={styles.precipitation}>Last Hour Rain: {data.rain['1h']}mm </Text>)
				:null}





				<View style = {styles.separatorView} ></View>
				<View style = {{flex: 1, width: '100%',  alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row'}}>
					<TouchableOpacity style={styles.statistics}>
						<Text style = {{fontFamily: FONT.regular, marginBottom: SIZES.xSmall,color: COLORS.primary, fontSize:SIZES.medium}}>Wind</Text>
						<Text style= {{fontFamily: FONT.medium,color: COLORS.primary, fontSize: SIZES.xxLarge}}>{Math.round(data.wind['speed'])}</Text>
						<Text style = {{fontFamily: FONT.regular,color: COLORS.primary, fontSize: SIZES.medium}}>mph</Text>
						
						<Progress.Bar style= {{marginTop: SIZES.medium}} progress={(data.wind['speed'] / 20 ) } width={80} borderWidth = {0 } unfilledColor = {COLORS.secondary} borderColor = {COLORS.secondary}  color = {COLORS.green}
						height = {3}/>
					</TouchableOpacity>
					<TouchableOpacity  style={styles.statistics}>
					
						<Text  style = {{marginBottom: SIZES.xSmall, color: COLORS.primary, fontSize:SIZES.medium, fontFamily: FONT.regular, }}>Visibility</Text>
						<Text style= {{fontFamily: FONT.medium,color: COLORS.primary, fontSize: SIZES.xxLarge}}>{Math.round(data.visibility / 1609)}{data.visibility === 10000? "+":null}</Text>
						<Text style = {{fontFamily: FONT.regular,color: COLORS.primary, fontSize: SIZES.medium}}>miles</Text>
						
						<Progress.Bar style= {{marginTop: SIZES.medium}} progress={Math.round(6.21371/(data.visibility / 1609))} width={80} borderWidth = {0 } unfilledColor = {COLORS.secondary} borderColor = {COLORS.secondary}  color = {COLORS.tertiary}
						height = {3}/>
					</TouchableOpacity>
					<TouchableOpacity  style={styles.statistics}>
						<Text  style = {{marginBottom: SIZES.xSmall, color: COLORS.primary, fontSize:SIZES.medium, fontFamily: FONT.regular, }}>Humidity</Text>
						<Text style= {{fontFamily: FONT.medium, color: COLORS.primary, fontSize: SIZES.xxLarge}}>{data.main['humidity']}</Text>
						<Text style = {{fontFamily: FONT.regular,color: COLORS.primary, fontSize: SIZES.medium}}>%</Text>
						<Progress.Bar  style= {{marginTop: SIZES.medium}} progress={data.main['humidity']/100} width={80} borderWidth = {0 } unfilledColor = {COLORS.secondary} borderColor = {COLORS.secondary}  color = {'red'}
						height = {3}/>
					</TouchableOpacity>
	  			</View> 
			</View>
			
		)}


	 
	
	</View>
	
	
	
	

  )
  
}

export default Home