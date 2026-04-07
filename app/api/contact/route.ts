type ContactPayload = {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
};

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: Request) {
  const body = (await request.json()) as ContactPayload;

  const name = body.name?.trim() ?? '';
  const email = body.email?.trim() ?? '';
  const phone = body.phone?.trim() ?? '';
  const message = body.message?.trim() ?? '';

  if (!name || !email || !message) {
    return Response.json(
      {
        message: 'Name, email, and project details are required.',
      },
      { status: 400 },
    );
  }

  if (!isValidEmail(email)) {
    return Response.json(
      {
        message: 'Please enter a valid email address.',
      },
      { status: 400 },
    );
  }

  console.log('New website enquiry received', {
    name,
    email,
    phone,
    message,
    receivedAt: new Date().toISOString(),
  });

  return Response.json({
    message: 'Enquiry submitted successfully.',
  });
}
