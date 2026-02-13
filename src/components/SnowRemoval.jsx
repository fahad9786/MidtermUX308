import {
    Text,
    View,
} from 'react-native';
import { snowRemoval } from "../snowRemoval.js";

// input snowfall in cm
export function SnowRemoval({ cm }) {
    //processing
    let equipment = snowRemoval(cm);
    // output the equipment
    return (
        <View>
            <Text>snowRemoval({cm}) returned {equipment}</Text>
        </View>
    );
}