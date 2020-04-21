<template>
	<div>
		<vx-card v-if="can('view-role')" ref="view" title="Role Information">
			<template v-if="role">
				<b>ID: </b>  {{role.id}}
				<vs-divider/>
				<b>Name: </b> {{role.name}}
				<vs-divider/>
				<b>Permissions: </b>
                <br>
				<template v-for="permission in role.permissions">
                    <vs-chip>{{permission['display_name']}}</vs-chip>
				</template>
                <br>
                <vs-divider/>
                <b>Created At: </b> {{role.created_at}}
			</template>
    	</vx-card>
	</div>
</template>


<script>

export default {
	mounted() {
    	this.getRoleData();
  	},
  	data() {
	    return {
	      	role: null,
			permissions: null,
            created_at: '18 OCT 2019'
	    }
  	},
  	methods: {
  		//Display Role Data.
  		getRoleData()
  		{
            this.$vs.loading({container: this.$refs.view.$refs.content, scale: 0.5});
            this.$store.dispatch('rolesAndPermissions/view', this.$route.params.id)
                .then(response => {
                    this.$vs.loading.close(this.$refs.view.$refs.content);
                    response.data.data.data.length===0?this.$router.push('/dashboard/error-404'):this.role = response.data.data.data;
                })
                .catch(error => {
                    console.log(error);
                    this.$vs.loading.close(this.$refs.view.$refs.content);
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
