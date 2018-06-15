<template>
  <Page class="page">
    <ActionBar class="action-bar" title="Home"/>

    <StackLayout>
      <Label text="Latest articles" class="action-bar" />
      <!--<Button class="btn btn-primary" @tap="$router.push('/counter')">counter</Button>-->
      <!--<Button class="btn btn-primary" @tap="load()">{{test}}</Button>-->

      <ListView for="item in data" @itemTap="loadarticle">
        <v-template>
          <!-- Shows the list item label in the default color and stye. -->
          <Label :text="item.title"  class="title"/>
        </v-template>
      </ListView>

    </StackLayout>
  </Page>
</template>

<script>
  import SingleArticle from './SingleArticle'
    export default {
        data () {
            return {
                data:['a','b'],
                test:""
            };
        },
        created(){
            this.axios.get('https://api.guindytimes.com/allarticles?page=1')
                .then((response) => {
                    this.test="success";
                    this.data = response.data.data;
                }).catch((err)=>{
                console.log(err)
            })
        },
        methods: {
            loadarticle(event) {
                this.$navigateTo(SingleArticle,{
                    context: {
                        propsData: {
                            slug: event.item.slug,
                        }
                    }
                });
            }
        }
    };
</script>

<style>
  .grid{
    margin-left: 20%;
  }
  .title{
    font-size: 30px;
    overflow: hidden;
    word-wrap: break-word;
    object-fit: fill;
  }
</style>
