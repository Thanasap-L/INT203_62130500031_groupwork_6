const constraints = {
    firstname: {
        presence: {message: "is required"},
        format: {
            pattern: "[a-z]+",
            message: "can only contain a-z"
        }
    },
    lastname: {
        presence:{message: "is required"},
        format: {
            pattern: "[a-z]+",
            message: "can only contain a-z"
        }
    },
    nickname: {
        presence:{message: "is required"},
        format: {
            pattern: "[a-z]+",
            message: "can only contain a-z"
        }
    },
    age: {
        presence: true,
        numericality: {
            lessThan: 150,
            notValid:"must be integer"
        }
    },
    chosensubject: {
        presence: true
    },
    email: {
        email:{
        message: "doesn't look like a valid "
      }
    }
}
const app = {
    data() {
        return {
            url: "./images/62130500033.jpg",
            Firstname: null,
            Lastname: null,
            Age: null,
            Education: null,
            Nickname: null,
            Email:null,
            Chosensubject:"",
            subject_lists: [{
                    subject_id: 1,
                    subject_name: 'Intro to Vue 3'
                },
                {
                    subject_id: 2,
                    subject_name: 'Vue 3 Forms'
                },
                {
                    subject_id: 3,
                    subject_name: 'Vue 3 Reactivity'
                }
            ],
            errors: null
        }
    },
    methods: {
        checkForm(e){
            this.errors = validate({firstname: this.Firstname,
                                    lastname: this.Lastname,
                                    age: this.Age,
                                    nickname:this.Nickname,
                                    chosensubject: this.Chosensubject,
                                     email:this.Email},
                                    constraints)
            if(this.errors){
                e.preventDefault();
            }
            else{
                alert("You profile is updated successful")
            }
        },
        submit(){
            this.Firstname=this.firstname
            this.Lastname=this.lastname
            this.Nickname=this.nickname
            this.Age=this.age
            this.Chosensubject=this.chosensubject
            this.Email=this.email
        }
    }


}
mountedApp = Vue.createApp(app).mount('#app')