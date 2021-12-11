import mongoose from 'mongoose';

const nutrientTableSchema = mongoose.Schema({
    sexo: {
        type: String,
        required: true
    },
    edad: {
        min: {
            type: Number,
            required: true
        },
        max: {
            type: Number,
            required: true
        }
    },
    peso: {
        type: Number,
        required: true
    },
    energia: {
        cantidad: {
            type: Number,
            required: true
        },
        unidad: {
            type: String,
            required: true
        }
    },
    proteinas: {
        cantidad: {
            type: Number,
            required: true
        },
        unidad: {
            type: String,
            required: true
        }
    },
    vitamina_a: {
        cantidad: {
            type: Number,
            required: true
        },
        unidad: {
            type: String,
            required: true
        }
    },
    vitamina_c: {
        cantidad: {
            type: Number,
            required: true
        },
        unidad: {
            type: String,
            required: true
        }
    },
    calcio: {
        cantidad: {
            type: Number,
            required: true
        },
        unidad: {
            type: String,
            required: true
        }
    },
    hierro: {
        cantidad: {
            type: Number,
            required: true
        },
        unidad: {
            type: String,
            required: true
        }
    },
    zinc: {
        cantidad: {
            type: Number,
            required: true
        },
        unidad: {
            type: String,
            required: true
        }
    },
    folato: {
        cantidad: {
            type: Number,
            required: true
        },
        unidad: {
            type: String,
            required: true
        }
    },

});

export default mongoose.model('NutrientTable', nutrientTableSchema);