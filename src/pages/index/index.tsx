import { View, Text, Image } from '@tarojs/components'
import { useLoad } from '@tarojs/taro'
import './index.less'
import waterBg from "../../../src/img/water.png"

export default function Index() {

  useLoad(() => {
    console.log('Page loaded.')
  })

  return (
    <View className='index'>
      <Text>Hello world!
        <Image src={waterBg} mode='widthFix' />
        <Image src='../../assets/img/water.png' mode='widthFix' />
      </Text>
    </View>
  )
}
