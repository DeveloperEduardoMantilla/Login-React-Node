import {conex} from "../../config/atlas.js";
import {generateToken} from "../../config/generateToken.js";

const validarUsuario=async(req,res)=>{
    try {
        let {user,password} = req.body;
        
        let db = await conex();
        let usuario = db.collection("usuario");
        let result = await usuario.find({usuario:user,password:password}).toArray();

        if(Object.keys(result).length === 0){
            res.status(400).send({message:"Usuario/Contraseña incorrecto"})
            return
        }else{
            let token = await generateToken(result[0])
            req.headers["X-Authorization"] = "Bearer " + token
            res.status(200).send({
                status: 200,
                redirectUrl: "Usuario Logueado",
                success: true,
                headers: req.headers
            });
            
        }
    } catch (error) {
        console.log("Error Real =>"+error);
        res.status(500).send({message:error});
        
    }
}

export {
    validarUsuario
}