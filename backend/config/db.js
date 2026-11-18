async function connectionDB(){
    try{
        await mongoose.connect(process.env.MONGODB_URI)
        console.log('mongoDB connect successfully')
    } catch(error){
        console.log('mongo db connect fialed', error.message)
        process.exit(1)
    }
}

export default connectionDB