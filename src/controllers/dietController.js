import DietTableSchema from '../models/dietModel';

function createDietTable(req, res) {
    const {
        nombre_dieta,
        numero_dias,
        descripcion,
        desayuno,
        merienda_mañana,
        almuerzo,
        merienda_tarde,
        cena
    } = req.body;

    const dietTable = new DietTableSchema();
    dietTable.nombre_dieta = nombre_dieta;
    dietTable.numero_dias = numero_dias;
    dietTable.descripcion = descripcion;
    dietTable.desayuno = desayuno;
    dietTable.merienda_mañana = merienda_mañana;
    dietTable.almuerzo = almuerzo;
    dietTable.merienda_tarde = merienda_tarde;
    dietTable.cena = cena;

    dietTable.save((err, dietTableStored) => {
        if (err) {
            res.status(500).send({ message: 'Error en el servidor' })
        } else {
            if (!dietTableStored) {
                res.status(404).send({ message: 'Error al crear la tabla de nutrientes' })
            } else {
                res.status(201).send(dietTableStored)
            }
        }
    })
}

function getAllDietTable(req, res) {
    DietTableSchema.find({})
        .then(dietTableArray => {
            res.status(200).send(dietTableArray)
        })
        .catch(err => {
            res.status(500).send({ message: 'Error en el servidor' })
        })
}

function getDietTable(req, res) {
    const {
        nombre_dieta
    } = req.query
    NutrientTableSchema.find({ nombre_dieta })
        .then(dietTable => {
            res.status(200).send(dietTable)
        })
        .catch(err => {
            res.status(500).send({ message: 'Error en el servidor' })
        })
}

export default {
    createDietTable,
    getAllDietTable,
    getDietTable
}