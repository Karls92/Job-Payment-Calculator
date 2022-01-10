const app = new Vue({
    el: '#app',
    data: {
        title: 'Job Payment Calculator',
        hours: 0.00,
        cost_hour: 0.00,
        total: 0.00
    },
    computed: {
        calculatePayment(){
            this.total = this.cost_hour * this.hours;
            return this.total.toFixed(2);
        }
    }
})