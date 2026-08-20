const express = require('express');
const cors = require('cors');

const app = express();

const movieRoutes = require('./routes/movieRoutes');
const categoryRoutes = require('./routes/categoryRoutes');

app.use(cors());

app.use(express.json());

app.use('/api/movie', movieRoutes);
app.use('/api/categories', categoryRoutes);

app.get('/', (req,res)=>{
    res.send('API berjalan - gunakan /api/movies atau /api/categories');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=>{
    console.log(`Server berjalan pada Port ${PORT}`);
});