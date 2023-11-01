import React, { useState } from 'react';
import { Button, Form, Space, Spin } from "antd";
import { LoadingOutlined } from '@ant-design/icons';
import Markdown from "react-markdown";
import './chatbotPage.css';
import { openai } from '../../configs/openai_config';

// menentukan topik yang dibahas sebagai batasan
const validTopics = ['music', 'drum', 'guitar', 'music course', 'practice music', 'dance course', 'dance', 'ballet', 'hip-hop', 'popping dance', 'locking dance', 'break dance', 'krumping dance', 'dance course', 'painting', 'painting course', 'expressionism in paint', 'naturalism in paint', 'expressionism in art', 'naturalism in art'];

function Chatbot() {
  const [form] = Form.useForm();
  const [responseAI, setResponseAI] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

  // fungsi yang dipanggil saat user mengirim pertanyaan
  const onFinish = async (values) => {
    // mengambil nilai pertanyaan user (lowercase untuk memudahkan pengecekan)
    const userQuery = values.query.toLowerCase();

    // mengecek apakah pertanyaan sesuai dengan topik
    const topicMatch = validTopics.some((topic) => userQuery.includes(topic));

    if (topicMatch) {
      setIsLoading(true);
      try {
        // jika sesuai topik, kirim pertanyaan ke model AI
        const response = await openai.chat.completions.create({
          model: "gpt-3.5-turbo",
          messages: [{ role: "user", content: values.query }],
        });

        // menyimpan respon AI ke responseAI
        setResponseAI(response.choices[0].message.content);
        setIsLoading(false);
      } catch (error) {
        console.error("Error:", error);
        setIsLoading(false);
      }
    } else {
      // pesan respon jika pertanyaan tidak sesuai topik
      setResponseAI("Sorry, your question is out of our context..");
    }
  }

  return (
    <div className="chatbot">
      <h2><span>Ask</span> Anything</h2>
      <p>Still confused about which course is right for you? Ask here.</p>

      <div className="chatbot-group">
        {/* menghubungkan Form dengan useForm dan memanggil fungsi onFinish */}
        <Form form={form} className="chatbot-form" onFinish={onFinish}>
          {/* mengambil query/nilai input */}
          <Form.Item name="query">
            <textarea type="text" className="inputTextarea" placeholder="ex : what is naturalism in art?"/>
          </Form.Item>
          {/* button dengan htmlType submit untuk mengirim input */}
          <Button type="default" htmlType="submit" className="submitButton" style={{ backgroundColor: '#E47B00', color: "white" }}>Send</Button>
        </Form>

        {/* output respon AI */}
        <div className="chatbot-respon">
          <p>Your Answer</p>
          <div className="respon-output">
            {/* menampilkan respon saat selesai loading */}
            {responseAI && !isLoading && (
              <Markdown>{responseAI}</Markdown>
            )}
            {/* icon spin tampil saat isLoading true */}
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
