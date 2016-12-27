/**
 * Copyright 2016 SunShine
 * 2016-12-21
 */
import * as React from 'react'
import { View, Text, Image, Dimensions } from 'react-native'

/**定义user page的prosp数据 */
export interface spotsProps {
    number?: number,
    navigator?: {

    }
}
/**定义user page的state数据 */
export interface spotsState {
    number?: number,
    navigator?: any
}
export class SpotsView extends React.Component<spotsProps, spotsState>{

    constructor(props: any) {
        super(props)
    }
    render() {
        return (
            <View>
                <Text>this is the user page</Text>
            </View>
        )
    }
}