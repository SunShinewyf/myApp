/**
 * Copyright 2016 SunShine
 * 2017-1-1
 */
import * as React from 'react';
import { View, Text, Image, Dimensions, TextInput, TouchableOpacity, Navigator, StyleSheet } from 'react-native'
import * as CONST from '../../CONST'
import { HeaderBar } from '../../components'

export interface detailProps {
    navigator: Navigator,
    title?: string
}
export class DetailView extends React.Component<any, any>{
    constructor(props: any) {
        super(props)
    }
    render() {
        return (
            <View style={[styles.detailContainer, { width: CONST.WIDTH, height: CONST.HEIGHT }]}>
                <HeaderBar navigator={this.props.navigator} />
                <View style={styles.contentContainer}>
                    <Text style={styles.title}>{'马来西亚'}</Text>
                    <Text style={[styles.content]}>{'学费贵，三本的院校基本都是民办和其他高校的独立学院，有着高于其他一本二本院校的两倍甚至四倍等。比如一本院校的是5000，三本至少都是12000，14000，15000，20000等等。同样的本科，不一样的性质，不一样的价格。

　　二 、教育质量差，三本院校固有的特点吧😄，请不来有经验的老师，有经验的老师都往外逃，请不来学历高的老师，因为学校节约钱咯，而且为了节约教学成本，一个老师身兼多职，一个老师教好几课，有些还不是学这个专业的，真为我们自己担心。

　　三、免费劳动力，三本院校没有钱，节约成本，就让学生打扫教室（每天打扫两次）和环境卫生区域，每次体育馆使用之前的卫生还让各个学院的学生打扫。大学生难道就是这样在学校学习的吗？若是锻炼学生的话，拿一样就可以了呀，还那么多活。

　　四、就业问题，很多国企在招聘的公告上的招聘条件直接就标明了，招聘全日制重点本科以上学历，这说小了是对三本的歧视，说大了是对国家教育的否定。

　　同是本科，同是大学，为什么要存在三本呢，三本的费用那么高，为啥没有受到同样的老师教育呢，为啥没有同等的就业环境呢。

　　一火车上，软卧是985的，硬卧是211的，软座是二本的，硬座是三本的，站票是大专的，成教自考只能去厕所了。一点都没有错，生活本是如此，找工作如此，有人说出来后，本科就没有区别了，但校园招聘他们就甩了我们好几条街了，我们即使有博尔特的速度也不会在终点🏁前赶上或超过。

　　大四的我每天穿梭在招聘会的隧里，看不到光明，像狗一样的活，哪个大学有招聘，就往哪跑。还没出学校，就开始奔波了，让我都后怕了。身边985的同学早已签完，身为交流生的自己还在狂奔寻找落脚的地方。'}</Text>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    detailContainer: {
        backgroundColor: '#fff',
    },
    contentContainer: {
        margin: 10,
        borderWidth: 1,
    },
    title: {
        fontSize: 20,
    },
    content: {
        paddingTop: 20,
        textAlign: 'justify'
    }
})