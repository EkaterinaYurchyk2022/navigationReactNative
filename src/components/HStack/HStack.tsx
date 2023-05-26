import React, {ReactNode} from 'react';
import {ScrollView, View} from 'react-native';
import {PADDING, WIDTH} from 'src/constants/constants';

interface VStackPropsType{
    children: ReactNode
}

export const HStack=({children}:VStackPropsType)=>{

    let sumWIDTH = 0
    React.Children.forEach(children, (child, index)=>{
        if(!React.isValidElement(child)) return
        const {width} = child.props
        sumWIDTH += width
    })
    if((WIDTH - PADDING*2)<sumWIDTH) {
        return <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={{marginHorizontal: -PADDING}}
        >{children}</ScrollView>
    }
    return (
        <View style={{flexDirection:'row', justifyContent:'space-between'}}/>

    )
}