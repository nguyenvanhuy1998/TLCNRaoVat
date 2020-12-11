import {
    Platform,
    Dimensions,
    StatusBar
  } from 'react-native';
  import { getStatusBarHeight, isIphoneX } from 'react-native-iphone-x-helper';
  
  const { width, height } = Dimensions.get('window')
  
  export const WIDTH = width < height ? width : height
  export const HEIGHT = width > height ? width : height
  export const CELL_SPACING = 2;
  export const ROW = WIDTH + CELL_SPACING;
  export const LIST_COLUMNS = 1// Math.floor(ROW / 150) > 4 ? 4 : Math.floor(ROW / 150);
  export const CELL_WIDTH = ROW / LIST_COLUMNS;
  
  export const IS_IOS = Platform.OS === 'ios';
  
  export const SAFE_PADDING = getStatusBarHeight();
  
  export const SAFE_AREA = getStatusBarHeight(true);
  
  export const SAFE_FOOTER = isIphoneX() ? getStatusBarHeight(true) : 0;
  
  export const statusBarTranslucent = IS_IOS || Platform.OS == 'android' && Platform.Version >= 19;
  
  export const BASE_HEADER_HEIGHT = 58 + (IS_IOS ? SAFE_PADDING : statusBarTranslucent ? SAFE_PADDING : 0);
  
  export const SAFE_CONTENT_HEIGHT = (BASE_HEADER_HEIGHT + SAFE_PADDING);
  
  
  export const COLOR_PRIMARY = '#126DFC';
  export const COLOR_ACCENT = '#ffab00';
  export const COLOR_ERROR = 'red';
  
  export const PREF_SETTING = 'SETTING';
  
  export const BASE_SHADOW = {
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    marginHorizontal: 15,
  }
  
  