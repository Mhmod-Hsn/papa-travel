<template>
	<div>
		<!-- Roles Table -->
        <div class="vx-col w-full mb-base" v-if="can('browse-role')">
            <vx-card ref="roles" title="Roles List" collapse-action refreshContentAction @refresh="getRoles">
                <vs-table search :data="roles">
                    <template slot="header">
                        <vs-button v-if="can('create-role')" size="small" to="/dashboard/settings/role/create" icon-pack="feather" icon="icon-plus" type="filled">Create Role</vs-button>
                    </template>
                    <template slot="thead">
                        <vs-th sort-key="id">ID</vs-th>
                        <vs-th sort-key="display_name">Role</vs-th>
                        <vs-th sort-key="created_at">Created At</vs-th>
                        <vs-th>Action</vs-th>
                    </template>
                    <template slot-scope="{data}">
                        <vs-tr :key="index" v-for="(role, index) in data">
                            <vs-td :data="role.id">
                                {{ index+1 }}
                            </vs-td>

                            <vs-td :data="role.name">
                                {{ role.name}}
                            </vs-td>

                            <vs-td :data="role.created_at">
                                {{ role.created_at}}
                            </vs-td>

                            <vs-td>
                                <vs-row>
                                    <div class="flex mb-4">
                                        <div class="w-1/3" v-if="can('view-role')">
                                            <vs-button :to="`/dashboard/settings/role/${role.id}`" radius color="primary" type="border" icon-pack="feather" icon="icon-eye"></vs-button>
                                        </div>
                                        <div class="w-1/3 ml-5" v-if="can('edit-role')">
                                            <vs-button :to="`/dashboard/settings/role/edit/${role.id}`" radius color="warning" type="border" icon-pack="feather" icon="icon-edit"></vs-button>
                                        </div>
                                        <div class="w-1/3 ml-5" v-if="can('delete-role')">
                                            <vs-button :id="`btn-type-delete-${role.id}`" class="vs-con-loading__container" radius color="danger" type="border" icon-pack="feather" icon="icon-trash" @click="is_requesting?$store.dispatch('viewWaitMessage', $vs):confirmDeleteRole(role)"></vs-button>
                                        </div>
                                    </div>
                                </vs-row>
                            </vs-td>
                        </vs-tr>
                    </template>
                </vs-table>
            </vx-card>
        </div>
	</div>
</template>


<script>

export default {
	mounted() {
    	this.getRoles();
  	},
  	data() {
	    return {
	      	roles: [],
	      	roleIdToDelete: null,
            is_requesting: false
	    }
  	},
  	methods: {
  		//Get A List Of All Roles.
        getRoles()
  		{
            this.$vs.loading({container: this.$refs.roles.$refs.content, scale: 0.5});
            this.$store.dispatch('rolesAndPermissions/getRoles', '')
                .then(response => {
                    this.$vs.loading.close(this.$refs.roles.$refs.content);
                    this.roles = response.data.data.data;
                })
                .catch(error => {
                    console.log(error);
                    this.$vs.loading.close(this.$refs.roles.$refs.content);
                    this.$vs.notify({
                        title: 'Error',
                        text: error.response.data.error,
                        iconPack: 'feather',
                        icon: 'icon-alert-circle',
                        color: 'danger'
                    });
                });
  		},

  		// Confirm Dialog To Delete The Role
  		confirmDeleteRole(role)
  		{
  			this.$vs.dialog({
  				type: 'confirm',
		        color: 'danger',
		        title: `Are you sure!`,
		        text: 'This data can not be retrieved again.',
		        accept: this.deleteRole,
                parameters: [role]
	      	});
  		},

  		//Delete A Single Role By RoleID.
  		deleteRole(params)
  		{
            this.is_requesting=true;
            this.$vs.loading({container: `#btn-type-delete-${params[0].id}`, color: 'danger', scale: 0.45});
            this.$store.dispatch('rolesAndPermissions/delete', params[0].id)
                .then(response => {
                    this.is_requesting = false;
                    this.$vs.loading.close(`#btn-type-delete-${params[0].id} > .con-vs-loading`);
                    this.roles = this.roles.filter(type => {return type.id !== params[0].id});
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
                    this.$vs.loading.close(`#btn-type-delete-${params[0].id} > .con-vs-loading`);
                    this.$vs.notify({
                        title: 'Error',
                        text: error.response.data.error,
                        iconPack: 'feather',
                        icon: 'icon-alert-circle',
                        color: 'danger'
                    });
                });
  		}
  	}
}
</script>
