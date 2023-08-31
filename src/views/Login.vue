<template>
<v-container class="fill-height
d-flex justify-center align-baseline">
  <v-row align-content="center" class="main mt-10" >
    <v-col cols="12" class="d-flex justify-center"
    >
      <h1 class="text-lg-h2 text-h3">AuthSure Demo</h1>
    </v-col>
    <v-col cols="12" class="aling-center mt-14">
      <v-card color="white" elevation="5" rounded>
        <v-card-text>
          <v-row>
            <v-col cols="12" class="d-flex justify-center">
              <h1 class="text-black text-h4">
                Log in
              </h1>
            </v-col>
            <v-col cols="12">
              <v-form
                ref="form"
                lazy-validation
              >
                <v-row>
                  <v-col cols="12" class="mt-3">
                    <v-text-field
                      label="Username"
                      placeholder="user"
                      type="text"
                      v-model="loginPayload.username"
                      :rules="userRules.username"
                      variant="underlined"
                      required
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12">
                    <v-text-field
                      label="Password"
                      placeholder="Password"
                      type="password"
                      variant="underlined"
                      :rules="userRules.password"
                      v-model="loginPayload.password"
                      required
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12">
                    <v-btn
                      @click="login(loginPayload)"
                      block
                      color="blue"
                    >
                      Log in
                    </v-btn>
                  </v-col>
                </v-row>
              </v-form>
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</v-container>
</template>

<script setup>
  
  import { ref } from 'vue';
  import userComp from '../compositionAPI/userComp'

  const loginPayload = ref({
      username: '' ,
      password: ''
  })

  const { 
      login,
      userRules
  } = userComp()


</script>
<style scoped>
  .main{
    display: flex !important;
    justify-content: center !important;
    max-width: 83vh !important;
  }
  .bg {
    background-color: rgb(141, 139, 139) !important;
  }
  .container{
    height: 80vh !important;
    display: flex !important;

  }

</style>
