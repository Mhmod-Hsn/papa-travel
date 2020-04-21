<template>
    <div class="vx-col w-full mb-base" v-if="can('browse-booking')">
        <vx-card ref="browse" title="Clients List" collapse-action refreshContentAction @refresh="getClients">
            <vs-table search :data="clients">
                <template slot="thead">
                    <vs-th>ID</vs-th>
                    <vs-th>Name</vs-th>
                    <vs-th>Email</vs-th>
                    <vs-th>Telephone</vs-th>
                    <vs-th>Adults</vs-th>
                    <vs-th>Children</vs-th>
                    <vs-th>Action</vs-th>
                </template>
                <template slot-scope="{data}">
                    <vs-tr :key="index" v-for="(client, index) in data">
                        <vs-td :data="client.id">
                            {{ client.id }}
                        </vs-td>

                        <vs-td :data="client.name">
                            {{ client.name}}
                        </vs-td>

                        <vs-td :data="client.email">
                            {{ client.email}}
                        </vs-td>

                        <vs-td :data="client.telephone">
                            {{ client.phone}}
                        </vs-td>

                        <vs-td :data="client.adults">
                            {{ client.adults}}
                        </vs-td>

                        <vs-td :data="client.children">
                            {{ client.children}}
                        </vs-td>

                        <vs-td>
                            <vs-row>
                                <div class="flex mb-4">
                                    <div class="w-1/3 ml-5" v-if="can('delete-booking')">
                                        <vs-button :id="`btn-delete-${client.id}`" class="vs-con-loading__container" radius color="danger" type="border" icon-pack="feather" icon="icon-trash" @click="is_requesting?$store.dispatch('viewWaitMessage', $vs):confirmDeleteClient(client)"></vs-button>
                                    </div>
                                </div>
                            </vs-row>
                        </vs-td>
                        <template class="expand-user" slot="expand">
                            <div class="con-expand-users w-full">
                                <vs-row v-if="client.package">
                                    <vs-col vs-xs="6" vs-sm="4" vs-lg="3">
                                        <label class="font-bold">Title: </label>
                                        {{client.package.title}}
                                    </vs-col>
                                    <vs-col vs-xs="6" vs-sm="4" vs-lg="3">
                                        <label class="font-bold">Rate: </label>
                                        {{client.package.price}} {{client.package.currency}}
                                    </vs-col>
                                    <vs-col vs-xs="6" vs-sm="4" vs-lg="3">
                                        <label class="font-bold">Period: </label>
                                        {{client.package.days}} Days / {{client.package.nights}} Nights
                                    </vs-col>
                                    <vs-col vs-xs="6" vs-sm="4" vs-lg="3">
                                        <label class="font-bold">Rate: </label>
                                        {{client.package.rate}} Stars
                                    </vs-col>
                                    <vs-col vs-xs="6" vs-sm="4" vs-lg="3">
                                        <label class="font-bold">Season: </label>
                                        {{client.package.season}}
                                    </vs-col>
                                    <vs-col vs-xs="6" vs-sm="4" vs-lg="3">
                                        <label class="font-bold">Date: </label>
                                        {{client.package.date}}
                                    </vs-col>
                                </vs-row>
                                <template v-if="client.custom_package">
                                    <h2>Custom Package</h2>
                                    <vs-row>
                                        <vs-col vs-xs="6" vs-sm="4" vs-lg="3">
                                            <label class="font-bold">Date: </label>
                                            {{client.custom_package.travel_date}}
                                        </vs-col>
                                        <vs-col vs-xs="6" vs-sm="4" vs-lg="3">
                                            <label class="font-bold">Flexibility: </label>
                                            {{client.custom_package.flexibility}} Days
                                        </vs-col>
                                        <vs-col vs-xs="6" vs-sm="4" vs-lg="3">
                                            <label class="font-bold">Budget: </label>
                                            {{client.custom_package.budget}}
                                        </vs-col>
                                        <vs-col vs-xs="6" vs-sm="4" vs-lg="3">
                                            <label class="font-bold">Flexibility: </label>
                                            {{client.custom_package.flexibility}}
                                        </vs-col>
                                        <vs-col vs-xs="6" vs-sm="4" vs-lg="3">
                                            <label class="font-bold">Room Type: </label>
                                            {{client.custom_package.room_type}}
                                        </vs-col>
                                        <vs-col vs-xs="6" vs-sm="4" vs-lg="3">
                                            <label class="font-bold">Hotel Rating: </label>
                                            {{client.custom_package.hotel_rating}} Stars
                                        </vs-col>
                                        <vs-col vs-xs="6" vs-sm="4" vs-lg="3">
                                            <label class="font-bold">Hotel Location: </label>
                                            {{client.custom_package.hotel_location}}
                                        </vs-col>
                                        <vs-col vs-xs="6" vs-sm="4" vs-lg="3">
                                            <label class="font-bold">Notes: </label>
                                            {{client.custom_package.notes}}
                                        </vs-col>
                                    </vs-row>
                                    <h3>Destinations: </h3>
                                    <template v-for="dest in client.custom_package.destinations">
                                        <vs-row >
                                            <vs-col vs-xs="6" vs-sm="4" vs-lg="3">
                                                <label class="font-bold">Country: </label>
                                                {{dest.country}}
                                            </vs-col>
                                            <vs-col vs-xs="6" vs-sm="4" vs-lg="3">
                                                <label class="font-bold">City: </label>
                                                {{dest.city}}
                                            </vs-col>
                                            <vs-col vs-xs="6" vs-sm="4" vs-lg="3">
                                                <label class="font-bold">Nights: </label>
                                                {{dest.nights}} Night
                                            </vs-col>
                                        </vs-row>
                                    </template>
                                </template>
                            </div>
                        </template>
                    </vs-tr>
                </template>
            </vs-table>
        </vx-card>
    </div>
</template>

<script>
    import "@fortawesome/fontawesome-free/css/all.css"
    import "@fortawesome/fontawesome-free/js/all.js"
    export default {
        name: "Client",
        mounted() {
            this.getClients();
        },
        data: function (){
            return {
                searchText: "",
                resultTime: 0,
                clients: [],
                is_requesting: false
            }
        },
        methods: {
            getClients(){
                this.$store.dispatch('client/getData', '')
                    .then(response => {
                        this.clients = response.data.data.data;
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

            confirmDeleteClient(type)
            {
                this.$vs.dialog({
                    type: 'confirm',
                    color: 'danger',
                    title: `Are you sure!`,
                    text: 'This data can not be retrieved again.',
                    accept: this.deleteClient,
                    parameters: [type]
                });
            },

            deleteClient(params)
            {
                this.is_requesting=true;
                this.$vs.loading({container: `#btn-delete-${params[0].id}`, color: 'danger', scale: 0.45});
                this.$store.dispatch('client/delete', params[0].id)
                    .then(response => {
                        this.is_requesting = false;
                        this.$vs.loading.close(`#btn-delete-${params[0].id} > .con-vs-loading`);
                        this.clients = this.clients.filter(type => {return type.id !== params[0].id});
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
