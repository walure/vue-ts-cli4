import {Vue, Component} from 'vue-property-decorator'
import Search from './search'
import { prototype } from 'vue/types/umd';
import Axios from 'axios';


const columns = [
    {
      dataIndex: 'name',
      key: 'name',
      slots: { title: 'customTitle' },
      scopedSlots: { customRender: 'name' },
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'Tags',
      key: 'tags',
      dataIndex: 'tags',
      scopedSlots: { customRender: 'tags' },
    },
    {
      title: 'Action',
      key: 'action',
      scopedSlots: { customRender: 'action' },
    },
  ];
  
  const data = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
      tags: ['nice', 'developer'],
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
      tags: ['loser'],
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
      tags: ['cool', 'teacher'],
    },
  ];
  
@Component({
    name:'index',
    components:{
        Search
    }
})
class index extends Vue{
    private data = data
    private columns = columns

    get isShow(){
        return this.$route.name == 'index'
    }
    private goDetail(){
        console.log('去详情')
        
        this.$axios({
            method: 'post',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            url: '/api/test',
            data: {
                name:'zhangsan',
                num:2
            },
        }).then((e: any)=>{
            console.log(e)
        }).catch(e=>{

        })
    }
}

export default index

