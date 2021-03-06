import { Dimensions } from 'react-native'
import ExtraDimensions from 'react-native-extra-dimensions-android'

export const Android_Status_Bar_height = ExtraDimensions.getStatusBarHeight()

export const SCREEN_HEIGHT = () => IS_IOS ? Dimensions.get('window').height : ExtraDimensions.getRealWindowHeight() - ExtraDimensions.getSoftMenuBarHeight() - Android_Status_Bar_height()
export const SCREEN_WIDTH = () => Dimensions.get('window').width

export const BASE_URL = 'https://api.github.com'
