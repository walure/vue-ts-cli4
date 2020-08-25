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
        this.isGO()
    }
    created(){
        this.isGO()
    }

    private isGO(){
        const show = this.$store.getters.user.userName ? true : false
        this.isShow = show
        console.log(show,'-------------')
        if(!show){
          if(this.$route.name!='login')  this.$router.replace('/login')
        }else{
            const path = window.location.href
            if(path.indexOf('login')>-1 || path.indexOf('register')>-1 ){
                this.$router.replace('/')
            }
        }
    }

}