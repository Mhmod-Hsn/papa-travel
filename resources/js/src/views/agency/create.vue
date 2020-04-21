<template>
    <div>
        <div class="vx-col w-full mb-base">
            <vx-card ref="create" title="Agency Information">

                <div class="vx-row">
                    <div class="vx-col sm:w-1/2 w-full mb-6">
                        <div class="image-preview" style="display: inline-flex;">
                            <img alt="agency photo" class="preview" :src="uploadedImage?uploadedImage:'/images/avatar-s-11.png'">
                        </div>
                        <div style="display: inline-flex;position: relative;top: -15px;">
                            <input id="img-upload" type="file" @change="previewImage" accept="image/*">
                            <vs-button size="small" icon-pack="feather" icon="icon-upload" type="gradient" onclick="document.getElementById('img-upload').click()">Upload Agency Photo</vs-button>
                        </div>
                    </div>
                </div>

                <div class="vx-row">
                    <div class="vx-col sm:w-1/2 w-full mb-6">
                        <vs-input name="name" v-validate="'required|min:3'" :danger="errors.has('name')"
                                  val-icon-danger="clear" :danger-text="errors.first('name')" class="w-full"
                                  icon-pack="feather" icon="icon-user" label-placeholder="Agency Name" v-model="form.name" />
                    </div>
                    <div class="vx-col sm:w-1/2 w-full mb-6">
                        <vs-input name="email" v-validate="'required|email'" :danger="errors.has('email')" val-icon-danger="clear" :danger-text="errors.first('email')" class="w-full" icon-pack="feather" icon="icon-mail" label-placeholder="Email" v-model="form.email" />
                    </div>
                </div>

                <div class="vx-row">
                    <div class="vx-col sm:w-1/2 w-full mb-6">
                        <vs-input name="address" v-validate="'required|min:3'" :danger="errors.has('address')"
                                  val-icon-danger="clear" :danger-text="errors.first('address')" class="w-full"
                                  icon-pack="feather" icon="icon-at-sign" label-placeholder="Agency Address"
                                  v-model="form.address" />
                    </div>
                    <div class="vx-col sm:w-1/2 w-full mb-6">
                        <vs-input name="phone" v-validate="'required|min:3'" :danger="errors.has('phone')"
                                  val-icon-danger="clear" :danger-text="errors.first('phone')" class="w-full"
                                  icon-pack="feather" icon="icon-phone" label-placeholder="Phone Number"
                                  v-model="form.phone" />
                    </div>
                </div>

                <div class="vx-row">
                    <div class="vx-col sm:w-1/2 w-full mb-6">
                        <vs-input name="working_hours" v-validate="'required|min:3'" :danger="errors.has('working_hours')"
                                  val-icon-danger="clear" :danger-text="errors.first('working_hours')" class="w-full"
                                  icon-pack="feather" icon="icon-clock" label-placeholder="Working Hours"
                                  v-model="form.working_hours" />
                    </div>
                    <div class="vx-col sm:w-1/2 w-full mb-6">
                        <vs-input name="location_embed" v-validate="'required|min:3'" :danger="errors.has('location_embed')"
                                  val-icon-danger="clear" :danger-text="errors.first('location_embed')" class="w-full"
                                  icon-pack="feather" icon="icon-map-pin" label-placeholder="Location *copy embed from google maps*"
                                  v-model="form.location_embed" />
                    </div>
                    <div class="vx-col md:w-1/2 w-full mt-5">
                        <ul class="switch-container">
                            <li>
                                <label>Show in homepage</label>
                                <vs-switch v-model="form.homepage" />
                            </li>
                        </ul>
                    </div>
                </div>

                <div class="vx-row m-2">
                    <vs-textarea label="Description" v-model="form.description" />
                </div>

                <vs-row vs-align="center" vs-type="flex" vs-justify="center" vs-w="12">
                    <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="12">
                        <vs-button id="btn-create" :disabled="!validateForm" @click="is_requesting?$store.dispatch('viewWaitMessage', $vs):create()" icon-pack="feather" icon="icon-save" type="gradient">Create Agency</vs-button>
                    </vs-col>
                </vs-row>
            </vx-card>
        </div>
    </div>
</template>

<script>
    export default {
        name: "add-agency",
        mounted() {
        },
        computed: {
            validateForm() {
                return !this.errors.any() &&
                    this.form.name !== "" &&
                    this.form.email !== '' &&
                    this.form.address !== '' &&
                    this.form.phone !== '' &&
                    this.form.image !== '' &&
                    this.form.description !== '' &&
                    this.form.working_hours !== '' &&
                    this.form.location_embed !== '' &&
                    this.form.phone !== '';
            }
        },
        data: function () {
            return {
                roles: [],
                form: {
                    name: '',
                    email: '',
                    address: '',
                    phone: '',
                    image: null,
                    description: '',
                    working_hours: '',
                    home_page: false,
                    location_embed: ''
                },
                uploadedImage: null,
                is_requesting: false
            }
        },
        methods: {

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
                    }
                    else {
                        form_data.append(key, this.form[key]);
                    }
                }
                this.$store.dispatch('agency/create', form_data)
                    .then(response => {
                        this.is_requesting=false;
                        this.$vs.loading.close(`#btn-create > .con-vs-loading`);
                        this.$router.push(`/dashboard/agency/${response.data.data.data.id}`);
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
