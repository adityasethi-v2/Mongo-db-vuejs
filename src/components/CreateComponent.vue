<template>
    <div class="row justify-content-center">
        <div class="col-md-6">
            <h3 class="text-center">Create Student</h3>
            <form @submit.prevent="handleSubmitForm">
                <div class="form-group">
                    <label>Name</label>
                    <input type="text" class="form-control" v-model="person.name" required>
                </div>

                <div class="form-group">
                    <label>Email</label>
                    <input type="email" class="form-control" v-model="person.email" required>
                </div>

                <div class="form-group">
                    <label>Phone</label>
                    <input type="text" class="form-control" v-model="person.phone" required>
                </div>

                <div class="form-group">
                    <button class="btn btn-danger btn-block">Create</button>
                </div>
            </form>
        </div>
    </div>
</template>
<script>
import axios from 'axios';
import { useRouter } from 'vue-router'

export default {
    setup() {
        let person = {}
        // let person =  reactive({});

        function handleSubmitForm() {
            let apiURL = 'http://localhost:4000/api/create-student';
            let router = useRouter();
            axios.post(apiURL, person).then(() => {
                router.push('/view')
                person = {
                    name: '',
                    email: '',
                    phone: ''
                }
            }).catch(error => {
                console.log(error)
            });
        }

        return {
            person,
            handleSubmitForm
        }
    }
}
</script>