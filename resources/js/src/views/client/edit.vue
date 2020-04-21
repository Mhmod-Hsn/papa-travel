<template>
    <div>
        <div v-if="can('edit-employee')||$store.getters['auth/userData'].id===$route.params.id" class="vx-col w-full mb-base">
            <vx-card ref="edit" title="Edit Employee">

                <div class="vx-row">
                    <div class="vx-col w-full mb-6">
                        <vs-select label="Employee Role" autocomplete label-placeholder="Employee Role" icon-pack="feather" icon="icon-chevron-down"  color="primary" class="w-full" v-model="form.role">
                            <vs-select-item :key="index" :value="item.name" :text="item.name" v-for="(item, index) in roles" />
                        </vs-select>
                    </div>
                </div>

                <div class="vx-row">
                    <div class="vx-col sm:w-1/2 w-full mb-6">
                        <div class="image-preview" style="display: inline-flex;">
                            <img v-if="uploadedImage" alt="employee photo" class="preview" :src="uploadedImage">
                        </div>
                        <div style="display: inline-flex;position: relative;top: -15px;">
                            <input id="img-upload" type="file" @change="previewImage" accept="image/*">
                            <vs-button size="small" icon-pack="feather" icon="icon-upload" type="gradient" onclick="document.getElementById('img-upload').click()">Upload Employee Photo</vs-button>
                        </div>
                    </div>
                </div>

                <div class="vx-row">
                    <div class="vx-col sm:w-1/2 w-full mb-6">
                        <vs-input name="name" v-validate="'required|alpha_dash|min:3'" :danger="errors.has('name')" val-icon-danger="clear" :danger-text="errors.first('name')" class="w-full" icon-pack="feather" icon="icon-user" label-placeholder="Employee Name" v-model="form.name" />
                    </div>
                    <div class="vx-col sm:w-1/2 w-full mb-6">
                        <vs-input name="email" v-validate="'required|email'" :danger="errors.has('email')" val-icon-danger="clear" :danger-text="errors.first('email')" class="w-full" icon-pack="feather" icon="icon-mail" label-placeholder="Email" v-model="form.email" />
                    </div>
                </div>

                <div class="vx-row">
                    <div class="vx-col sm:w-1/2 w-full mb-6">
                        <vs-input ref="password" name="password" v-validate="'min:6|max:10'" :danger="errors.has('password')" val-icon-danger="clear" :danger-text="errors.first('password')" type="password" class="w-full" icon-pack="feather" icon="icon-lock" label-placeholder="Password" v-model="form.password" />
                    </div>
                    <div class="vx-col sm:w-1/2 w-full mb-6">
                        <vs-input type="password" name="confirm_password" v-validate="'min:6|max:10|confirmed:password'" :danger="errors.has('confirm_password')" val-icon-danger="clear" :danger-text="errors.first('confirm_password')" class="w-full" icon-pack="feather" icon="icon-lock" label-placeholder="Confirm Password" v-model="form.confirm_password" />
                    </div>
                </div>

                <vs-row vs-align="center" vs-type="flex" vs-justify="center" vs-w="12">
                    <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="12">
                        <vs-button id="btn-edit" :disabled="!validateForm" @click="is_requesting?$store.dispatch('viewWaitMessage', $vs):edit()" icon-pack="feather" icon="icon-save" type="gradient">Edit Employee</vs-button>
                    </vs-col>
                </vs-row>
            </vx-card>
        </div>
    </div>
</template>

<script>
    export default {
        name: "edit-employee",
        mounted() {
            this.getRoles();
        },
        computed: {
            validateForm() {
                return !this.errors.any() && this.form.name !== "" && this.form.email !== '' &&  this.form.password !== '' && this.form.confirm_password !== '';
            }
        },
        data: function () {
            return {
                roles: [],
                form: {
                    email: '',
                    password: '',
                    confirm_password: '',
                    name: '',
                    image: null,
                    role: '',
                },
                uploadedImage: null,
                is_requesting: false
            }
        },
        methods: {
            //Get A List Of All Roles.
            getRoles()
            {
                this.$vs.loading({container: this.$refs.edit.$refs.content, scale: 0.5});
                this.$store.dispatch('rolesAndPermissions/getRoles', '')
                    .then(response => {
                        this.roles = response.data.data.data;
                        this.getEmployeeData();
                        this.form.role = this.roles[0].name;
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

            getEmployeeData() {
                this.$store.dispatch('employee/view', this.$route.params.id)
                    .then(response => {
                        this.$vs.loading.close(this.$refs.edit.$refs.content);
                        this.form = response.data.data.data;
                        this.form.role = response.data.data.data.roles[0].name;
                        this.uploadedImage = this.form.image?this.form.image:'/images/avatar-s-11.png';
                        this.form.image = null;
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

            edit() {
                if (!this.validateForm) return;

                this.is_requesting=true;
                this.$vs.loading({container: `#btn-edit`, color: 'primary', scale: 0.45});
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
                    else if(key === 'password'){
                        if (this.form[key]!=='') {
                            form_data.append(key, this.form[key]);
                        }
                    }
                    else {
                        form_data.append(key, this.form[key]);
                    }
                }

                this.$store.dispatch('employee/update', {id: this.$route.params.id, data: form_data})
                    .then(response => {
                        this.is_requesting=false;
                        this.$vs.loading.close(`#btn-edit > .con-vs-loading`);
                        this.$router.push(`/dashboard/employee/${this.$route.params.id}`);
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
                        this.$vs.loading.close(`#btn-edit > .con-vs-loading`);
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
            },

            removeTelephone (item) {
                this.form.phones.splice(this.form.phones.indexOf(item), 1)
            },

            addTelephone () {
                if (this.Telephone !== '') {
                    this.form.phones.push({
                        'country_code': '+20',
                        'number': this.Telephone,
                    });
                    this.Telephone = "";
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
