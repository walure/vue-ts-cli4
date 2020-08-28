import axios from './utils/axios';

declare module 'vue/types/vue' {
    interface Vue {
        $axios: axios
    }
}