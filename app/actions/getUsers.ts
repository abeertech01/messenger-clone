import prisma from "@/app/libs/prismadb"

import getSession from "./getSession"

const getUsers = async () => {
  const session = await getSession()

  if (!session?.user?.email) {
    return []
  }

  /**
   * We don't want to include ourselves in this list because obviously we don't want to have a conversation with us.
   */
  try {
    const users = await prisma.user.findMany({
      orderBy: {
        createdAt: "desc",
      },
      where: {
        NOT: {
          email: session.user.email,
        },
      },
    })

    return users
  } catch (error) {
    return []
  }
}

export default getUsers
