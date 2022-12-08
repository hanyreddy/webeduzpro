var ctx = document.getElementById('lineChart').getContext('2d');
var lineChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['01','02','0','04','05','06','07','08','09','10','15','20','30','31'],
        datasets: [{
            label: 'Expenses in Dec',
            data: [10,20,30,40,50],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
               
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
               
            ],
            borderWidth: 1
        }]
    },
    options: {
       responsive:true
    }
});