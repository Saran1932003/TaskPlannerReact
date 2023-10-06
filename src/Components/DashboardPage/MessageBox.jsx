import React, { useState } from 'react';
import '../DashboardPage/MessageBox.css';

function MessageBox() {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [tags, setTags] = useState([]);
  const [selectedTags, setSelectedTags] = useState([]);

  const handleMessageChange = (e) => {
    setNewMessage(e.target.value);
  };

  const handleAddMessage = () => {
    if (newMessage.trim() !== '') {
      setMessages([...messages, { text: newMessage, tags: selectedTags }]);
      setNewMessage('');
      setSelectedTags([]);
    }
  };

  const handleTagChange = (e) => {
    setSelectedTags(Array.from(e.target.selectedOptions, (option) => option.value));
  };

  return (
    <div>
      <h1>Chat with Tags</h1>
      <div>
        <select multiple onChange={handleTagChange} value={selectedTags}>
          <option value="Tag1">Tag1</option>
          <option value="Tag2">Tag2</option>
          <option value="Tag3">Tag3</option>
        </select>
        <input
          type="text"
          placeholder="Enter a message..."
          value={newMessage}
          onChange={handleMessageChange}
        />
        <button onClick={handleAddMessage}>Send</button>
      </div>
      <div>
        {messages.map((message, index) => (
          <div key={index}>
            <p>{message.text}</p>
            <div>
              Tags: {message.tags.join(', ')}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// export default Chat;


export default MessageBox;
