const questions = [
    "O que aprendi hoje?",
    "O que me deixou aborrecido? E o que eu poderia fazer para melhorar?",
    "O que me deixou feliz",
    "Quantas pessoas ajudei hoje?",
]

let ask = ( index = 0 ) => {
    process.stdout.write("\n\n" + questions[index] + " > ")
}

ask()

let answers = []

process.stdin.on("data", data => {
    //process.stdout.write( data.toString().trim() + "\n")//toString para transformar em string e trim para tirar qualquer enventual espaço que tiver.
    answers.push(data.toString().trim())
    if(answers.length < questions.length) {
        ask(answers.length)
    }else{
        console.log(answers)
        process.exit()
    }
}
)

/* process.on('exit', () => {
    console.log(`
    `))
 */