import {Sequelize} from 'sequelize';

const DATABASE: any = 'test1';
const HOST: any = 'localhost';
const PORT: any = 3306;
const USER: any = 'root';
const PASSWORD: any = 'Meet@2001';

const sequelize = new Sequelize(DATABASE, USER, PASSWORD, {
    host: HOST,
    dialect: 'mysql',
    port: PORT
});


sequelize.authenticate().then(() => {
    console.log("Connection done");
}).catch(async function (err) {
    console.log("Eroor in connection.");
});

const db : any = {}
db.sequelize = sequelize;
db.Sequelize = Sequelize;

export {db as default}