import {Component, Vue, Watch  } from "vue-property-decorator";

@Component({
    name:'layouts'
})

export default class layouts extends Vue{
    @Watch('route')
    onrouter(){
        console.log('111111')
    }
    created(){
        console.log(window.location)
        const path = window.location.href
        if(this.$store.getters.user.userName ){
            if(path.indexOf('login')>-1 || path.indexOf('register')>-1 ){
                this.$router.replace('/')
            }
        }
    }

}