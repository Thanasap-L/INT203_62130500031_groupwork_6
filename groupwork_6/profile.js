const constraints = {
    firstname: {
        presence: { message: "is required" },
        format: {
            pattern: "[a-zA-Z]+",
            message: "can only contain a-z"
        }
    },
    lastname: {
        presence: { message: "is required" },
        format: {
            pattern: "[a-zA-Z]+",
            message: "can only contain a-z"
        }
    },
    age: {
        presence: true,
        numericality: {
            lessThan: 150,
            notValid: "must be integer"
        }
    },
    gender: {
        presence: { message: "is required" }
    },
    email: {
        email: { message: "doesn't look like a valid" }
    },
    phone: {
        presence: true,
        length: {
            minimum: 10,
            message: "must be at least 10 digits"
        },
        format: {
            pattern: "[0-9]+",
            message: "can only contain and 0-9"
        }
    },
    chosendegree: {
        presence: true
    },
}
const app = {
    data() {
        return {
            image: './images/1.jpg',
            article: '10',
            follower: '112',
            rating: '7.0',
            newFirstname: null,
            newLastname: null,
            newAge: null,
            newGender: null,
            newEmail: null,
            newPhone: null,
            newChosendegree: "",
            degree_lists: [{ degree_id: 0, degree_name: 'Bachelor Degrees' },
            { degree_id: 1, degree_name: 'Master Degrees' },
            { degree_id: 2, degree_name: 'Doctor Degrees' }],
            errors: null
        }
    },
    methods: {
        checkForm(e) {
            this.errors = validate({
                firstname: this.newFirstname,
                lastname: this.newLastname,
                age: this.newAge,
                gender: this.newGender,
                email: this.newEmail,
                phone: this.newPhone,
                chosendegree: this.newChosendegree,
            },
                constraints)
            if (!this.errors) {
                alert("Your personal is updated")
            }
        }
    }
}
var mountApp = Vue.createApp(app).mount('#app')