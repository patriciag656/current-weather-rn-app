import React from 'react'
import {View, TextInput,TouchableOpacity,} from 'react-native'
import * as Icons from "react-native-heroicons/solid";
import { COLORS, SIZES, FONT } from '../../constants';
import { useRouter } from "expo-router";
import useFetch from '../../hook/useFetch';
import {useState} from 'react';
import {openWeatherApiKey} from '@env';
import axios from 'axios';
const Search = ({searchTerm, setSearchTerm, setUpdate}) => {
	const [searchResult, setSearchResult] = useState([]);
    const [searchLoader, setSearchLoader] = useState(false);
    const [searchError, setSearchError] = useState(null);
    const [page, setPage] = useState(1);

    const handleSearch = async () => {
        setSearchLoader(true);
        setSearchResult([])
		
        try {
            const options = {
                method: "GET",
                url: `https://api.openweathermap.org/data/2.5/weather?q=charlotte,US&appid=${openWeatherApiKey}&units=imperial`,
            };

            const response = await axios.request(options);
			console.log(response.data);
            setSearchResult(response.data);
        } catch (error) {
            setSearchError(error);
            console.log(error);
        } finally {
            setSearchLoader(false);
        }
    };

	

	return (
		
		// color='rgba(255, 255, 255, 0.5)'
			
			<View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 8}}>
				<View style={{backgroundColor: 'rgba(255, 255, 255, 0.1)', flex: 1, borderRadius: 100, height: 40, flexDirection: 'row', alignItems: 'center'}}>
				<TouchableOpacity style = {{marginLeft: 8,}} 
				onPress={() => {
					if(searchTerm){
					setUpdate(true);
					}
				}}>
				<Icons.MagnifyingGlassIcon color='white' size={30} />
				</TouchableOpacity>
				


				<TextInput 
					//  value={searchTerm}
				
					onChangeText={(text) => setSearchTerm(text)}
					placeholder='Search city'
					placeholderTextColor={'lightgray'}
					style = {{marginLeft: 15, fontSize: SIZES.large, color: COLORS.primary, width: 300}}
					selectionColor={"white"}
					// enablesReturnKeyAutomatically = {true}
					

				/>

	

				</View>
			
			
		
			
				{/* <TouchableOpacity style = {{marginLeft: SIZES.xSmall}}>
				<Icons.Bars3Icon color='white' size={40} />
				</TouchableOpacity> */}
			</View>
		
	)
  }
  
  export default Search