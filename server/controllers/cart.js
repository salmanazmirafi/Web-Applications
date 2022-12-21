import Cart from "../models/Cart.js";


// Create Cart
export const createCart = async (req, res) => {
    const newCart = new Cart(req.body)
    try {
        const saveCart = await newCart.save()
        res.status(201).json(saveCart);
    } catch (error) {
        res.status(500).json("Something Wrong");
    }
}

// Update Cart
export const updateCart  = async (req, res) => {
  try {
    const updateCart = await Cart.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(201).json(updateCart);
  } catch (error) {
    res.status(500).json("Something Wrong");
  }
};

// Delete Cart
export const deleteCart  = async (req, res) => {
  try {
    await Cart.findByIdAndDelete(req.params.id);
    res.status(201).json("Cart Has Been Deleted");
  } catch (error) {
    res.status(500).json("Something Wrong");
  }
};

// Single User Cart
export const singleCart  = async (req, res) => {
  try {
    const singleCart = await Cart.findOne({userId: req.params.userId});
    res.status(201).json(singleCart);
  } catch (error) {
    res.status(500).json("Something Wrong");
  }
};
// Get All Cart
export const getAllCart  = async (req, res) => {

  try {
  
    const cartAll = await Cart.find()
    res.status(200).json(cartAll);
  } catch (error) {
    res.status(500).json("Something Wrong");
  }
};