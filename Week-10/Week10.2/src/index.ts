import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function insertUser(username: string, password: string, firstName: string, lastName: string) {
  const res = await prisma.user.create({
    data:{
        email: username,
        firstname: firstName,
        lastname: lastName,
        password: password,
    }
  })
  console.log(res)
}

// insertUser('p@gmail.com',"password",'priyam', "maini");


async function updateUser(username:string, firstname: string, lastname: string) {
    const res = await prisma.user.update({
        where:{
            email: username
        },
        data:{
            firstname,
            lastname
        }
    })
    console.log(res);
    
}

// updateUser('p@gmail.com', 'priyammm', 'mainiiiii')


async function getUser(username:string) {
    const user = await prisma.user.findFirst({
        where:{
            email: username
        }
    })
    console.log(user);
    
}

getUser('p@gmail.com')