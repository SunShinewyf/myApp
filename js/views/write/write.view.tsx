/**
 * Copyright 2016 SunShine
 * 2016-12-21
 */
import * as React from 'react'
import { View, Text, Image, Dimensions } from 'react-native'

/**定义user page的prosp数据 */
export interface writeProps {
    number?: number,
    navigator?: {

    }
}
/**定义user page的state数据 */
export interface writeState {
    number?: number,
    navigator?: any
}
export class WriteView extends React.Component<any, any>{

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