const validationBodyMovies = (req, res, next)=>{
    let {title, year} = req.body;

    if (title === undefined || year === undefined){
        res.status(400).json({message: "Title and year is required"});
    } else {
        next();
    }
}

const validationBodyCategory = (req, res, next)=>{
    let {name} = req.body;

    if(name === undefined){
        res.status(400).json({message: "Name is required"});
    } else{
        next();
    }
}

module.exports ={
    validationBodyCategory,
    validationBodyMovies
}