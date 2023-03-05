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

// export const getOne = async (req, res) => {
//     try {
//         const postId = req.params.id;
//
//         PostModel.findOneAndUpdate(
//             {
//             _id:postId,
//             },
//             {
//                 $inc:{viewsCount: 1},
//             },
//             {
//                 returnDocument:'after',
//             },
//             (err,doc) => {
//                 if(err){
//                     console.log(err);
//                    return res.status(500).json({
//                         message: 'Can not give articles'
//                     });
//                 }
//
//                 if(!doc){
//                     return res.status(404).json({
//                         message:'article not found',
//                     });
//                 }
//                 res.json(doc)
//             },
//             );
//     } catch (err) {
//         console.log(err);
//         res.status(500).json({
//             message: 'Can not get articles'
//         })
//     }
// }


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