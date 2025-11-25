import mongoose from 'mongoose'

const database = async() => {
    try {
        const db = await mongoose.connect(process.env.mongo_URL);
        console.log("Base de datos conectada a: " + db.connection.name);
    } catch (error) {
        console.log(`Error: ${error.message}`);
        process.exit(1);
    }
}

export default database