<template>
<v-container class="fill-height
d-flex justify-center align-baseline">
  <v-row align-content="center" class="main mt-10" >
    <v-col cols="12" class="d-flex justify-center">
      <h1 class="text-h2">AuthSure Demo</h1>
    </v-col>
    <v-col cols="12" class="aling-center mt-14">
      <v-card color="white" elevation="5" rounded>
        <v-card-text>
          <v-row>
            <v-col cols="12" class="d-flex justify-center">
              <h1 class="text-black text-h4">Log in</h1>
            </v-col>
            <v-col cols="12">
              <v-form
                ref="form"
                lazy-validation
              >
                <v-row>
                  <v-col cols="12" class="mt-3">
                    <v-text-field
                      label="Email"
                      placeholder="example@hotmail.com"
                      type="email"
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
                      required
                    ></v-text-field>
                  </v-col>
                  <v-col cols="6">
                    <v-checkbox label="Remember me"></v-checkbox>
                  </v-col>
                  <v-col cols="6" class="d-flex align-center justify-end mt-n5 ml-n2">
                     <a href="#">Forgot Password</a>
                  </v-col>
                  <v-col cols="12">
                    <v-btn
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
  import {ref} from 'vue'

  const test = ref(0)

  function changeValue(){
    test.value += 1
  }
</script>
<style scoped>
  .main{
    display: flex !important;
    justify-content: center !important;
    max-width: 80vh !important;
  }
  .bg {
    background-color: rgb(141, 139, 139) !important;
  }
  .container{
    height: 80vh !important;
    display: flex !important;

  }

</style>
