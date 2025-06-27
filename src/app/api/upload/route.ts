import { writeFile } from 'fs/promises'
import path from 'path'

export async function POST(req: Request) {
  const formData = await req.formData()
  const file = formData.get('image') as File

  if (!file) return new Response('No file uploaded', { status: 400 })

  const bytes = await file.arrayBuffer()
  const buffer = Buffer.from(bytes)

  const fileName = `${Date.now()}-${file.name}`
  const filePath = path.join(process.cwd(), 'public', 'uploads', fileName)

  await writeFile(filePath, buffer)

  const imageUrl = `/uploads/${fileName}`

  return Response.json({ success: true, url: imageUrl })
}
