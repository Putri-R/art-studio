import React, { useState } from 'react';
import { Button, Form, Space, Spin } from "antd";
import { LoadingOutlined } from '@ant-design/icons';
import Markdown from "react-markdown";
import './chatbotPage.css';
import { openai } from '../../configs/openai_config';

const validTopics = ['music', 'drum', 'guitar', 'music course', 'practice music', 'dance course', 'dance', 'ballet', 'hip-hop', 'popping dance', 'locking dance', 'break dance', 'krumping dance', 'dance course', 'painting', 'painting course', 'expressionism in paint', 'naturalism in paint', 'expressionism in art', 'naturalism in art']; // Topik yang dibahas

function Chatbot() {
  const [form] = Form.useForm();
 const [responseAI, setResponseAI] = useState();
 const [isLoading, setIsLoading] = useState(false);
 const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

 const onFinish = async (values) => {
   const userQuery = values.query.toLowerCase();
   const topicMatch = validTopics.some((topic) => userQuery.includes(topic));

   if (topicMatch) {
     setIsLoading(true);
     try {
       const response = await openai.chat.completions.create({
         model: "gpt-3.5-turbo",
         messages: [{ role: "user", content: values.query }],
       });

       setResponseAI(response.choices[0].message.content);
       setIsLoading(false);
     } catch (error) {
       console.error("Error:", error);
       setIsLoading(false);
     }
   } else {
     setResponseAI("Sorry, your question is out of our context..");
   }
 }

  return (
    <div className="chatbot">
      <h2><span>Ask</span> Anything</h2>
      <p>Still confused about which course is right for you? Ask here.</p>

      <div className="chatbot-group">
      <Form form={form} onFinish={onFinish}>
            <Form.Item name="query">
            <textarea type="text" className="inputTextarea" placeholder="ex : what is naturalism in art?"/>
            </Form.Item>
            <Button type="default" htmlType="submit" className="submitButton" style={{ backgroundColor: '#E47B00', color: "white" }}>Send</Button>
          </Form>
        <div className="chatbot-respon">
          <p>Your Answer</p>
          <div className="respon-output">
            {responseAI && !isLoading && (
              <Markdown>{responseAI}</Markdown>
            )}
            {isLoading && (
              <Space size="middle">
                <Spin indicator={antIcon} />
              </Space>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chatbot;
