import React, { useState, useRef } from 'react';
import { View, Text, TextInput, Button, ScrollView, StyleSheet } from 'react-native';
import AppHeader from '../../components/appHeader';
import styles from './styles';
import AppWrapper from '../../components/appWrapper';
import { colors } from '../../theme';
import { Icons } from '../../assets';
import { vh } from '../../theme/dimensions';

const Chat: React.FC = () => {
  const [messages, setMessages] = useState([
    { id: '1', text: 'Hello! How can I help you today?', sender: 'receiver' },
  ]);
  const [input, setInput] = useState('');
  const scrollViewRef = useRef<ScrollView>(null); 

  const handleSend = () => {
    if (input.trim()) {
      setMessages((prevMessages) => [
        ...prevMessages,
        { id: String(prevMessages.length + 1), text: input, sender: 'sender' },
      ]);
      setInput('');
      scrollViewRef.current?.scrollToEnd({ animated: true }); 
    }
  };

  const renderMessage = (message:string|number) => (
    <View
      key={message.id}
      style={[
        styles.messageContainer,
        message.sender === 'sender' ? styles.sender : styles.receiver,
      ]}
    >
      <Text style={styles.message}>{message.text}</Text>
    </View>
  );

  return (
    <AppWrapper>
      <AppHeader title='Chat' titleColor={colors.charcol} backicon={Icons.back} backHeight={vh(20)} backWidth={vh(20)}/>
      <ScrollView
        ref={scrollViewRef}
        contentContainerStyle={styles.scrollViewContent}
        keyboardShouldPersistTaps='handled'
        style={styles.cont}
      >
        {messages.map(renderMessage)}
      </ScrollView>
      <View style={styles.inputContainer}>
        <TextInput
          value={input}
          onChangeText={setInput}
          placeholder="Type your message..."
          style={styles.textInput} 
        />
        <Button title="Send" onPress={handleSend} />
      </View>
      </AppWrapper>
  );
};



export default Chat;