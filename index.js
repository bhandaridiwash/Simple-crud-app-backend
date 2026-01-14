console.log("Hello, World!");
const mongoose = require('mongoose');
const Product = require('./models/product.model.js');
const productRoute = require('./routes/product.route.js');
const express= require('express')
const app = express() 

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


//routes
app.use("/api/products", productRoute);


// Home route
app.get('/', (req, res) => {
  res.send("Welcome to the CRUD App Server");
});




// // ✅ GET all products
// app.get('/api/products', async (req, res) => {
//   try {
//     const products = await Product.find({});
//     res.status(200).json(products);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: error.message });
//   }
// });


// app.get('/api/products/:id', async (req, res) => {
//   try {
//     const { id } = req.params;
//     const product = await Product.findById(id);
//     res.status(200).json(product);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: error.message });
//   }
// });

// ✅ POST create product
// app.post('/api/products', async (req, res) => {
//   try {
//     const product = await Product.create(req.body);
//     res.status(201).json(product);
//   } catch (error) {
//     console.error(error);
//     res.status(400).json({ message: error.message });
//   }
// });


// Update a product
// app.put('/api/products/:id', async (req, res) => {
//   try {

//     const { id } = req.params;
//     const product = await Product.findByIdAndUpdate(id, req.body);

//     if (!product) {
//         return res.status(404).json({ message: `Cannot find any product with ID ${id}` });
//     }
//     const updatedProduct = await Product.findById(id);
//     res.status(200).json(updatedProduct);

//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: error.message });
//   }
// });

// Delete a product
// app.delete('/api/products/:id', async (req, res) => {
//     try { 
//         const { id } = req.params;
//         const product = await Product.findByIdAndDelete(id);

//         if (!product) {
//             return res.status(404).json({ message: `Cannot find any product with ID ${id}` });
//         }
//         res.status(200).json({ message: "Product deleted successfully", product });
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ message: error.message });
//     }
// });


app.listen(3000, () => {
    console.log("Server is running on port 3000");
});

mongoose.connect("mongodb+srv://admin:gC9viUdKqOH4V5GX@backenddb.1zndltm.mongodb.net/?appName=BackendDB")
.then(() => {
    console.log("Connected to MongoDB");
})
.catch((err) => {
    console.log("Error connecting to MongoDB:", err);
});

