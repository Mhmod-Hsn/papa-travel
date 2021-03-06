<template>
    <div>
        <div v-if="can('create-employee')" class="vx-col w-full mb-base">
            <vx-card ref="create" title="Personal Information">

                <div class="vx-row">
                    <div class="vx-col w-full mb-6">
                        <vs-select label="Employee Role" autocomplete label-placeholder="Employee Role" icon-pack="feather" icon="icon-chevron-down"  color="primary" class="w-full" v-model="form.role">
                            <vs-select-item :key="index" :value="item.name" :text="item.name" v-for="(item, index) in roles" />
                        </vs-select>
                    </div>
                </div>

                <div class="vx-row" v-if="form.role == 'Agency Admin'">
                    <div class="vx-col w-full mb-6">
                        <vs-select label="Agency" autocomplete label-placeholder="Agency" icon-pack="feather" icon="icon-chevron-down"  color="primary" class="w-full" v-model="form.agency_id">
                            <vs-select-item :key="index" :value="item.id" :text="item.name" v-for="(item, index) in agencies" />
                        </vs-select>
                    </div>
                </div>

                <div class="vx-row">
                    <div class="vx-col sm:w-1/2 w-full mb-6">
                        <div class="image-preview" style="display: inline-flex;">
                            <img alt="employee photo" class="preview" :src="uploadedImage?uploadedImage:'/images/avatar-s-11.png'">
                        </div>
                        <div style="display: inline-flex;position: relative;top: -15px;">
                            <input id="img-upload" type="file" @change="previewImage" accept="image/*">
                            <vs-button size="small" icon-pack="feather" icon="icon-upload" type="gradient" onclick="document.getElementById('img-upload').click()">Upload Employee Photo</vs-button>
                        </div>
                    </div>
                </div>

                <div class="vx-row">
                    <div class="vx-col sm:w-1/2 w-full mb-6">
                        <vs-input name="name" v-validate="'required|min:3'" :danger="errors.has('name')" val-icon-danger="clear" :danger-text="errors.first('name')" class="w-full" icon-pack="feather" icon="icon-user" label-placeholder="Employee Name" v-model="form.name" />
                    </div>
                    <div class="vx-col sm:w-1/2 w-full mb-6">
                        <vs-input name="email" v-validate="'required|email'" :danger="errors.has('email')" val-icon-danger="clear" :danger-text="errors.first('email')" class="w-full" icon-pack="feather" icon="icon-mail" label-placeholder="Email" v-model="form.email" />
                    </div>
                </div>

                <div class="vx-row">
                    <div class="vx-col sm:w-1/2 w-full mb-6">
                        <vs-input ref="password" name="password" v-validate="'required|min:6|max:10'" :danger="errors.has('password')" val-icon-danger="clear" :danger-text="errors.first('password')" type="password" class="w-full" icon-pack="feather" icon="icon-lock" label-placeholder="Password" v-model="form.password" />
                    </div>
                    <div class="vx-col sm:w-1/2 w-full mb-6">
                        <vs-input type="password" name="confirm_password" v-validate="'min:6|max:10|confirmed:password'" :danger="errors.has('confirm_password')" val-icon-danger="clear" :danger-text="errors.first('confirm_password')" class="w-full" icon-pack="feather" icon="icon-lock" label-placeholder="Confirm Password" v-model="form.confirm_password" />
                    </div>
                </div>

                <vs-row vs-align="center" vs-type="flex" vs-justify="center" vs-w="12">
                    <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="12">
                        <vs-button id="btn-create" :disabled="!validateForm" @click="is_requesting?$store.dispatch('viewWaitMessage', $vs):create()" icon-pack="feather" icon="icon-save" type="gradient">Create Employee</vs-button>
                    </vs-col>
                </vs-row>
            </vx-card>
        </div>
    </div>
</template>

<script>
    export default {
        name: "add-employee",
        mounted() {
          this.getRoles();
          this.getAgencies();
        },
        computed: {
            validateForm() {
                return !this.errors.any() && this.form.name !== "" && this.form.email !== '' && this.form.password !== '' && this.form.confirm_password !== '';
            }
        },
        data: function () {
            return {
                roles: [],
                agencies: [],
                form: {
                    name: '',
                    email: '',
                    password: '',
                    confirm_password: '',
                    image: null,
                    role: '',
                    agency_id: null
                },
                uploadedImage: null,
                is_requesting: false
            }
        },
        methods: {
            //Get A List Of All Roles.
            getRoles()
            {
                this.$vs.loading({container: this.$refs.create.$refs.content, scale: 0.5});
                this.$store.dispatch('rolesAndPermissions/getRoles', '')
                    .then(response => {
                        this.$vs.loading.close(this.$refs.create.$refs.content);
                        this.roles = response.data.data.data;
                        this.form.role = this.roles[0].name;
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

            getAgencies()
            {
                this.$vs.loading({container: this.$refs.create.$refs.content, scale: 0.5});
                this.$store.dispatch('agency/getData', '')
                    .then(response => {
                        this.$vs.loading.close(this.$refs.create.$refs.content);
                        this.agencies = response.data.data.data;
                        this.form.agency_id = this.agencies[0].id;
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

            create() {
                if (!this.validateForm) return;

                this.is_requesting=true;
                this.$vs.loading({container: `#btn-create`, color: 'primary', scale: 0.45});
                let form_data = new FormData();

                for (let key in this.form ) {
                    if ((key === 'image') && this.form.hasOwnProperty(key)){
                        if (this.form[key]) {
                            for (let i=0; i<this.form[key].length; i++){
                                form_data.append(key, this.form[key][i]);
                            }
                        }
                    } else if(key === 'phones'){
                        form_data.append(key, JSON.stringify(this.form[key]));
                    }
                    else {
                        form_data.append(key, this.form[key]);
                    }
                }
                this.$store.dispatch('employee/create', form_data)
                    .then(response => {
                        this.is_requesting=false;
                        this.$vs.loading.close(`#btn-create > .con-vs-loading`);
                        this.$router.push(`/dashboard/employee/${response.data.data.data.id}`);
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

            previewImage: function(event) {
                // Reference to the DOM input element
                var input = event.target;
                // Ensure that you have a file before attempting to read it
                if (input.files && input.files[0]) {
                    // create a new FileReader to read this image and convert to base64 format
                    var reader = new FileReader();
                    // Define a callback function to run, when FileReader finishes its job
                    reader.onload = (e) => {
                        // Note: arrow function used here, so that "this.imageData" refers to the imageData of Vue component
                        // Read image as base64 and set to imageData
                        this.uploadedImage = e.target.result;
                        this.form.image = input.files;
                    };
                    // Start the reader job - read file as a data url (base64 format)
                    reader.readAsDataURL(input.files[0]);
                }
            }
        }
    }
</script>

<style>
    .image-preview {
        font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
        padding-right: 20px;
        top: 6px;
        position: relative;
    }

    #img-upload {
        display: none;
    }

    img.preview {
        width: 55px;
        height: 55px;
        border-radius: 50%;
        background-color: white;
        border: 1px solid #DDD;
        padding: 5px;
    }
</style>
