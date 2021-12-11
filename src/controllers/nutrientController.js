import NutrientTableSchema from '../models/nutrientModel'

function createNutrientTable(req, res) {
    const {
        sexo,
        edad,
        peso,
        energia,
        proteinas,
        vitamina_a,
        vitamina_c,
        calcio,
        hierro,
        zinc,
        folato
    } = req.body;

    const nutrientTable = new NutrientTableSchema();
    nutrientTable.sexo = sexo;
    nutrientTable.edad = edad;
    nutrientTable.peso = peso;
    nutrientTable.energia = energia;
    nutrientTable.proteinas = proteinas;
    nutrientTable.vitamina_a = vitamina_a;
    nutrientTable.vitamina_c = vitamina_c;
    nutrientTable.calcio = calcio;
    nutrientTable.hierro = hierro;
    nutrientTable.zinc = zinc;
    nutrientTable.folato = folato;

    nutrientTable.save((err, nutrientTableStored) => {
        if (err) {
            res.status(500).send({ message: 'Error del servidor' })
        } else {
            if (!nutrientTableStored) {
                res.status(404).send({ message: 'Error al crear la tabla de nutrientes' })
            } else {
                res.status(201).send(nutrientTableStored)
            }
        }
    });
}

function getAllNutrientTable(req, res) {
    NutrientTableSchema.find({})
        .then(nutrientTableArray => {
            res.status(200).send(nutrientTableArray)
        })
        .catch(err => {
            res.status(500).send({ message: 'Error en el servidor' })
        })
}

function getNutrietnTable(req, res) {
    const {
        sexo,
        edad_min,
        edad_max
    } = req.query
    NutrientTableSchema.find({ sexo, edad_min, edad_max })
        .then(nutrientTable => {
            res.status(200).send(nutrientTable)
        })
        .catch(err => {
            res.status(500).send({ message: 'Error en el servidor' })
        })
}

export default {
    createNutrientTable,
    getAllNutrientTable,
    getNutrietnTable
}
