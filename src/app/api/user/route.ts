const users = [
    {
        name: 'Le Ngoc Loc',
        age: 21,
    },
    {
        name: 'Nguyen Bao Tran',
        age: 21,
    }
]

export async function GET() {
    return Response.json(users)
}