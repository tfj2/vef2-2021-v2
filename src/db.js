import pg from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const {
  DATABASE_URL: connectionString,
} = process.env;

if (!connectionString) {
  console.error('Vantar DATABASE_URL');
  process.exit(1);
}

export async function query(q){
  const client = await pool.connect();

try{
  const result = await client.query(q);
  return result;
}catch(e){
  console.error('Error selecting', e);
}finally{
client.release();
}
}
