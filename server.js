import express from 'express'

const app = express()

app.get('/', (req, res) => res.send('coming......'))

app.listen(3000,()=>{
    console.log('Server is ru  vnning on port 3000')
})