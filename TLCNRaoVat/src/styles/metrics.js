import { Platform, Dimensions } from 'react-native';
import { getStatusBarHeight, isIphoneX } from 'react-native-iphone-x-helper';
const { width, height } = Dimensions.get("screen")
export default {
	padding: 15,
	iPhoneX: isIphoneX(),
	safePadding: getStatusBarHeight(true),
	statusBarHeight: getStatusBarHeight(),
	headerRightPadding: 10,
	tabBarHeight: 75 + (this.iPhoneX ? this.safePadding : 0),
	...Platform.select({
		ios: { headerHeight: 64, headerPadding: 20 },
		android: { headerHeight: 44, headerPadding: 0 },
	}),
	width,
	height
};