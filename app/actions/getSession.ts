import { getServerSession } from "next-auth"

import { authOptions } from "../api/auth/[...nextauth]/route"

/**
 * WHAT IS THE SIGNIFICANCE OF THIS ?
 * - getSession gets the session data from the server so that we don't have to call for the session data every time.
 */

export default async function getSession() {
  return await getServerSession(authOptions)
}
