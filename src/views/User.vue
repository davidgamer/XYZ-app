<template>
<div class="row">
  <div class="greenhaf">
    <div class="sideButton">
      <router-link to="/" class="btn-floating btn-large waves-effect waves-light blue-grey lighten-5">
        <i class="material-icons">chevron_left</i>>
      </router-link>
    </div>
  </div>
     <div class="col s12 m8 offset-m2">
      <div class="card center-align helpc">
        <div class="top-card grey lighten-4">
          <img width="128" :src="userData.picture.large" alt class="circle responsive-img image-pos">
        </div>
        <div class="body-card white">
          <h5>{{status}}</h5>
          <h4>{{valor}}</h4>
          <div class="icons">
            <i @mouseover="setData(textMessage.name)" class="material-icons">person_outline</i>
            <i @mouseover="setData(textMessage.email)" class="material-icons">local_post_office</i>
            <i @mouseover="setData(textMessage.birthday)" class="material-icons">calendar_today</i>
            <i @mouseover="setData(textMessage.address)" class="material-icons">map</i>
            <i @mouseover="setData(textMessage.phone)" class="material-icons">local_phone</i>
            <i @mouseover="setData(textMessage.password)" class="material-icons">vpn_key</i>
          </div>
        </div>
      </div>
  </div>
</div>
</template>
<script>
export default {
     data: () => {
    return {
        userData: {},
        textMessage:{
          name: 'Oi meu nome é',
          email: 'Meu e-mail é',
          birthday: 'Meu aniversário é',
          address: 'Meu endereco é',
          phone: 'Meu nº de telefone é',
          password: 'Minha senha é'
          },
        status: '',
        valor:''

    }
  },
  created (){
    this.userData = this.$route.query.userData
    this.status = this.textMessage.name
    this.valor = this.userData.name.first+ ' ' + this.userData.name.last
  },
  methods: {
    setData(msg){
      this.status = msg
      if(this.status == this.textMessage.name){
        this.valor = this.userData.name.first+ ' ' + this.userData.name.last
      }
      if(this.status == this.textMessage.email){
        this.valor = this.userData.email
      }
      if(this.status == this.textMessage.birthday){
        let unformedDay = new Date(this.userData.dob.date);
       // alert(unformedDay)
        this.valor =  unformedDay.toLocaleDateString()
      }
       if(this.status == this.textMessage.address){
        this.valor = this.userData.location.city + ' ' + this.userData.location.state
      }
       if(this.status == this.textMessage.phone){
        this.valor = this.userData.phone
      }
       if(this.status == this.textMessage.password){
        this.valor = this.userData.login.password
      }
    }
  }
};
</script>
<style lang="scss">
.greenhaf {
  background: #2c3e50;
  margin: 0 auto;
  height: 25vh;
  position: relative;
}
.grayHaf{
  background: gray;
  a{
    color:gray;
  }

}
 .sideButton{
    position: absolute;
    left: 1rem;
    top: 0.5rem;
  }
.image-pos {
  width: 20%;
  border: 1px solid #000;
  align-self: center;
  position: relative;
  top: 2rem;
  margin-bottom: 5rem;
}
.helpc{
  position: relative;
  bottom: 8rem;
}
.top-card {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.body-card {
  display: flex;
  flex-direction: column;
  justify-content: center;
  h5 {
    align-self: center;
  }
  h4 {
    align-self: center;
  }
  .icons {
    align-self: center;

    cursor: pointer;
    i {
      margin-left: 1rem;
      margin-bottom: 5rem;
      color:lightgray;
       font-size:3rem;
          &:hover{
        color:#b5c231;
      }
    }
    margin-bottom: 2rem;
  }
}
</style>
