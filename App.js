import  React from 'react';
import { WebView } from 'react-native-webview';

const App = () => {
  
    return <WebView source={{ uri: 'https://radiosuissearabe.com/' }} style={{ marginTop: 20 }} />;
  
}

export default App;

