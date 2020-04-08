import { Dimensions, Insets, Platform } from 'react-native'
import ExtraDimensions from 'react-native-extra-dimensions-android'


export const IS_IOS = () => Platform.os === 'ios'

export const Android_Status_Bar_height = ExtraDimensions.getStatusBarHeight()

export const SCREEN_HEIGHT = () => IS_IOS ? Dimensions.get('window').height : ExtraDimensions.getRealWindowHeight() - ExtraDimensions.getSoftMenuBarHeight() - Android_Status_Bar_height()
export const SCREEN_WIDTH = () => Dimensions.get('window').width