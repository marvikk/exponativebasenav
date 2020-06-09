import customCommonColor from "./customCommonColor";
import getTheme from "../native-base-theme/components";
import textTheme from "../native-base-theme/components/Text";
import buttonTheme from "../native-base-theme/components/Button";
import contentTheme from "../native-base-theme/components/Content";
import merge from "lodash/merge";

const theme = () => {
    const nbTheme = getTheme(customCommonColor);
    const overrides = {
        "NativeBase.Text": {
            ...textTheme(),
            ".link": {
                color: "yellow"
            },
        },
        "NativeBase.Content": {
            ...contentTheme(),
            ".contentStyle": {
                marginLeft: 15,
                marginRight: 15
            }
        },
        "NativeBase.Button": {
            ...buttonTheme(),
            ".pink": {
                'NativeBase.Text': {
                      color: 'pink',
                      paddingHorizontal: 0
                  }            }
        }
    }

    return merge(nbTheme, overrides);
};

export default theme;