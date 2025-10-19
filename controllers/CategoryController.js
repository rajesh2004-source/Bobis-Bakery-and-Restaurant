// const CategoryModel = require("../models/CategoryModel");
// const slugify = require("slugify");

// const createCategoryController = async (req, res) => {
//     try {

//         const { name } = req.body;
//         if (!name) {
//             return res.status(401).json({
//                 errors: {
//                     name: "Name is required."
//                 },
//             })
//         }
//         //check for existing category with same name

//         const categories = await CategoryModel.findOne({ name });
//         if (categories) {
//             return res.status(200).json({
//                 success: true,
//                 message: "catagory already exisits"
//             })
//         }

//         const category = await new CategoryModel({ name, slug: slugify(name) }).save();
//         res.status(201).send({
//             success: true,
//             message: "new category created",
//             category
//         });


//     } catch (error) {
//         console.log(error);
//         res.status(500).send({
//             success: false,
//             error,
//             message: "error in Category"
//         });
//     }

// }


// //update
// const updateCtegoryController = async (req, res) => {
//     try {

//         const { name } = req.body;
//         const { id } = req.params;

//         const updatedcategory = await CategoryModel.findByIdAndUpdate(id, { name, slug: slugify(name) }, { new: true })

//         if (!updatedcategory) {
//             throw Error("No such cateogry exists");
//         }

//         else {
//             res.status(200).json({
//                 success: true,
//                 message: "successfully Updated the Categoy!",
//                 category: updatedcategory
//             })
//         }

//     }
//     catch (error) {
//         return res.status(400).json({
//             error
//         })
//     }


// }

// //all get
// const categoryController = async (req, res) => {
//     try {
//         const getcat = await CategoryModel.find({});
//         res.status(200).json({
//             success: true,
//             message: " All  Categoried!",
//             getcat
//         })

//     } catch (error) {
//         return res.status(400).json({
//             error
//         })
//     }
// }

// const singleCategoryController = async (req, res) => {
//     try {
//         const singlecat = await CategoryModel.findOne({ slug: req.params.slug });
//         res.status(200).json({
//             success: true,
//             message: " single  Categoried!",
//             singlecat
//         })

//     }
//     catch (error) {
//         return res.status(400).json({
//             error
//         })
//     }
// }

// const deleteCategoryController = async (req, res) => {
//     try {

//         const { id } = req.params;
//         const deletecat = await CategoryModel.findByIdAndDelete(id);
//         res.status(200).json({
//             success: true,
//             message: " deleted  Categoried!",
//             deletecat

//         })

//     } catch (error) {
//         return res.status(400).json({
//             error
//         })
//     }
// }

// module.exports = { createCategoryController, updateCtegoryController, categoryController, singleCategoryController, deleteCategoryController };




const CategoryModel = require("../models/CategoryModel");
const slugify = require("slugify");

// Create category
const createCategoryController = async (req, res) => {
    try {
        const { name } = req.body;
        if (!name) {
            return res.status(401).json({
                errors: { name: "Name is required." },
            });
        }

        const existingCategory = await CategoryModel.findOne({ name });
        if (existingCategory) {
            return res.status(200).json({
                success: true,
                message: "Category already exists",
            });
        }

        const category = await new CategoryModel({ name, slug: slugify(name) }).save();
        res.status(201).send({
            success: true,
            message: "New category created",
            category,
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            error,
            message: "Error in creating category",
        });
    }
};

// Update category
const updateCtegoryController = async (req, res) => {
    try {
        const { name } = req.body;
        const { id } = req.params;

        const updatedcategory = await CategoryModel.findByIdAndUpdate(
            id,
            { name, slug: slugify(name) },
            { new: true }
        );

        if (!updatedcategory) {
            throw Error("No such category exists");
        }

        res.status(200).json({
            success: true,
            message: "Successfully updated the category",
            category: updatedcategory,
        });
    } catch (error) {
        res.status(400).json({ error });
    }
};

// Get all categories
const categoryController = async (req, res) => {
    try {
        const categories = await CategoryModel.find({});
        res.status(200).json({
            success: true,
            message: "All categories fetched",
            categories,
        });
    } catch (error) {
        res.status(400).json({ error });
    }
};

// Get single category by slug
const singleCategoryController = async (req, res) => {
    try {
        const category = await CategoryModel.findOne({ slug: req.params.slug });
        res.status(200).json({
            success: true,
            message: "Single category fetched",
            category,
        });
    } catch (error) {
        res.status(400).json({ error });
    }
};

// Delete category
const deleteCategoryController = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await CategoryModel.findByIdAndDelete(id);
        res.status(200).json({
            success: true,
            message: "Category deleted",
            deleted,
        });
    } catch (error) {
        res.status(400).json({ error });
    }
};

module.exports = {
    createCategoryController,
    updateCtegoryController,
    categoryController,
    singleCategoryController,
    deleteCategoryController,
};
