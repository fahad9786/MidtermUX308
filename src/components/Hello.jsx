import {
  Text,
  View,
} from 'react-native';
import { hello } from '../hello.js';

// input of name you are greeting
export function Hello({name}){
    // processing
    let sHello = hello(name);

    // output jsx to be displayed
    return(
        <View>
            <Text>hello({name?`"${name}"`:""}) returned { sHello }</Text>
        </View>
    );
}