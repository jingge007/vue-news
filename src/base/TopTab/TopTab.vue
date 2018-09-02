<template>
  <div class="toutiao_toptab">
    <van-tabs v-model="active" swipeable @change="changeTab">
      <van-tab v-for="(item,index) in tabData" :title="item.title" :key="index">
        <span style="font-size:50px;">我就是内容+ {{index+1}}</span>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script type="text/ecmascript-6">
  import {mapMutations} from 'vuex'

  export default {
    data() {
      return {
        active: 0,
        tabData: [
          {title: '社会'},
          {title: '娱乐'},
          {title: '科技'},
          {title: '汽车'},
          {title: '体育'},
          {title: '财经'},
          {title: '军事'},
          {title: '国际'},
          {title: '健康'},
          {title: '正能量'}
        ],
        catData: [
          'news_society',
          'news_entertainment',
          'news_tech',
          'news_car',
          'news_sports',
          'news_finance',
          'news_military',
          'news_world',
          'news_health',
          'positive'
        ]
      }
    },
    methods: {
      ...mapMutations(['changeCatid']),
      changeTab(index, title) {
        let catId = this.catData[index]
        this.changeCatid(catId)
      }
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus" type="text/stylus" scoped>
  .toutiao_toptab >>> .van-tab {
    font-size 28px
    flex 0 0 16%
    &:active {
      background-color: initial
    }
  }

  .toutiao_toptab >>> .van-tab--active {
    font-size 30px
  }
</style>
