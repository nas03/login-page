export async function POST(request) {
    const requestBody = await request.json();
    const { email, password, confirm } = requestBody;
    let fail = false
    if (password != confirm)
        fail = true;
    return Response.json(
        {
            status: 200,
            fail: fail
        }
    )

}