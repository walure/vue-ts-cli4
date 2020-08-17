import {Component, Vue  } from "vue-property-decorator";

@Component({
    name: 'login',
})
export default class Login extends Vue {
  private form: any = {}
  created() {
    console.log( this.form)
 
    this.form = this.$form.createForm(this, { name: "normal_login" })
  }

 private handleSubmit(e:any) {
 
    e.preventDefault();
    this.form.validateFields((err:Object, values:any) => {
        console.log(err,values)
      if (!err) {
       this.$store.commit('setUser',{
          userName:values.userName
        })
        console.log(this.$store.getters.user)
        console.log("Received values of form: ", values)
      }
    });
  }


}