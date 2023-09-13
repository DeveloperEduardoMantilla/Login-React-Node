import {conex} from "../../config/atlas.js";

const validarUsuario=async(req,res)=>{
    try {
        let db = await conex();
        let usuario = db.collection("usuario");
        let result = await usuario.find().toArray();
        return res.status(200).send(result); 

    } catch (error) {
        res.status(500).send({message:error});
    }
}

export {
    validarUsuario
}