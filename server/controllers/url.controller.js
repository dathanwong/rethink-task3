const { Url } = require("../models/url.model");
const domainName = "www.myshorturl.com";

module.exports.index = (req, res)=>{
    res.json({
        message: "working"
    });
}

module.exports.findAll = (req, res)=>{
    Url.find({})
        .then(results => res.json(results))
        .catch(err => res.json(err));
}

module.exports.findById =(req, res)=>{
    Url.findOne({_id: req.params.id})
        .then(result => res.json(result))
        .catch(err => res.json(err));
}

module.exports.create = (req, res) =>{
    Url.create(req.body)
        .then(result =>{
            //Convert ID to hexadecimal string then update redirect in the db
            let hex = Number(result._id).toString(16);
            let redirect = `${domainName}/${hex}`;
            Url.findByIdAndUpdate(result._id, {redirect: redirect})
            .then(response =>{
                res.json({redirect: redirect});
            })
            .catch(err => res.status(400).json(err));
        } )
        .catch(err => res.status(400).json(err));
}

module.exports.delete = (req, res) =>{
    Url.deleteOne({_id: req.params.id})
        .then(result =>{
            res.json(result);
        } )
        .catch(err => res.json(err));
}

module.exports.update = (req, res) =>{
    Url.updateOne({_id: req.params.id}, req.body, {new:true, runValidators: true})
        .then(result =>{
            res.json(result);
        })
        .catch(err => res.status(400).json(err));
}
