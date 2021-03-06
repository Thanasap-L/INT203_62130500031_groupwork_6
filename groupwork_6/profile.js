const constraints = {
    firstname: {
        presence: { message: 'is required' },
        format: {
            pattern: "[a-z]+",
            message: "can only contain a-z"
        }
    },
    lastname: {
        presence: {
            message: 'is required'
        },
        format: {
            pattern: "[a-z]+",
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
        presence: {
            message: 'is required'
        }
    },
    email: {
        email: {
            message: "doesn't look like a valid"
        }
    },
    phone: {
        presence: true,
        length: {
            minimum: 10,
            message: "must be at least 10 digits"
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
            newAage: null,
            newGender: null,
            newEmail: null,
            newPhone: null,
            newChosendegree: "",
            degree_lists: [{ degree_id: 1, degree_name: 'Bachelor Degrees' },
            { degree_id: 2, degree_name: 'Master Degrees' },
            { degree_id: 3, degree_name: 'Doctor Degrees' }],
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
            if (this.errors) {
                e.preventDefault();
            }
            else {
                alert("Your personal is updated")
            }
        },
        submit() {
            this.newFirstname = this.firstname
            this.newLastname = this.lastname
            this.newAge = this.age
            this.newPhone = this.phone
            this.newChosendegree = this.chosendegree
        }
    }
}
var mountApp = Vue.createApp(app).mount('#app')