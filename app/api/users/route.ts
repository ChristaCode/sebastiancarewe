// app/api/users/route.ts

import { NextResponse } from 'next/server';

/**
 * @swagger
 * /api/users:
 *   get:
 *     summary: Returns a list of users
 *     responses:
 *       200:
 *         description: A JSON array of users
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                   name:
 *                     type: string
 */

// Define the GET request handler as a named export
export async function GET() {
  const users = [{ id: 1, name: 'John Doe' }];
  return NextResponse.json(users);
}
