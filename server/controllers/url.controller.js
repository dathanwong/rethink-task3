const { Url } = require("../models/url.model");

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

module.exports.findByName = (req, res) =>{
    Url.findOne({name: req.params.name})
        .then(results =>{
            res.json(results);
        })
        .catch(err => res.json(err));
}

module.exports.create = (req, res) =>{
    Url.create(req.body)
        .then(result =>{
            res.json(result);
        } )
        .catch(err => res.status(400).json(err));
}

module.exports.delete = (req, res) =>{
    Url.deleteOne({_id: req.params.id})
        .then(result =>{
            initTrie();
            res.json(result);
        } )
        .catch(err => res.json(err));
}

module.exports.update = (req, res) =>{
    Url.updateOne({_id: req.params.id}, req.body, {new:true, runValidators: true})
        .then(result =>{
            initTrie();
            res.json(result);
        })
        .catch(err => res.status(400).json(err));
}

module.exports.getSuggestions = (req, res) =>{
    const results = ts.get(req.body.search);
    res.json(results);
}

module.exports.getByPage = (req, res) =>{
    Url.find().collation({locale:'en',strength: 2}).sort({name:1})
    .then( (results) =>{ 
        let resultsPerPage = 20;
        let start = req.params.page*resultsPerPage;
        let end = start + resultsPerPage;
        let output = results.slice(start, end);
        res.json(output);
    })
    .catch(err =>{
        res.json(err);
    });
}