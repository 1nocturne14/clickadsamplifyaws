import React, { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqItems: FAQItem[] = [
    {
      question: "How many types of requests can you handle?",
      answer: "We handle all types of design requests, from web design to branding materials. Our team is versatile and experienced in various design disciplines."
    },
    {
      question: "What is your average response time?",
      answer: "We typically respond to requests within 24-48 hours, depending on the complexity of the project and your subscription plan."
    },
    {
      question: "Do you provide source files?",
      answer: "Yes, we provide source files for all completed designs. You'll have full access to the working files in various formats."
    },
    {
      question: "Can I cancel my subscription anytime?",
      answer: "Yes, you can cancel your subscription at any time. There are no long-term contracts or cancellation fees."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq" id="faq">
      <h2>FAQ's</h2>
      <div className="faq-container">
        {faqItems.map((item, index) => (
          <div 
            key={index} 
            className={`faq-item ${openIndex === index ? 'active' : ''}`}
            onClick={() => toggleFAQ(index)}
          >
            <div className="faq-question">
              <h3>{item.question}</h3>
              <span className="faq-icon">{openIndex === index ? '-' : '+'}</span>
            </div>
            {openIndex === index && (
              <div className="faq-answer">
                <p>{item.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}; 