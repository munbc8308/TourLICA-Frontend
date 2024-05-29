<script setup lang="ts">
import InputGroup from 'primevue/inputgroup'
import InputGroupAddon from 'primevue/inputgroupaddon'
import axios from 'axios'
import { user_status } from '@/common/store/user_status'
import shop_api from '@/common/api/shop_api'

const user = {
  //type: 'ADMIN',
  email: 'admin',
  password: 'admin',
  //name: 'admin',

}

const sign_in = () => {
  axios.post('https://tourlica.shop/api/sign-in', user)
    .then((response) => {
      user_status().setUser(response.data.data)
        .then(() => {
          alert('로그인 되었습니다.')
        })
    console.log(response)
  })
}

const getAdmins = () =>{
  shop_api.get('/admin/admins').then((response) => {
    console.log(response)
  })
}
</script>

<template>
  <InputGroup>
    <InputGroupAddon>
      <i class="pi pi-user"></i>
    </InputGroupAddon>
    <InputText placeholder="Username" />
  </InputGroup>

  <InputGroup>
    <InputGroupAddon>$</InputGroupAddon>
    <InputNumber placeholder="Price" />
    <InputGroupAddon>.00</InputGroupAddon>
  </InputGroup>

  <InputGroup>
    <InputGroupAddon>www</InputGroupAddon>
    <InputText placeholder="Website" />
  </InputGroup>

  <InputGroup>
    <InputText placeholder="Keyword" />
    <Button icon="pi pi-search" severity="warning" @click="sign_in"/>
  </InputGroup>

  <Button serverity="serverity" @click="getAdmins">getUserList</Button>
</template>

<style scoped>

</style>