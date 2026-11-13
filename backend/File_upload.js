    // npm (install express multer) for file upload
    import express from 'express'
    import  multer from 'multer'
    const app=express()
    app.use(express.json())


    //is my uploads use hova hain is name sy folder banae gy jis my user ki images save hogi
    const storage=multer.diskStorage({
        destination:(req,file,cb)=>cb(null,'uploads'), //yaha uploads use hova hain iska folder bi banaya hain
        filename:(req,file,cb)=>cb(null,Date.now() + '-' +file.originalname)
    })

    //for multiple files
    const fileFilter=(req,file,cb)=>{
        const allowed=['image/png', 'image/jpeg','application/pdf']
        if(allowed.includes(file.mimetype)){
            cb(null,true)
        }else{
            cb(new Error('only png,jpg,pdf files are allowed'))
        }
    }


    const upload=multer({storage,fileFilter,limits:{fileSize:2*1024*1024}})

// yaha images k liye multipart use hova hain
    app.get('/',(req,res)=>{
        res.send(`
            <form action='/upload' method='POST' enctype='multipart/form-data'>   
                <input type='file' name='profile' />
                <button>upload</button>
            </form>

            `)
    })

//yaha upload variable k sat single ka function use kia hain for single photo
    app.post('/upload',upload.single('profile'),(req,res)=>{
        if(!req.file){
            return res.status(400).json({error:'pleade upload file'})
        }
        res.json({
            message:'file upload successfully',
            file:req.file
        })
    })

//one more route for multiple file

    app.post('/upload/photos',upload.array('photos',5),(req,res)=>{
        res.json({
            message:'files upload successfuly',
            files: req.files
        })
    })






    app.listen(3000,()=>{
        console.log('server run on port http://localhost:3000')
    })