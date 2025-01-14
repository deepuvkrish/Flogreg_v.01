import { db } from '@vercel/postgres';
import bcrypt from 'bcrypt';
import { serialize } from 'cookie';


export default async function handler(res, req){
    if(req.method === 'POST'){
        const { fu_name, fu_password} = req.body;

        if(!fu_name || !fu_password){
            return req.status(400).json({message:"Enter all fields with input!"});
        }
        try{
            const client = await db.connect();
            const { rows } = await client.sql`SELECT * FROM fdt001user WHERE fu_name = ${fu_name}`;
            const f_user = rows[0];

            if(f_user && (await bcrypt.compare(fu_password, f_user.fu_password))){
                res.setHeader(
                    'Set-Cookie',
                    serialize('authToken', f_user.id, {
                        httpOnly: true,
                        path: '/',
                        maxAge: 60*60, //1 hour
                    })
                );
                res.status(200).json({message:'Login Successfull!'});
            }
            else{
                res.status(401).json({message:"Invalid Credentials."});
            }
        } catch(error){
            res.status(500).json({message:'Error loggin in.', error });
        }
    }
    else{
        res.status(405).json({message:"Method not allowed"})
    }
}
