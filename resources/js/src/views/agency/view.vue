<template>
    <div>
        <div class="vx-col w-full mb-base" v-if="can('view-agency')||$store.getters['auth/userData'].id===$route.params.id">
            <vx-card ref="view" title="Personal Information" collapseAction>
                <vs-row v-if="agency">
                    <vs-row class="mb-5">
                        <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="12">
                            <vs-avatar class="mx-auto mb-2 block" size="120px" :src="agency.image.url" />
                        </vs-col>
                    </vs-row>
                    <vs-row class="mb-2">
                        <vs-col class="m-3" vs-type="flex" vs-justify="center" vs-align="center" vs-w="12">
                            Name: {{agency.name}}
                        </vs-col>

                        <vs-col class="m-3" vs-type="flex" vs-justify="center" vs-align="center" vs-w="12">
                            Email: {{agency.email}}
                        </vs-col>

                        <vs-col class="m-3" vs-type="flex" vs-justify="center" vs-align="center" vs-w="12">
                            Address: {{agency.address}}
                        </vs-col>
                        <vs-col class="m-3" vs-type="flex" vs-justify="center" vs-align="center" vs-w="12">
                            Phone: {{agency.phone}}
                        </vs-col>

                        <vs-col class="m-3" vs-type="flex" vs-justify="center" vs-align="center" vs-w="12">
                            Working Hours: {{agency.working_hours}}
                        </vs-col>

                        <vs-col class="m-3" vs-type="flex" vs-justify="center" vs-align="center" vs-w="12">
                            Display in Homepage: {{agency.homepage}}
                        </vs-col>
                    </vs-row>
                    <vs-row class="mb-2">
                        <vs-col class="m-3" vs-type="flex" vs-justify="center" vs-align="center" vs-w="12">
                            Description: {{agency.description}}
                        </vs-col>
                    </vs-row>

                    <vs-row class="mb-2">
                        <vs-col class="m-3" vs-type="flex" vs-justify="center" vs-align="center" vs-w="12">
                            <span v-html="agency.location_embed"></span>
                        </vs-col>
                    </vs-row>
                </vs-row>
            </vx-card>
        </div>
    </div>
</template>

<script>
    export default {
        name: "viewData",
        mounted() {
            this.getAgencyData();
        },
        data: () => {
            return {
                agency: null,
                is_requesting: false,
            }
        },
        methods: {
            getAgencyData() {
                this.$vs.loading({container: this.$refs.view.$refs.content, scale: 0.5});
                this.$store.dispatch('agency/view', this.$route.params.id)
                    .then(response => {
                        this.agency = response.data.data.data;
                        this.$vs.loading.close(this.$refs.view.$refs.content);
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
            },
        }
    }
</script>

<style>
    .txt-hover:hover{
        cursor: pointer;
        color: black !important;
    }
</style>
