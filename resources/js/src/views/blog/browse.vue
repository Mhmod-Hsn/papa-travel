<template>
    <div class="vx-col w-full mb-base">
        <vx-card ref="browse" title="Blog List" collapse-action refreshContentAction @refresh="getBlogs">
            <vs-table search :data="blogs">
                <template slot="header">
                    <vs-button v-if="can('create-post')" to="/dashboard/blog/create" size="small" icon-pack="feather" icon="icon-plus">Create Blog</vs-button>
                </template>
                <template slot="thead">
                    <vs-th>#</vs-th>
                    <vs-th>Image</vs-th>
                    <vs-th>Title</vs-th>
                    <vs-th>Created At</vs-th>
                    <vs-th>Action</vs-th>
                </template>
                <template slot-scope="{data}">
                    <vs-tr :key="index" v-for="(blog, index) in blogs">
                        <vs-td :data="blog.id">
                            {{ index+1 }}
                        </vs-td>

                        <vs-td :data="blog.image">
                            <a v-if="blog.image" :href="`${blog.image.url}`" target="_blank"><img :src="`${blog.image.url}`" width="50px" height="50px"></a>
                            <b v-else>No Image</b>
                        </vs-td>

                        <vs-td :data="blog.title">
                            {{ blog.title}}
                        </vs-td>

                        <vs-td :data="blog.created_at">
                            {{ blog.created_at}}
                        </vs-td>

                        <template class="expand-user" slot="expand">
                            <div class="con-expand-users w-full">
                                <vs-row>
                                    <vs-col>
                                        <label class="font-bold">Description: </label>
                                        {{blog.description}}
                                    </vs-col>
                                </vs-row>
                            </div>
                        </template>

                        <vs-td>
                            <vs-row>
                                <div class="flex mb-4">
                                    <div class="w-1/3 ml-5" v-if="can('delete-post')">
                                        <vs-button :id="`btn-delete-${blog.id}`" class="vs-con-loading__container" radius color="danger" type="border" icon-pack="feather" icon="icon-trash" @click="is_requesting?$store.dispatch('viewWaitMessage', $vs):confirmDeleteBlog(blog)"></vs-button>
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
            this.getBlogs();
        },
        data: function (){
            return {
                blogs: [],
                is_requesting: false
            }
        },
        methods: {
            getBlogs(){
                this.$store.dispatch('blog/getData', '')
                    .then(response => {
                        this.blogs = response.data.data.data;
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

            confirmDeleteBlog(blog)
            {
                this.$vs.dialog({
                    type: 'confirm',
                    color: 'danger',
                    title: `Are you sure!`,
                    text: 'This data can not be retrieved again.',
                    accept: this.deleteBlog,
                    parameters: [blog]
                });
            },

            deleteBlog(params)
            {
                this.is_requesting=true;
                this.$vs.loading({container: `#btn-delete-${params[0].id}`, color: 'danger', scale: 0.45});
                this.$store.dispatch('blog/delete', params[0].id)
                    .then(response => {
                        this.is_requesting = false;
                        this.$vs.loading.close(`#btn-delete-${params[0].id} > .con-vs-loading`);
                        this.blogs = this.blogs.filter(blog => {return blog.id !== params[0].id});
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
