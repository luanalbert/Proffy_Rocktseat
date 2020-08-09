const subjects = [
    "Artes",
    "Biologia",
    "Ciências",
    "Educação física",
    "Física",
    "Geografia",
    "História",
    "Matemática",
    "Português",
    "Química",
]
const weekdays = [
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado",
]

// funcionalidades 
function getSubject (subjectNumber){ // função de pegar o valor do array selecionado pela sua posição numérica (materia)
    const position = +subjectNumber -1
    return subjects[position]
}

function convertHoursToMinutes(time){
    const [ hour, minutes ] = time.split(":")
    return Number((hour * 60) + minutes)
}

// exportação para o server
 module.exports = {
    subjects,
    weekdays,
    getSubject,
    convertHoursToMinutes
 }