const mongoose = require('mongoose');
const mongoURI = "mongodb+srv://komalkhatal24:komal2402@cluster0.io5vwbu.mongodb.net/food?retryWrites=true&w=majority&appName=Cluster0";

const mongoDB = async () => {
    try {
        const connection = await mongoose.connect(mongoURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

        if (connection) {
            console.log("Connected to MongoDB successfully");
            const fetched_data = await mongoose.connection.db.collection("food_items").find({}).toArray();
            const foodcategory = await mongoose.connection.db.collection("food_category").find({}).toArray();

            global.food_items = fetched_data;
            global.food_category = foodcategory;

            console.log(global.food_items);
            console.log(global.food_category);
        } else {
            console.error("Could not connect to MongoDB");
            process.exit(1);
        }
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
};

module.exports = mongoDB;
7