const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const multer = require('multer')
const fs = require('fs')
// const path = require('path')
const userRouter = require('./routes/userRoutes')
const imageModel = require('./model/imageModel')

const app = express();

// middlewares
app.use(express.json())
app.use(cors({origin:true}))
app.use(express.static('uploads'))

// routes
app.use('/user',userRouter)


// multer configuration
const storage = multer.diskStorage({
    destination : (req,file,cb)=> {
        cb(null,'uploads')
    },
    filename : (req,file,cb)=>{
        cb(null,file.originalname)
    }
})

const upload = multer({
    storage : storage
})



// routes to upload image to database
app.post('/upload', upload.single('file'), async(req,res)=>{

    // console.log(req.file);
    try {

        let existImage = await imageModel.findOne({image:req.file.originalname})

        if(existImage){
            throw new Error(`image already exist !`)
        }

        await imageModel.create({image:req.file.originalname})
                .then(data => res.send(data))
                .catch((err)=>{
                    console.log(err);
                })
    } catch (error) {
        console.log(error);
        res.status(404).send({err:`image already exist !`})
    }
})

app.get('/retrive', async(req,res)=>{
    try {

        let data = await imageModel.find()

        res.status(200).send({data:data})
        
    } catch (error) {
        res.status(404).send({msg:error})
    }
})

app.delete('/delete:imageId',async(req,res)=> {
    try {

        let {imageId} = req.params
        // console.log(imageId);
        let result = await imageModel.findByIdAndDelete(imageId)
        
        let data = result.image

        const filePath = `./uploads/${data}`

        fs.unlink(filePath,(err)=>{
            console.log(`got error while delete image from uploads folder`);
        })

        res.status(200).send({data:result})
        
    } catch (error) {
        res.status(404).send({msg:error})
    }
})



// 404 erro-page setting up
app.use((req,res)=>{
    res.send({error:"page not found"})
})


mongoose.connect('mongodb://localhost:27017/webnoxproject')
.then(()=>{
    console.log(`successfully connected to mongoDB`);
    app.listen(8000,()=>{
        console.log(`server running on port - 8000`);
    })
})
.catch((err)=> {
    console.log(` found error while connecting to DB`);
})