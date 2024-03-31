import {useState, useEffect} from 'react';
import axios from 'axios';
import {openWeatherApiKey} from '@env'


const useFetch = (query) => {
	
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false); 
  const [error, setError] = useState(null);

  const options = {
	method: 'GET',
	url: `https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${openWeatherApiKey}&units=imperial`,
	
  };
  const defaultRequest = {
	method: 'GET',
	url: `https://api.openweathermap.org/data/2.5/weather?q=Bronx,US&appid=${openWeatherApiKey}&units=imperial`,
	
  };

  const fetchData = async()=>{
	setIsLoading(true);
	try{
		const response = await axios.request(options);
		setData(response.data);
		setIsLoading(false);
	}catch(error){
		console.log(error);
		alert("There Is An Error");
		const response = await axios.request(defaultRequest);
		setData(response.data);
		setIsLoading(false);
	}finally{
		setIsLoading(false);
	}
  }

  useEffect(() => {
	fetchData(); 
  }, []);

  const refetch = () => {
	setIsLoading(true);
	fetchData(); 
  }

  return {data, isLoading, error, refetch};
}

export default useFetch;

