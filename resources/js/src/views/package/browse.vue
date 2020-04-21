<template>
    <div class="vx-col w-full mb-base" v-if="can('browse-package')">
        <vx-card ref="browse" title="Packages List" collapse-action refreshContentAction @refresh="getPackages">
            <vs-table search :data="packages">
                <template slot="header">
                    <vs-button v-if="can('browse-package')" to="/dashboard/package/create" size="small" icon-pack="feather" icon="icon-plus">Create Package</vs-button>
                </template>
                <template slot="thead">
                    <vs-th>#</vs-th>
                    <vs-th>Name</vs-th>
                    <vs-th v-if="$store.state.auth.AppActiveUser.roles[0].name == 'Super Admin'">Agency</vs-th>
                    <vs-th>Date</vs-th>
                    <vs-th>Price</vs-th>
                    <vs-th>Is Featured</vs-th>
                    <vs-th>Created At</vs-th>
                    <vs-th>Action</vs-th>
                </template>
                <template slot-scope="{data}">
                    <vs-tr :key="index" v-for="(packageData, index) in packages">
                        <vs-td :data="packageData.id">
                            {{ packageData.id }}
                        </vs-td>

                        <vs-td :data="packageData.title">
                            {{ packageData.title}}
                        </vs-td>

                        <vs-td v-if="$store.state.auth.AppActiveUser.roles[0].name == 'Super Admin'" :data="packageData.agency.name">
                            {{ packageData.agency.name}}
                        </vs-td>

                        <vs-td :data="packageData.date">
                            {{ packageData.date}}
                        </vs-td>

                        <vs-td :data="packageData.price">
                            {{ packageData.price}}
                        </vs-td>
                        <vs-td :data="packageData.home_page">
                            {{ packageData.home_page}}
                        </vs-td>

                        <vs-td :data="packageData.created_at">
                            {{ packageData.created_at}}
                        </vs-td>

                        <vs-td>
                            <vs-row>
                                <div class="flex mb-4">
                                    <div class="w-1/3 ml-5" v-if="can('delete-package')">
                                        <vs-button :id="`btn-delete-${packageData.id}`" class="vs-con-loading__container" radius color="danger" type="border" icon-pack="feather" icon="icon-trash" @click="is_requesting?$store.dispatch('viewWaitMessage', $vs):confirmDeletePackage(packageData)"></vs-button>
                                    </div>
                                </div>
                            </vs-row>
                        </vs-td>
                    </vs-tr>
                </template>
            </vs-table>
        </vx-card>
    </div>
</template>

<script>
    export default {
        name: "browse",
        mounted() {
            this.getPackages();
        },
        data: function (){
            return {
                searchText: "",
                resultTime: 0,
                packages: [],
                is_requesting: false
            }
        },
        methods: {
            getPackages(){
                // this.$vs.loading({container: this.$refs.browse, scale: 0.5});
                this.$store.dispatch('package/getData', '')
                    .then(response => {
                        // this.$vs.loading.close(this.$refs.browse);
                        this.packages = response.data.data.data;
                    })
                    .catch(error => {
                        console.log(error);
                        // this.$vs.loading.close(this.$refs.browse);
                        this.$vs.notify({
                            title: 'Error',
                            text: error.response.data.error,
                            iconPack: 'feather',
                            icon: 'icon-alert-circle',
                            color: 'danger'
                        });
                    });
            },

            confirmDeletePackage(type)
            {
                this.$vs.dialog({
                    type: 'confirm',
                    color: 'danger',
                    title: `Are you sure!`,
                    text: 'This data can not be retrieved again.',
                    accept: this.deletePackage,
                    parameters: [type]
                });
            },

            deletePackage(params)
            {
                this.is_requesting=true;
                this.$vs.loading({container: `#btn-delete-${params[0].id}`, color: 'danger', scale: 0.45});
                this.$store.dispatch('package/delete', params[0].id)
                    .then(response => {
                        this.is_requesting = false;
                        this.$vs.loading.close(`#btn-delete-${params[0].id} > .con-vs-loading`);
                        this.packages = this.packages.filter(type => {return type.id !== params[0].id});
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
                        this.$vs.loading.close(`#btn-delete-${params[0].id} > .con-vs-loading`);
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

<style>
    .txt-hover:hover{
        cursor: pointer;
        color: black !important;
    }
</style>
