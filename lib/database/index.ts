import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI;

// (global as any).mongoose maksudnya untuk reference objek mongoose dari global type nodejs
// bukan spesifik akses
let cached = (global as any).mongoose || { conn: null, promise: null };

// kenapa membuat pattern seperti ini
// di serverless function dan environment tempat kita membuat kode itu nantinya akan
// menjalankan function secara beberapa kali dalam satu waktu tetapi TIDAK dalam satu putaran
// server proses

// makanya ketika kita bikin koneksi db itu pastikan function tersebut hanya dijalankan sekali
// kalo terjadi beberapa kali maka hasilnya setiap invoke function itu akan menghasilkan koneksi
// yang berbeda (bisa berdampak pada db)

// itulah kenapa kita membutuhkan CACHING connection dan PROMISE connection

export const connectToDatabase = async () => {
  if (cached.conn) return cached.conn;

  if(!MONGODB_URI) throw new Error('MONGODB_URI is missing');

  cached.promise = cached.promise || mongoose.connect(MONGODB_URI, {
    dbName: 'evently',
    bufferCommands: false,
  })

  cached.conn = await cached.promise;

  return cached.conn;
}