<template>
    <Page class="page">

        <ActionBar class="action-bar" :title="data.title">
            <NavigationButton text="Go Back" android.systemIcon="ic_menu_back" @tap="$router.push('/home')"/>
        </ActionBar>


        <StackLayout class="hello-world">
            <ScrollView orientation="vertical">
            <HtmlView :html="data.content" />
            </ScrollView>
            <!--<Label class="body" textWrap=true v-html="data.content" />-->
        </StackLayout>

    </Page>
</template>

<script>
    export default {
        name: "single-article",
        props:['slug'],
        data () {
            return {
                test: false,
                data: {},
            };
        },
        created(){
            this.axios.get('https://api.guindytimes.com/singlearticle?slug='+this.slug+'&scount=4')
                .then((response) => {
                    this.test="success";
                    this.data = response.data.data.article;
                }).catch((err)=>{
                console.log(err)
            })
        }
    }
</script>

<style scoped>

</style>
