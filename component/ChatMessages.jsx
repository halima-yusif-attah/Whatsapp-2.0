'use client'

import styled from 'styled-components'
import Head from 'next/head'
import Sidebar from '@/component/Sidebar'
import ChatScreen from '@/component/ChatScreen'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '../firebase'
import getRecipientEmail from '@/utils/getRecipientEmail'
import { useSidebar } from '@/context/useSidebarContext'


const ChatMessages = ({ chat, messages }) => {
  const [user] = useAuthState(auth)
  const { show, showSidebar } = useSidebar();

  console.log("show-Cmsg.jsx", show)


  return (
    <Container>
        <Head>
            <title>Chat with {getRecipientEmail(chat.client, user) }</title>
        </Head>
        <Sidebar show={show} />
        <ChatContainer>
          <ChatScreen chat={chat} messages={messages} show={show} showSidebar={showSidebar} />
        </ChatContainer>
    </Container>
  )
}

export default ChatMessages


const Container = styled.div`
  display: flex
`

const ChatContainer = styled.div`
  flex: 1;
  overflow: scroll;
  height: 100vh;

  ::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
`


