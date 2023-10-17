const express = require('express')

//crear el objeto de la aplicacion
const app = express()

//url de prueba;
app.get('/prueba', (req , res )=>{
    //Ejempllo de response basico
    res.send("Hola")
}) 

//uri de bootcamps
//1 seleccionar todos los bootcamps
app.get('/bootcamps',
        (req, res)=>{
            return res.json({
                success: true,
                msg: "seleccionando todos los bootcamps"
            })
        })

//2 seleccionar el bootcamp cuyo id se passe por parametro
app.get('/bootcamps/:id',
        (req, res)=>{
            bootcampId = req.params.id 
            return res.json(
                {
                    success: true,
                    msg: `seleccionando bootcamp cuyo id es : ${bootcampId} `
                }
            )
        })

//3 crear bootcamp
app.post('/bootcamps',
        (req, res)=>{
            return res.json({
                success: true,
                msg: "creando ando un bootcamp"
            })
        })

//4 editar bootcamp por id
app.put('/bootcamps/:id',
        (req, res)=>{
            bootcampId = req.params.id 
            return res.json(
                {
                    success: true,
                    msg: `editando bootcamp cuyo id es : ${bootcampId} `
                }
            )
        })

//5 eliminar bootcamp por id
app.delete('/bootcamps/:id',
        (req, res)=>{
            bootcampId = req.params.id 
            return res.json(
                {
                    success: true,
                    msg: `eliminando bootcamp cuyo id es : ${bootcampId} `
                }
            )
        })


//uri de cursos
//1 seleccionar todos los cursos
app.get('/cursos',
        (req, res)=>{
            return res.json({
                success: true,
                msg: "seleccionando todos los cursos"
            })
        })

//2 seleccionar el curso cuyo id se passe por parametro
app.get('/cursos/:id',
        (req, res)=>{
            cursoId = req.params.id 
            return res.json(
                {
                    success: true,
                    msg: `seleccionando curso cuyo id es : ${cursoId} `
                }
            )
        })

//3 crear curso
app.post('/cursos',
        (req, res)=>{
            return res.json({
                success: true,
                msg: "creando ando un curso"
            })
        })

//4 editar curso por id
app.put('/cursos/:id',
        (req, res)=>{
            cursoId = req.params.id 
            return res.json(
                {
                    success: true,
                    msg: `editando curso cuyo id es : ${cursoId} `
                }
            )
        })

//5 eliminar curso por id
app.delete('/cursos/:id',
        (req, res)=>{
            cursoId = req.params.id 
            return res.json(
                {
                    success: true,
                    msg: `eliminando curso cuyo id es : ${cursoId} `
                }
            )
        })


//uri de reviews
//1 seleccionar todas las reviews
app.get('/reviews',
        (req, res)=>{
            return res.json({
                success: true,
                msg: "seleccionando todas las reviews"
            })
        })

//2 seleccionar la review cuyo id se passe por parametro
app.get('/reviews/:id',
        (req, res)=>{
            reviewId = req.params.id 
            return res.json(
                {
                    success: true,
                    msg: `seleccionando review cuyo id es : ${reviewId}`
                }
            )
        })

//3 crear review
app.post('/reviews',
        (req, res)=>{
            return res.json({
                success: true,
                msg: "creando ando una review"
            })
        })

//4 editar review por id
app.put('/reviews/:id',
        (req, res)=>{
            reviewId = req.params.id 
            return res.json(
                {
                    success: true,
                    msg: `editando review cuyo id es : ${reviewId} `
                }
            )
        })

//5 eliminar review por id
app.delete('/reviews/:id',
        (req, res)=>{
            reviewId = req.params.id 
            return res.json(
                {
                    success: true,
                    msg: `eliminando review cuyo id es : ${reviewId}`
                }
            )
        })


//uri de usuarios
//1 seleccionar todos los usuarios
app.get('/usuarios',
        (req, res)=>{
            return res.json({
                success: true,
                msg: "seleccionando todos los usuarios"
            })
        })

//seleccionar el usuario cuyo id se passe por parametro
app.get('/usuarios/:id',
        (req, res)=>{
            usuarioId = req.params.id 
            return res.json(
                {
                    success: true,
                    msg: `seleccionando usuario cuyo id es : ${usuarioId} `
                }
            )
        })

//3 crear usuario
app.post('/usuarios',
        (req, res)=>{
            return res.json({
                success: true,
                msg: "creando ando un usuario"
            })
        })

//4 editar usuario por id
app.put('/usuarios/:id',
        (req, res)=>{
            usuarioId = req.params.id 
            return res.json(
                {
                    success: true,
                    msg: `editando usuario cuyo id es : ${usuarioId}`
                }
            )
        })

//5 eliminar usuario por id
app.delete('/usuarios/:id',
        (req, res)=>{
            usuarioId = req.params.id 
            return res.json(
                {
                    success: true,
                    msg: `eliminando usuario cuyo id es : ${usuarioId}`
                }
            )
        })


//definir puerto de servidor
const PUERTO = 4500 

//definir servidor
 app.listen( PUERTO, 
              console.log(`servidor ejecutando en ${ PUERTO }`) )