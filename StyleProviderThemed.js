// import React from 'react';
// import { StyleProvider } from 'native-base';
// import getTheme from './native-base-theme/components';
// import material from './native-base-theme/variables/material';
// import * as Font from 'expo-font';

// export class StyleProviderThemed extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { loading: true };
//   }

//   async componentWillMount() {
//     await Font.loadAsync({
//                   ...Ionicons.font,
//                   'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf'),
//                 });
//     this.setState({ loading: false });
//   }

//   render() {
//     if (this.state.loading) {
//       return <Expo.AppLoading />;
//     }
//     return (
//         <StyleProvider style={getTheme(material)}>{this.props.children}</StyleProvider>
//     );
//   }
// }


import * as React from 'react';
import { SplashScreen } from 'expo';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import { 
  StyleProvider,
 } from 'native-base';
import getTheme from './customTheme';
import material from './customTheme/customCommonColor';


export function StyleProviderThemed(props) {
    return (
        <StyleProvider style={getTheme(material)}>
            {props.children}
        </StyleProvider>

    );
}