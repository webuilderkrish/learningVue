
new Vue({
    el: '#app',
    data: {
        rendered: false,
        i: null,
        newtest: [
            { id: null  , name: '', location: '' }
                   ],
        render: false,
        arr: [
            { id: 1, name: 'shubham', location: 'latur' },
            { id: 2, name: 'mahesh', location: 'latur' }
        ]
    },
    methods: {
        userDelete(i) {
            if (this.i != null || this.render == true || this.rendered == true) {
                if (this.rendered == true) {
                    alert("Please Add User First")
                } else {
                    alert("Please Update First")
                }
                
            }
            else {
                this.arr.splice(this.arr.indexOf(i), 1)
            }
        },
        userUpdate(index) {
            if (this.rendered == true) {
                alert("Please Add User First")
            } else {
                this.i = index;
                this.render = true;
            }
          
        },
        submit() {
            this.i = null
            this.render = false;
        },
        add(){
            this.rendered = true
        },
        insert(newtest) {
            this.arr.push(this.newtest[0]);
            this.newtest =  [
                { id: null  , name: '', location: '' }
                       ]
            this.rendered = false
        }
    }
})
