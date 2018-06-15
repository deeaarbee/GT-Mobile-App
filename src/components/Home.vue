<template>
  <Page class="page">
    <ActionBar class="action-bar" title="Latest Articles"/>

    <WrapLayout>
      <ScrollView orientation="horizontal">
      <SegmentedBar  selectedIndex="0"  @selectedIndexChange="onSelectedIndexChange">
        <SegmentedBarItem title="All" />
        <SegmentedBarItem title="My Space" />
        <SegmentedBarItem title="Alumni" />
        <SegmentedBarItem title="Technology" />
        <SegmentedBarItem title="Tamil" />
        <SegmentedBarItem title="Opportunities" />
        <SegmentedBarItem title="News and Views" />
        <SegmentedBarItem title="Reviews" />
        <SegmentedBarItem title="Events" />
        <SegmentedBarItem title="Sports" />
      </SegmentedBar>
      </ScrollView>
      <ListView for="item in data" @itemTap="loadarticle">
        <v-template>
          <!-- Shows the list item label in the default color and stye. -->
          <Label :text="item.title"  class="title"/>
        </v-template>
      </ListView>
      <Button text="Previous" @tap="previous" class="button1"/>

      <Button text="Next" @tap="onButtonTap" class="button2"/>

    </WrapLayout>
  </Page>
</template>

<script>
  import SingleArticle from './SingleArticle'
    export default {
        data () {
            return {
                data:[],
                test:"",
                page:1,
                categories:[],
                selectedItem:"All",

            };
        },
        created(){
            this.axios.get('https://api.guindytimes.com/allarticles?page=1')
                .then((response) => {
                    this.test="success";
                    this.data = response.data.data;
                }).catch((err)=>{
                console.log(err)
            });

            this.axios.get('https://api.guindytimes.com/allcategories')
                .then((response) => {
                    this.test="success";
                    this.categories = response.data.data;
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
            },
            onButtonTap(){
                this.page += 1;
                this.axios.get('https://api.guindytimes.com/allarticles?page='+this.page)
                    .then((response) => {
                        this.test="success";
                        this.data = response.data.data ;
                    }).catch((err)=>{
                    console.log(err)
                })
            },
            previous(){
                this.page -= 1;
                this.axios.get('https://api.guindytimes.com/allarticles?page='+this.page)
                    .then((response) => {
                        this.test="success";
                        this.data = response.data.data ;
                    }).catch((err)=>{
                    console.log(err)
                })
            },
            onSelectedIndexChange(event){
                this.page = 1;
                console.log(event.SegmentedBarItem)
                this.axios.get('https://api.guindytimes.com/articles?category='+this.selectedItem+'&page='+this.page)
                    .then((response) => {
                        this.test="success";
                        this.data = response.data.data ;
                    }).catch((err)=>{
                    console.log(err)
                })
            }
            }
    };
</script>

<style>
  .title{
    font-size: 30px;

  }
  .button1{
    align-self: left;
    margin-left: 20px;
    margin-right: 500px;
  }
  .button2{
    align-self: right;
    margin-right: 5px;
    padding: 10%;
  }
</style>
