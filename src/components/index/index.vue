<template>
  <div class="toutiao">
    <!--搜索框区域-->
    <div class="search_box">
      <div class="search_input">
        <van-icon name="search" class="search_icon" size="18px"/>
        <span class="search_txt">抖音小甜甜 | 华为mate20 | 热水器那种好</span>
      </div>
    </div>
    <!--tab菜单栏-->
    <toptab></toptab>
  </div>
</template>

<script type="text/ecmascript-6">
  import {HeadlineNews} from 'api/HeadlineNews.js'
  import toptab from 'base/TopTab/TopTab.vue'
  import {mapState} from 'vuex'

  export default {
    data() {
      return {
        headNews: [],
      }
    },
    created() {
      this.getHeadlineNews();
    },
    methods: {
      getHeadlineNews: function () {
        let catid = this.catid;
        HeadlineNews(catid).then((res) => {
          console.log(res);
        })
      }
    },
    computed: {
      ...mapState(['catid'])
    },
    watch: {
      catid() {
        if (this.catid) {
          this.getHeadlineNews()
        }
      }
    },
    components: {
      toptab
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" type="text/stylus" scoped>
  .toutiao {
    width: 100%
    height: 100%
    background-color: #fff
    .search_box {
      background-color: #ED4040
      padding 15px 30px
      .search_input {
        width: 100%
        height: 65px
        line-height: 65px
        background-color: #fff
        font-size 24px
        border-radius 8px
        display: flex
        align-items center
        .search_icon {
          margin 0 15px 0 25px
        }
        .search_txt {
          font-size 28px
          color #666
        }
      }
    }
  }
</style>
