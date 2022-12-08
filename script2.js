var ctx = document.getElementById('doughnut').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: ['Present','Absent'],
        datasets: [{
            label: 'Attendance',
            data: [70,30],
            backgroundColor: [
                'green',
                'red',
                
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                
            ],
            borderWidth: 1
        }]
    },
    options: {
       responsive:true
    }});