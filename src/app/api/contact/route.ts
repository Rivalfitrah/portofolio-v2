
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
    const { name, email, message} = await req.json();

    try {
    const { data, error } = await resend.emails.send({
    from: 'hello <onboarding@resend.dev>', // Ganti dengan verified sender
    to: ['rivalfitrah9@gmail.com'],                    // Email tujuan
    subject: `Pesan baru dari ${name}`,
    replyTo: email,
    html: `<p><strong>Nama:</strong> ${name}</p>
           <p><strong>Email:</strong> ${email}</p>
           <p><strong>Pesan:</strong> ${message}</p>`,
        });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }

}