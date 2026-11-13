const errorHandler=(err,req,res,next)=>{
    console.log('error catch:',err.message)
    res.status(err.statusCode || 500).json({
        success:false,
        message:err.message || 'internal server errors'
    })
}
export default errorHandler