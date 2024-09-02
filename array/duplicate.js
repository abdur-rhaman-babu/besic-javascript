const studentName = ['Munna', 'Raza', 'Sobuz', 'Mushfiq', 'Munna', 'Sumon', 'Raza', 'Sumon']

const singleName = []

for(let i = 0; i<=studentName.length - 1; i++){
    if(!singleName.includes(studentName[i])){
        singleName.push(studentName[i])
    }
}

console.log(singleName)

