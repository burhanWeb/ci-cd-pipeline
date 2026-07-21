import express from 'express'

const app = express()

app.get('/', (req, res) => res.send('Hello Wccdcdccorld!'))

app.listen(3000,()=>{
    console.log('Server is ru  vnning on port 3000')
})