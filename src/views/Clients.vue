<template>
<v-container fluid>
    <v-row>
        <v-col cols="12" class="d-flex justify-start mt-1">
            <p class="text-h4">Clients</p>
        </v-col>
        <v-col cols="2" class="d-flex justify-start">
            <v-divider></v-divider>
        </v-col>
    </v-row>
    <v-row>
        <v-col cols="12" 
        md="5" 
        xl="5"
            class="d-flex 
            flex-row"
        >
            <v-btn
                size="x-large"
                variant="text"
            >
               New Client
            </v-btn>
            <v-text-field
                class="ml-3"
                clearable
                clear-icon="mdi-close"
                variant="outlined"
                append-inner-icon="mdi-magnify"
                placeholder="Search"
                type="text"
            >
            </v-text-field>
        </v-col>
       
        <v-col cols="12">
            <v-table theme="dark">
                <thead>
                  <tr>
                    <th class="text-left">
                      ClientId
                    </th>
                    <th class="text-left">
                      Enabled
                    </th>
                    <th>
                        Base URL
                    </th>
                  </tr>
                </thead>
               
            </v-table>
        </v-col> 
    </v-row>
</v-container>

</template>


<script setup>


</script>