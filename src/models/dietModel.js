import mongoose from 'mongoose';

const dietTableSchema = mongoose.Schema({
    nombre_dieta: {
        type: String,
        required: true
    },
    numero_dias: {
        type: Number,
        required: true
    },
    descripcion: {
        type: String,
        required: true
    },
    desayuno: [
        {
            descripcion: {
                type: String,
                required: true
            }
        }
    ],
    merienda_mañana: [
        {
            descripcion: {
                type: String,
                required: true
            }
        }
    ],
    almuerzo: [
        {
            descripcion: {
                type: String,
                required: true
            }
        }
    ],
    merienda_tarde: [
        {
            descripcion: {
                type: String,
                required: true
            }
        }
    ],
    cena: [
        {
            descripcion: {
                type: String,
                required: true
            }
        }
    ]
});

export default mongoose.model('DietTable', dietTableSchema);