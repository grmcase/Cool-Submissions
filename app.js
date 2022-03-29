var tabs = [
    { name: "Protagonist", codename: "Joker", flipped: false },
    { name: "Anne", codename: "Panther", flipped: false },
    { name: "Ryuji", codename: "Skull", flipped: false }
];

new Vue({
    el: "#flippy-things",
    data: {
        tabs: tabs,
        currentTab: {},
        validation: "",

        form:{
            name:"",
            email:""

        }
    },
    methods:{

        submit:function (){
            this.validation = "";

            if (!this.form.name || this.form.name.length < 2)
                this.validation = "Name must contain at least 2 characters.  ";

            let emailRegex = /^.+\@.+\..+$/;
            if (!this.form.email || !emailRegex.test(this.form.email))
                this.validation += "Email is invalid.  ";
        }


    }
});