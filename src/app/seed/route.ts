import bcrypt from 'bcrypt'
import {db} from '@vercel/postgres'

import {ftUsers} from '@/app/lib/placeholder-data'


const client = await db.connect();


async function logUsers(){
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    await client.sql`
        CREATE TABLE IF NOT EXISTS fdt001user(
            fu_id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
            fu_name VARCHAR(255) NOT NULL,
            fu_email VARCHAR(255) NOT NULL UNIQUE,
            fu_phone VARCHAR(255) NOT NULL UNIQUE,
            fu_password VARCHAR(255) NOT NULL,
            fu_address VARCHAR(500),
            fu_country VARCHAR(50) NOT NULL,
            fu_state VARCHAR(70) NOT NULL,
            fu_sex VARCHAR(15),
            fu_age INT NOT NULL,
            fu_govtIDType VARCHAR(15) NOT NULL,
            fu_govtIDNum VARCHAR(20) NOT NULL UNIQUE,
            fu_role VARCHAR(15) NOT NULL
        );
    `;

    const futUserAdd = await Promise.all(
        ftUsers.map(async (f)=>{
            const hashedPass = await bcrypt.hash(f.fu_password, 10);
            return client.sql`
                INSERT INTO fdt001user (
                    fu_id, 
                    fu_name, 
                    fu_email, 
                    fu_phone, 
                    fu_password, 
                    fu_address, 
                    fu_country, 
                    fu_state, 
                    fu_sex, 
                    fu_age, 
                    fu_govtIDType, 
                    fu_govtIDNum, 
                    fu_role)
                VALUES (
                    ${f.fu_id}, 
                    ${f.fu_name}, 
                    ${f.fu_email}, 
                    ${f.fu_phone}, 
                    ${hashedPass}, 
                    ${f.fu_address}, 
                    ${f.fu_country}, 
                    ${f.fu_state}, 
                    ${f.fu_sex}, 
                    ${f.fu_age}, 
                    ${f.fu_govtIDType}, 
                    ${f.fu_govtIDNum}, 
                    ${f.fu_role})
                ON CONFLICT (fu_id) DO NOTHING;
            `;
        }),
    );
    return futUserAdd;

}


export async function GET(){
    try{
        await client.sql`BEGIN`;
        await logUsers();
        await client.sql`COMMIT`;

        return Response.json({message: 'Database seeded successfully'});
    }
    catch(error){
        await client.sql`ROLLBACK`;
        return Response.json({error},{status:500});
    }
}


