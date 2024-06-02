'use client'
import React, { useState, useEffect } from 'react';
import styles from '../../styles/Chat.module.css';
import Submit from '../../assets/Submit.svg'
import Image from "next/image";

const Chat = () => {
    const [messages, setMessages] = useState<{ message: string; sender: string; time: string }[]>([]);
    const [message, setMessage] = useState('');

    const handleSendMessage = () => {
        if (message.trim()) {
            const currentTime = new Date().toLocaleTimeString('tr-TR', { hour: '2-digit', minute: '2-digit' });
            const newMessage = { message, sender: "user", time: currentTime };
            const updatedMessages = [...messages, newMessage];
            setMessages(updatedMessages);
            localStorage.setItem('chatMessages', JSON.stringify(updatedMessages)); // Mesajları local storage'a yaz
            setMessage('');

            // Simulate receiving a reply
            setTimeout(() => {
                const currentTime = new Date().toLocaleTimeString('tr-TR', { hour: '2-digit', minute: '2-digit' });
                const replyMessage = { message: "Merhaba 👋 Bugün sana nasıl yardımcı olabilirim?", sender: "bot", time: currentTime };
                const updatedMessagesWithReply = [...updatedMessages, replyMessage];
                setMessages(updatedMessagesWithReply);
                localStorage.setItem('chatMessages', JSON.stringify(updatedMessagesWithReply)); // Cevap mesajını local storage'a yaz
            }, 1000);
        }
    };

    useEffect(() => {
        const storedMessages = localStorage.getItem('chatMessages');
        if (storedMessages) {
            setMessages(JSON.parse(storedMessages));
        } else {
            // Başlangıçta bir default mesaj gönder
            const defaultMessage = "Merhaba 👋 Bugün sana nasıl yardımcı olabilirim?";
            const currentTime = new Date().toLocaleTimeString('tr-TR', { hour: '2-digit', minute: '2-digit' });
            setMessages([{ message: defaultMessage, sender: "bot", time: currentTime }]);
            localStorage.setItem('chatMessages', JSON.stringify([{ message: defaultMessage, sender: "bot", time: currentTime }]));
        }
    }, []);

    return (
        <div className={styles.chatContainer}>
            <div className={styles.header}>
                AI Chatbot
            </div>
            <div className={styles.divider}></div>
            <div className={styles.chatArea}>
                {messages.map((msg, index) => (
                    <div
                        key={index}
                        className={msg.sender === 'user' ? styles.sentMessage : styles.receivedMessage}
                    >
                        <div>{msg.message}</div>
                        <div className={styles.time}>{msg.time}</div>
                    </div>
                ))}
            </div>
            <div className={styles.footer}>
                <div className={styles.footerLeftSide}>
                    <div>
                        <input
                            type="text"
                            className={styles.messageInput}
                            placeholder="Yaz..."
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                        />
                    </div>
                    <div className={styles.charCount}>{message.length}/3000</div>
                </div>
                <div className={styles.footerRightSide}>
                    <button className={styles.sendButton} onClick={handleSendMessage}>
                        <Image
                            priority
                            src={Submit}
                            alt="Submit"
                        />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Chat;
