import axios from 'axios';


export const callAPI = async  (url, method, data, token) =>{
    let headers = { Authorization: `${token}` };
        return(
            await axios({method:  method, url,   data,  headers  })
            .catch(
                e =>{
                    if(e.response.status==419){
                    // this.$store.commit('setToken','');
                    sessionStorage.removeItem('token')
                    //jwt 타임아웃되면 로그인화면으로 보냄 
                    this.$router.push('/')
                    }
                    if(e.response.status==401){
                    // this.$store.commit('setToken','');
                    sessionStorage.removeItem('token')
                    //jwt invalid 인경우 로그인화면으로 보냄 
                    this.$router.push('/')
                }
            console.log(e);
        })
    ).data;
}