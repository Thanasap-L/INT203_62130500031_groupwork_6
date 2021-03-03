const app = {
    data() {
        return {
            image: './images/1.jpg',
            name: 'Thanasap Leelapisuth',
            position: 'Student',
            article: '25',
            follower: '103',
            rating: '7.0',
            firstname: null,
            lastname: null,
            age: null,
            gender: null,
            email: null,
            phone: null,
            chosendegree: null,
            degree_lists: [{ degree_id: 1, degree_name: 'Bachelor Degrees'},
                           { degree_id: 2, degree_name: 'Master Degrees'},
                           { degree_id: 3, degree_name: 'Doctor Degrees'}],
            errors: []
        }
    },
    methods: {
        checkForm() {
            this.errors = [];

            if (!this.firstname) {
                this.errors.push('First name required.')
            }
            if (!this.lastname) {
                this.errors.push('Last name required.')
            }
            if (!this.age) {
                this.errors.push('Age required.')
            }
            if (!this.gender) {
                this.errors.push('Gender required.')
            }
            if (!this.email) {
                this.errors.push('Email required.')
            } else if (!this.validEmail(this.email)) {
                this.errors.push('Valid email required.')
            }
            if (!this.phone) {
                this.errors.push('Phone required.')
            }
            if (!this.chosendegree) {
                this.errors.push('Degree required.')
            }
            if (!this.errors.length) {
                alert("Registered successfully.")
            }
        },
        validEmail(email) {
            var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(email);
        }
    }
}
var mountApp = Vue.createApp(app).mount('#app')