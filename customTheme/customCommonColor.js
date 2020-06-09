import commonColor from '../native-base-theme/variables/material'
import { Platform } from 'react-native'
const platform = Platform.OS;
const customCommonColor = {
    ...commonColor,
    toolbarDefaultBg: 'pink',
    brandPrimary: platform === "ios" ? "#FF000" : "#FF000",
    get btnPrimaryBg(){
        return this.brandPrimary
    },
}

export default customCommonColor;