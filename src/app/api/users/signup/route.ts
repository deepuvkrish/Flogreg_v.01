import {db} from '@vercel/postgres';
import bcrypt from 'bcrypt';

export default async function handler(req, res){
    if(req.method === 'POST'){
        const {fu_name, fu_email, fu_phone,fu_password} = req.body;
        if(fu_name ||  fu_email ||  fu_phone || fu_password) {
            return res.status(400).json({message: 'All Fields are Required.'});
        }
        try{
            const client = await db.connect();
            const hashedPassword = await bcrypt.hash(fu_password, 10);

            await client.sql`
            INSERT INTO fdt001user (fu_name, fu_email, fu_phone,fu_password)
            VALUES (${fu_name}, ${fu_email}, ${fu_phone}, ${hashedPassword})`;

            res.status(201).json({message:'user registered successfully!'});
        }
        catch(error){
            res.status(500).json({message:'Error in signing up !', error});
        }   
    }
    else{
        res.status(405).json({Message:"Method not allowed!"});
    }
}
