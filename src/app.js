const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const db = require('./utils/database');
const initModel = require('./models/init_model');
const userRouter = require('./routes/user.routes');
const todoRouter = require('./routes/todo.routes');
const categoryRouter = require('./routes/categories.routes');
const subCategoryRouter = require('./routes/sub_categories.routes');

const app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

app.use(userRouter);
app.use(todoRouter);
app.use(categoryRouter);
app.use(subCategoryRouter);

initModel();

const PORT = 65350;//Puerto del servidor localhost

db.authenticate()
 .then(()=> {
    console.log('Base de datos conectada.')

 })
 .catch((error) => console.log(error));

  db.sync({force:false})//force:true para borrar los datos de la BDD y hacer modifocaciones a las tablas
                       //force:false Cuando ya se ha borrado y se van a ingresar nuevos datos a la BDD.

.then(()=> {
   console.log('Base de datos sincronizada.')
})
.catch((error) => console.log(error));
 


app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
    
 })



