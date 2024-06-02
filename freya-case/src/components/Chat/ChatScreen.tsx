'use client'
import React, { useState, useEffect } from 'react';
import styles from '../../styles/Chat.module.css';

const Chat = () => {
    const [messages, setMessages] = useState<{ message: string; sender: string; time: string }[]>([]);
    const [message, setMessage] = useState('');

    useEffect(() => {
        // Başlangıçta bir default mesaj gönder
        const defaultMessage = "Merhaba 👋 Bugün sana nasıl yardımcı olabilirim?";
        const currentTime = new Date().toLocaleTimeString();
        setMessages([{ message: defaultMessage, sender: "bot", time: currentTime }]);
    }, []);

    const handleSendMessage = () => {
        if (message.trim()) {
            const currentTime = new Date().toLocaleTimeString();
            setMessages(prevMessages => [
                ...prevMessages,
                { message, sender: "user", time: currentTime }
            ]);
            setMessage('');
            // Simulate receiving a reply
            setTimeout(() => {
                setMessages(prevMessages => [
                    ...prevMessages,
                    { message: "Merhaba 👋 Bugün sana nasıl yardımcı olabilirim?", sender: "bot", time: new Date().toLocaleTimeString() }
                ]);
            }, 1000);
        }
    };

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
            <div className={styles.inputArea}>
                <input
                    type="text"
                    className={styles.messageInput}
                    placeholder="Yaz..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                />
                <button className={styles.sendButton} onClick={handleSendMessage}>
                    <span role="img" aria-label="send">🚀</span>
                </button>
                <div className={styles.charCount}>{message.length}/3000</div>
            </div>
        </div>
    );
};

export default Chat;
