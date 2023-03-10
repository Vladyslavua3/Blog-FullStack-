import PostModel from "../models/Post.js";


export const getAll = async (req, res) => {
    try {
        const posts = await PostModel.find().populate('user').exec();
        res.json(posts)
    } catch (e) {
        console.log(e);
        res.status(500).json({
            message: 'Can not get articles'
        })
    }
}

export const getOne = async (req, res) => {
    try {
        const postId = req.params.id;


        const post = await PostModel.findOne({_id:postId}).populate('user').exec()

        res.json(post)
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: 'Can not get articles'
        })
    }
};


export const remove = async (req, res) => {
    try {
        const postId = req.params.id;

      PostModel.findOneAndDelete({
            _id:postId,
        },{},(err,doc)=>{
            if(err){
                console.log(err);
                return res.status(500).json({
                    message:'Can not delete article'
                });
            }

            if(!doc){
                return res.status(404).json({
                    message:'Article not found'
                })
            }

            res.json({
                success:true
            })
        })


    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: 'Can not get articles'
        })
    }
};

export const create = async (req, res) => {
    try {
        const doc = new PostModel({
            title: req.body.title,
            text: req.body.title,
            imageUrl: req.body.imageUrl,
            tags: req.body.tags,
            user: req.userId,
        });


        const post = await doc.save();

        res.json(post)


    } catch (e) {
        console.log(e)
        res.status(500).json({
            message: 'Can not create post'
        })
    }
}