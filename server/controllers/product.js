import Product from "../models/Product.js";


// Create Product
export const createProduct = async (req, res) => {
    const newProduct = new Product(req.body)
    try {
        const saveProduct = await newProduct.save()
        res.status(201).json(saveProduct);
    } catch (error) {
        res.status(500).json("Something Wrong");
    }
}

// Update Product
export const updateProduct  = async (req, res) => {
  try {
    const updateProduct = await Product.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(201).json(updateProduct);
  } catch (error) {
    res.status(500).json("Something Wrong");
  }
};

// Delete Product
export const deleteProduct  = async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.status(201).json("Product Has Been Deleted");
  } catch (error) {
    res.status(500).json("Something Wrong");
  }
};

// Single Product
export const singleProduct  = async (req, res) => {
  try {
    const singleProducts = await Product.findById(req.params.id);
    res.status(201).json(singleProducts);
  } catch (error) {
    res.status(500).json("Something Wrong");
  }
};
// Get All Product
export const getAllProduct  = async (req, res) => {
  const qNew = req.query.new;
  const qCategory = req.query.category;
  try {
   let products;

   if (qNew) {
    products = await Product.find().sort({createdAt : -1}).limit(5)
   }else if(qCategory){
    products = await Product.find({
        categories:{
            $in: [qCategory]
        }
    })
   }else{
    products = await Product.find()
   }


    res.status(200).json(products);
  } catch (error) {
    res.status(500).json("Something Wrong");
  }
};