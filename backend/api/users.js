const bcrypt = require('bcrypt-nodejs')
const Users = require('../models/Users');
const { hostIp } = require('../.env')
//const GridFsStorage = require("multer-gridfs-storage");
//const Grid = require("gridfs-stream");
//const multer = require("multer");

module.exports = app => {
    const obterHash = (password, callback) => {
        bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(password, salt, null, (err, hash) => callback(hash))
        })
    }
    const save = async (req, res) => {
        const email = req.body.email.trim().toLowerCase()
        const tags = req.body.tags.trim().toLowerCase()

        let { key = "", location: url = "" } = ""

        if (req.file) {
            key = req.file.key;
            url = req.file.location;
        }

        const userExist = await Users.findOne({ email })
        if (userExist) {
            res.status(400).json(`${email} já foi cadastrado\nEsqueceu sua senha?`)
        } else {
            obterHash(req.body.password.trim().toLowerCase(), hash => {
                const user = Users.create({ name: req.body.name, email, password: hash, tags: tags.split(',').map(tag => tag.trim()), key, url, ranking: 0 })
                    .then(_ => res.status(204).send())
                    .catch(err => res.status(400).json(err))
            })
        }
    }
    const update = (req, res) => {
        const { id } = req.params;
        let { key = "", location: url = "" } = ""
        if (req.file) {
            key = req.file.key;
            url = req.file.location;
            if (url == null) {
                url = `http:${hostIp}:3333/files/${key}`;
            }
            user = Users.findByIdAndUpdate(id, { key, url })
                .then(_ => res.status(204).send())
                .catch(err => res.status(400).json(err))
        }
        else {
            const email = req.body.email.trim().toLowerCase()
            const tags = req.body.tags.trim().toLowerCase()
            console.log(req.body)
            obterHash(req.body.password.trim().toLowerCase(), hash => {
                const password = hash

                user = Users.findByIdAndUpdate(id, { name: req.body.name, email, password: hash, tags: tags.split(',').map(tag => tag.trim()) })
                    .then(_ => res.status(204).send())
                    .catch(err => res.status(400).json(err))
            })
        }
    }
    const upload = (req, res) => {
        const { id } = req.params;
        let { key = "", location: url = "" } = ""

        if (req.file) {
            key = req.file.key;
            url = req.file.location;
            if (url == null) {
                url = `http:${hostIp}:3333/files/${key}`;
            }

            user = Users.findByIdAndUpdate(id, { key, url })
                .then(_ => res.status(201).send())
                .catch(err => res.status(400).json(err))
        }
        else {
            return res.status(204).send("Nenhum arquivo enviado")
        }
    }
    const patch = (req, res) => {
        const { id } = req.params;
        const tags = req.body.tags.trim().toLowerCase()

        user = Users.findByIdAndUpdate(id, { tags: tags.split(',').map(tag => tag.trim()) })
            .then(_ => res.status(204).send())
            .catch(err => res.status(400).json(err))

    }
    const profile = async (req, res) => {
        const { id } = req.params;
        const user = await Users.findById(id)
            .catch(err => res.status(400).json(err))
        res.json(user)
    }
    const list = async (req, res) => {
        const top = await Users.find()
            .sort({ ranking: -1 })
            .limit(10)
            .catch(err => res.status(400).json(err))
        res.json(top)
    }
    return { save, update, patch, profile, upload, list }
};