<template>
  <div>
      <div class="vx-col w-full mb-base" v-if="can('create-role')">
          <vx-card ref="create" title='Create New Role'>
              <vs-row>
                  <vs-col vs-lg="12" vs-sm="12" vs-xs="12" class="mb-5 pl-5">
                      <vs-input v-validate="'required'" class="w-full" :danger="errors.has('role_name')" :danger-text="errors.first('role_name')" val-icon-danger="clear" icon-pack="feather" icon="icon-shield" icon-no-border label-placeholder="Role Name" v-model="role_name" name='role_name' />
                  </vs-col>
                  <vs-col vs-lg="12" vs-sm="12" vs-xs="12" class="mb-5 pl-5">
                      <div class="vx-col w-full">
                          <b>Role Permissions:</b>
                          <ul v-for="(group, groupName) in permissions">
                              <br>
                              <vs-checkbox v-model="groupPermissions" :vs-value="groupName" @change="groupPressed(group)"><b>{{groupName}}</b></vs-checkbox>
                              <li class="ml-8" v-for="(permission, index) in group" :key="index">
                                  <vs-checkbox v-model="rolePermissions" :vs-value="permission.name">{{permission['display_name']}}</vs-checkbox>
                              </li>
                          </ul>
                      </div>
                  </vs-col>
              </vs-row>
              <vs-divider></vs-divider>
              <vs-row vs-justify="center" vs-align="center">
                  <vs-button id="btn-create" class="vs-con-loading__container" :disabled="!validateForm" @click="is_requesting?$store.dispatch('viewWaitMessage', $vs):createRole()" icon-pack="feather" icon="icon-save">Create Role</vs-button>
              </vs-row>
          </vx-card>
      </div>
  </div>
</template>

<script>

// For custom error message
import { Validator } from 'vee-validate';
const dict = {
  custom: {
    role_name: {
      required: 'Please enter the role name'
    }
  }
};
// register custom messages
Validator.localize('en', dict);


export default {
    mounted() {
        this.getPermissions();
    },
    data() {
        return {
            role_name: "",
            permissions: [],
            rolePermissions: [],
            groupPermissions:[],

            is_requesting: false
        }
    },
    computed: {
        validateForm() {
            return !this.errors.any() && this.role_name !== "";
        }
    },
    methods: {
        //Get All Permissions
        getPermissions() {
            this.$vs.loading({container: this.$refs.create.$refs.content, scale: 0.5});
            this.$store.dispatch('rolesAndPermissions/getPermissions')
              .then(response => {
                  this.$vs.loading.close(this.$refs.create.$refs.content);
                  this.permissions = response.data.data;
              })
              .catch(error => {
                  console.log(error);
                  this.$vs.loading.close(this.$refs.create.$refs.content);
                  this.$vs.notify({
                      title: 'Error',
                      text: error.response.data.error,
                      iconPack: 'feather',
                      icon: 'icon-alert-circle',
                      color: 'danger'
                  });
              });
      },

    //Create Role Submission
    createRole()
    {
        if (!this.validateForm) return;

        this.is_requesting=true;
        this.$vs.loading({container: `#btn-create`, color: 'primary', scale: 0.45});
        this.$store.dispatch('rolesAndPermissions/create', {rolePermissions: this.rolePermissions, name: this.role_name, display_name: this.role_name})
            .then(response => {
                this.is_requesting=false;
                this.$vs.loading.close(`#btn-create > .con-vs-loading`);
                this.$vs.notify({
                    title: 'Success',
                    text: response.data.message,
                    iconPack: 'feather',
                    icon: 'icon-check',
                    color: 'success'
                });
            })
            .catch(error => {
                console.log(error);
                this.is_requesting=false;
                this.$vs.loading.close(`#btn-create > .con-vs-loading`);
                this.$vs.notify({
                    title: 'Error',
                    text: error.response.data.errors[Object.keys(error.response.data.errors)[0]][0],
                    iconPack: 'feather',
                    icon: 'icon-alert-circle',
                    color: 'danger'
                });
            });
    },

      //Check and Un-Check by group
      groupPressed(group)
      {
          if (this.groupPermissions.includes(group[0].group)) {
            for(let i = 0; i< group.length; i++)
            {
                if (!this.rolePermissions.includes(group[i].name))
                    this.rolePermissions.push(group[i].name)
            }
          } else {
              for(let i = 0; i< group.length; i++)
              {
                  if (this.rolePermissions.includes(group[i].name))
                      this.rolePermissions.splice(this.rolePermissions.indexOf(group[i].name), 1);
              }
          }
      },

    },
}
</script>

<style>
  .centerx li {
    display: inline-flex;
    margin: 10px;
  }
</style>
