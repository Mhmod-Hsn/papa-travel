<template>
    <div>
        <div class="vx-col w-full mb-base" v-if="can('view-employee')||$store.getters['auth/userData'].id===$route.params.id">
            <vx-card ref="view" title="Personal Information" collapseAction>
                <vs-row v-if="employee">
                    <vs-row class="mb-5">
                        <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="12">
                            <vs-avatar class="mx-auto mb-2 block" size="120px" :src="employee.image" />
                        </vs-col>
                    </vs-row>
                    <vs-row class="mb-2">
                        <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="12">
                            {{employee.name}}
                        </vs-col>
                    </vs-row>
                    <vs-row class="mb-2">
                        <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="12">
                            {{employee.roles[0].name}}
                        </vs-col>
                    </vs-row>
                    <vs-row class="mb-2">
                        <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="12">
                            {{employee.email}}
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
            this.getEmployeeData();
        },
        data: () => {
            return {
                employee: null,
                is_requesting: false,
            }
        },
        methods: {
            getEmployeeData() {
                this.$vs.loading({container: this.$refs.view.$refs.content, scale: 0.5});
                this.$store.dispatch('employee/view', this.$route.params.id)
                    .then(response => {
                        this.employee = response.data.data.data;
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
