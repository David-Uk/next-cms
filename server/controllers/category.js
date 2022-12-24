import slugify from "slugify";
import Category from "../models/category"

export const create = async (req, res) => {
    try {
        const { name } = req.body
        const category = await new Category({
            name,
            slug: slugify(name)
        }).save();

        return res.status(201).json({ category })

    } catch (error) {

    }
}