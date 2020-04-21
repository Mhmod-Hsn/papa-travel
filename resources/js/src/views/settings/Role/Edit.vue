<template>
  <div>
    <vx-card v-if="can('edit-role')" ref="edit" title='Update Role'>
      <form>
        <div class="vx-row">
          <div class="vx-col w-full mb-2">
              <vs-input class="w-full" :danger="errors.has('role_name')" :danger-text="errors.first('role_name')" val-icon-danger="clear" v-validate="'required'" icon-pack="feather" icon="icon-shield" icon-no-border label-placeholder="Role Name" v-model="role_name" name='role_name' />
          </div>
        </div>

          <div class="vx-row mt-5">
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
          </div>


        <div class="vx-row mt-10">
          <div class="vx-col w-full">
              <vs-button id="btn-save" class="vs-con-loading__container" :disabled="!validateForm" @click="is_requesting?$store.dispatch('viewWaitMessage', $vs):saveRole()" icon-pack="feather" icon="icon-save">Save</vs-button>
          </div>
        </div>
      </form>
    </vx-card>
  </div>
</template>

<script>
  export default {
    mounted() {
      this.getPermissions();
    },
    data() {
      return {
          role: null,

          permissions: [],
          role_name: "",
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
        //Get All Roles
        getPermissions()
        {
            this.$vs.loading({container: this.$refs.edit.$refs.content, scale: 0.5});
            this.$store.dispatch('rolesAndPermissions/getPermissions')
                .then(response => {
                    this.permissions = response.data.data;
                    this.getRole();
                })
                .catch(error => {
                    console.log(error);
                    this.$vs.loading.close(this.$refs.edit.$refs.content);
                    this.$vs.notify({
                        title: 'Error',
                        text: error.response.data.error,
                        iconPack: 'feather',
                        icon: 'icon-alert-circle',
                        color: 'danger'
                    });
                });
        },

      getRole()
      {
          this.$store.dispatch('rolesAndPermissions/view', this.$route.params.id)
              .then(response => {
                  this.$vs.loading.close(this.$refs.edit.$refs.content);
                  this.role = response.data.data.data;
                  if (response.data.data.data.length===0) {
                      this.$router.push('/dashboard/error-404');
                  } else {
                      response.data.data.data.permissions.forEach(permission => {
                          this.rolePermissions.push(permission.name)
                      });
                      // this.rolePermissions = response.data.data.data.permissions;
                      this.role_name = response.data.data.data.name;
                  }
              })
              .catch(error => {
                  console.log(error);
                  this.$vs.loading.close(this.$refs.edit.$refs.content);
                  this.$vs.notify({
                      title: 'Error',
                      text: error.response.data.error,
                      iconPack: 'feather',
                      icon: 'icon-alert-circle',
                      color: 'danger'
                  });
              });
      },

        //Save Role Submission
        saveRole()
        {
            if (!this.validateForm) return;

            this.is_requesting=true;
            this.$vs.loading({container: `#btn-save`, color: 'primary', scale: 0.45});
            this.$store.dispatch('rolesAndPermissions/update', {id: this.$route.params.id, data: {permissions: this.rolePermissions, name: this.role_name, display_name: this.role_name}})
                .then(response => {
                    this.is_requesting=false;
                    this.$vs.loading.close(`#btn-save > .con-vs-loading`);
                    this.$router.push(`/dashboard/settings/role/${this.$route.params.id}`);
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
                    this.$vs.loading.close(`#btn-save > .con-vs-loading`);
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

        //View Loader on button on submit
        startBtnLoader(buttonID)
        {
            this.is_loading = true;
            this.$vs.loading({
                background: 'primary',
                color: '#fff',
                container: buttonID,
                scale: 0.45
            });
        },

        //Hide Loader on button
        endBtnLoader(buttonID)
        {
            this.is_loading = false;
            this.$vs.loading.close(`${buttonID} > .con-vs-loading`);
        },

        //View a warning notification to wait for response
        notifyToWait()
        {
            this.vs_alert ('Please, wait!', 'Your request is under process', 'warning', 'icon-clock');
        },

        //Vuesax alert
        vs_alert (title, text, color, icon)
        {
            this.$vs.notify({
                title: title,
                text: text,
                color: color,
                iconPack: 'feather',
                icon: icon
            });
        }
    },
  }
</script>

<style>
  .centerx li {
    display: inline-flex;
    margin: 10px;
  }
</style>
