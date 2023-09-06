import prisma from "@/app/libs/prismadb"

import getSession from "./getSession"

/**
 * We are getting the current user information from the server so that we don't need to request for that manually every time we need it.
 * In that case getSession helps to do that.
 */

const getCurrentUser = async () => {
  try {
    const session = await getSession()

    if (!session?.user?.email) {
      return null
    }

    const currentUser = await prisma.user.findUnique({
      where: {
        email: session.user.email as string,
      },
    })

    if (!currentUser) {
      return null
    }

    return currentUser
  } catch (error: any) {
    return null
  }
}

export default getCurrentUser
