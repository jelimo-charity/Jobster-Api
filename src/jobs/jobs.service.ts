import { db } from '../drizzle/db';
import { eq } from 'drizzle-orm';
import {   Jobs, TSJob } from '../drizzle/schema';

export const getJobsService = async(): Promise<TSJob[] | null> => {
  const jobsData = await db.select().from(Jobs);
  return jobsData
   
}

// export const getBookService = async (id: number): Promise<TSBook | undefined> => {
//     const booksArray = await db.select().from(Books).where(eq(Books.id, id)).execute();
//     if (booksArray.length === 0) {
//         return undefined;
//     }
//     return booksArray[0];
// };

// export const createBookService = async (book: TIBook) => {
//     await db.insert(Books).values(book).execute();
//     return "Book created successfully";
// };

// export const updateBookService = async (id: number, book: TIBook) => {
//     await db.update(Books).set(book).where(eq(Books.id, id)).execute();
//     return "Book updated successfully";
// };

// export const deleteBookService = async (id: number) => {
//     await db.delete(Books).where(eq(Books.id, id)).execute();
//     return "Book deleted successfully";
// };