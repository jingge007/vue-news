<template>
  <div class="">
    23232323
  </div>
</template>

<script type="text/ecmascript-6">
  import {HeadlineNews} from 'api/HeadlineNews.js'

  export default {
    data() {
      return {
        headNews: []
      }
    },
    created() {
      this.getHeadlineNews();
    },
    methods: {
      getHeadlineNews: function () {
        let catid = 'news_entertainment';
        HeadlineNews(catid).then((res) => {
          console.log(res);
        })
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" type="text/stylus" scoped>

</style>
