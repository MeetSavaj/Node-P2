import jwt from 'jwt-simple';
const TOKEN = "ABC123XYZ" || 'secret';

const encode = (data: any) => jwt.encode(data, TOKEN)

const decode = (data: any) => jwt.decode(data, TOKEN)

export { encode, decode }