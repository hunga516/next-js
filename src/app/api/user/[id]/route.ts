import {users} from "@/app/api/user/route";

export async function GET(req: Request, { params } : {
    params: {
        id: string; //params alway be string
    }
}) {
    const { id } = await params
    const user = users.find(user => user.id === parseInt(id))

    return Response.json(user);
}