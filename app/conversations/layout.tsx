import getConversations from "../actions/getConversations"
import Sidebar from "../components/sidebar/Sidebar"
import ConversationList from "./components/ConversationList"

export default async function ConversationLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const conversations = await getConversations()

  return (
    // @ts-expert-error Server Compo
    <Sidebar>
      <div className="h-full">
        <ConversationList initialItems={conversations} />
        {children}
      </div>
    </Sidebar>
  )
}
