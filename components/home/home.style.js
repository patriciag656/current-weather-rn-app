import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES } from '../../constants';


const styles = StyleSheet.create({
  container: {
    width: "100%",
	
	height: '100%',
	alignItems: 'flex-start',
  },
  cityName: {
    fontFamily: FONT.medium,
    fontSize: 35,
    color: COLORS.primary,
  },
  date: {
    fontFamily: FONT.regular,
    fontSize: SIZES.large,
    color: COLORS.primary,
    marginTop: 12,
  },
  degree: {
    fontFamily: FONT.regular,
    fontSize: SIZES.xxxxLarge,
    color: COLORS.primary,
    marginTop: 180,
  },
  description: {
	fontFamily: FONT.light,
    fontSize: SIZES.xLarge,
    color: COLORS.primary,
	textTransform: 'capitalize',
  },
  precipitation: {
	fontFamily: FONT.light,
    fontSize: SIZES.medium,
    color: COLORS.primary,
	marginTop: SIZES.xSmall, 
  },
  dataWrapper: {
	backgroundColor: '#000',
	flexDirection: 'row',

	justifyContent: 'space-between',
	
	height: '100%',

	
  },
  statistics: {
	// backgroundColor: "red",
	alignItems: 'flex-start',
	justifyContent: 'center',
	// height: '100%',

  },
  separatorView: {
	borderTopColor: '#FFF',
	borderTopWidth: StyleSheet.hairlineWidth, 
	width: "100%",
	marginVertical: SIZES.xLarge,
  },
  


});

export default styles;
