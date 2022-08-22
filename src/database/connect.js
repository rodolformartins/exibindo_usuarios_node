const mongoose = require('mongoose');

const connectToDataBase = async () => {
    await mongoose.connect(`mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORLD}@cluster0.ativjbn.mongodb.net/database?retryWrites=true&w=majority`, (error) => {
        if (error) {
            return console.log("Ocorreu um erro ao se conectar com banco de dados!");
        }

        return console.log('Conexão ao banco de dados realizada com sucesso!');
    });
};

module.exports = connectToDataBase;