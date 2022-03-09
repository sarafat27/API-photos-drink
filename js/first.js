const exam = {
    post: 'sub-inspector',
    salary: '',
    event: ['runing', 'jump', 'dragging', 'pushUp', 'sitUp', 'ropeClimbing'],
    centre: {
        physical: 'halishahar',
        written: 'khulshi',
        viva: 'dhaka'
    },
    getSalaryAmount: function (grade) {
        this.salary = grade * 3000;
        return this.salary;
    }
}
// console.log(exam.getSalaryAmount(9));

const description = `My physical exam held in ${exam.centre.physical} and i have performed good in ${exam.event[5]}.My salary will be ${exam.getSalaryAmount(10)} inshalllah`;
console.log(description)