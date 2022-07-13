'use strict'

let Article = require('../models/article');

let articleController = {

    save: (req, res) => {
        let params = req.body;

        let article = new Article();

        article.title = params.title;
        article.content = params.content;
        article.author = params.author;

        article.save((err, articleStored) => {
            if(err || !articleStored){
                return res.status(404).send({
                    status: 'error',
                    message: 'El articulo no se ha guardado'
                })
            }

            return res.status(200).send({
                status: 'success',
                articleStored
            });

        });
    },

    //listar articulos
    getArticles: (req, res) => {
        let query = Article.find({}) //si dejamos en blanco, recibimos todos
        
        query.sort('-date').exec((err, articles) => {
            if(err){
                return res.status(500).send({
                    status: 'error',
                    message: 'Error al extraer los datos'
                })
            }

            if(!articles){
                return res.status(404).send({
                    status: 'error',
                    message: 'No hay articulos para mostrar'
                })
            }
            
            return res.status(200).send({
                status:'success',
                articles
            });
        });
    },
    
    //Eliminar un articulo
    deleteArticle: (req, res) => {
        let articleId = req.params.id;
        Article.findOneAndDelete({
            _id:articleId
        }, (err, articleDelete) => {
            if(err){
                return res.status(500).send({
                    status: 'error',
                    message: 'Error al eliminar el articulo'
                })
            }

            if(!articleDelete){
                return res.status(404).send({
                    status: 'error',
                    message: 'No se ha encontrado el articulos a eliminar'
                })
            }

            return res.status(200).send({
                status:'success',
                article: articleDelete
            });

        })
    }
}

module.exports = articleController;