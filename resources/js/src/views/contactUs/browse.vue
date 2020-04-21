<template>
    <div class="vx-col w-full mb-base">
        <vx-card ref="browse" title="Contact Us" collapse-action refreshContentAction @refresh="getContactUs">
            <vs-table search :data="contactUsArr">
                <template slot="thead">
                    <vs-th>#</vs-th>
                    <vs-th>Email</vs-th>
                    <vs-th>Name</vs-th>
                    <vs-th>Telephone</vs-th>
                    <vs-th>Message</vs-th>
                    <vs-th>Action</vs-th>
                </template>
                <template slot-scope="{data}">
                    <vs-tr :key="index" v-for="(con, index) in contactUsArr">
                        <vs-td :data="con.id">
                            {{ index+1 }}
                        </vs-td>

                        <vs-td :data="con.email">
                            {{ con.email}}
                        </vs-td>

                        <vs-td :data="con.name">
                            {{ con.name}}
                        </vs-td>

                        <vs-td :data="con.phone">
                            {{ con.phone}}
                        </vs-td>

                        <vs-td :data="con.message">
                            {{ con.message}}
                        </vs-td>

                        <vs-td>
                            <vs-row>
                                <div class="flex mb-4">
                                    <div class="w-1/3 ml-5" v-if="can('delete-contact-us')">
                                        <vs-button :id="`btn-delete-${con.id}`" class="vs-con-loading__container" radius color="danger" type="border" icon-pack="feather" icon="icon-trash" @click="is_requesting?$store.dispatch('viewWaitMessage', $vs):confirmDeleteContactUs(con)"></vs-button>
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
            this.getContactUs();
        },
        data: function (){
            return {
                contactUsArr: [],
                is_requesting: false
            }
        },
        methods: {
            getContactUs(){
                this.$store.dispatch('contactUs/getData', '')
                    .then(response => {
                        this.contactUsArr = response.data.data.data;
                    })
                    .catch(error => {
                        console.log(error);
                        this.$vs.notify({
                            title: 'Error',
                            text: error.response.data.error,
                            iconPack: 'feather',
                            icon: 'icon-alert-circle',
                            color: 'danger'
                        });
                    });
            },

            confirmDeleteContactUs(con)
            {
                this.$vs.dialog({
                    type: 'confirm',
                    color: 'danger',
                    title: `Are you sure!`,
                    text: 'This data can not be retrieved again.',
                    accept: this.deleteContactUs,
                    parameters: [con]
                });
            },

            deleteContactUs(params)
            {
                this.is_requesting=true;
                this.$vs.loading({container: `#btn-delete-${params[0].id}`, color: 'danger', scale: 0.45});
                this.$store.dispatch('contactUs/delete', params[0].id)
                    .then(response => {
                        this.is_requesting = false;
                        this.$vs.loading.close(`#btn-delete-${params[0].id} > .con-vs-loading`);
                        this.contactUsArr = this.contactUsArr.filter(contactUs => {return contactUs.id !== params[0].id});
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
