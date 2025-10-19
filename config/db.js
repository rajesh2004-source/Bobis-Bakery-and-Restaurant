const { default: mongoose } = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
async function connectToDatabase() {
    try {
        
        // await mongoose.connect('mongodb+srv://24mscs15:24mscs15@cluster0.xu0vm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', { useNewUrlParser: true });
          await mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true });
        
        console.log('Connected to MongoDB database!'.bgYellow.black);
    } catch (err) {
        console.error('Error connecting to MongoDB database:', err);
    }
}
connectToDatabase();