import {Component, Vue, Watch  } from "vue-property-decorator";
import Menu from './menu/menu.vue'
import Topbar from './topbar/topbar.vue'
@Component({
    name:'layouts',
    components:{
        Menu,
        Topbar
    }
})

export default class layouts extends Vue{
    private isShow: boolean = true
    @Watch('$route')
    routechange(){
        console.log('111111')
        this.isShow =this.$store.getters.user.userName ? true : false
    }
    created(){
      //  console.log(window.location)
        const path = window.location.href
        if(this.$store.getters.user.userName ){
            if(path.indexOf('login')>-1 || path.indexOf('register')>-1 ){
                this.$router.replace('/')
            }
        }else{
            this.isShow = false
            this.$router.replace('login')
        }
    }

}