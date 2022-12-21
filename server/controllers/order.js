import Order from "../models/Order.js";


// Create Cart
export const createOrder = async (req, res) => {
    const newOrder = new Order(req.body)
    try {
        const saveOrder = await newOrder.save()
        res.status(201).json(saveOrder);
    } catch (error) {
        res.status(500).json("Something Wrong");
    }
}

// Update Cart
export const updateOrder  = async (req, res) => {
  try {
    const updateOrder = await Order.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(201).json(updateOrder);
  } catch (error) {
    res.status(500).json("Something Wrong");
  }
};

// Delete Cart
export const deleteOrder  = async (req, res) => {
  try {
    await Order.findByIdAndDelete(req.params.id);
    res.status(201).json("Order Has Been Deleted");
  } catch (error) {
    res.status(500).json("Something Wrong");
  }
};

// Single User Cart
export const singleOrder  = async (req, res) => {
  try {
    const singleOrder = await Order.find({userId: req.params.userId});
    res.status(201).json(singleOrder);
  } catch (error) {
    res.status(500).json("Something Wrong");
  }
};
// Get All Cart
export const getAllOrder  = async (req, res) => {

  try {
  
    const orderAll = await Order.find()
    res.status(200).json(orderAll);
  } catch (error) {
    res.status(500).json("Something Wrong");
  }
};

// Order Stats