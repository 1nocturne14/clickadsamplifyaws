import React, { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqItems: FAQItem[] = [
    {
      question: "¿Existe algún contrato de permanencia?",
      answer: "Puedes probar nuestro servicio durante el primer mes. Un día antes de que finalice tu plan, te compartimos el informe mensual y tendrás la opción de decidir si deseas continuar con nosotros realizando el pago de renovación. No hay contratos de permanencia ni obligación a largo plazo."
    },
    {
      question: "¿Toman fotos de mis productos?",
      answer: "No, sin embargo, todas las imágenes y videos que nos envíes serán editados por nuestro talentoso equipo de diseñadores. Además, si deseas un nivel de profesionalismo aún mayor, tenemos contacto directo con fotógrafos altamente capacitados que pueden brindarte sus servicios por un costo adicional."
    },
    {
      question: "¿Qué metodos de pago aceptan?",
      answer: "Transferencia Bancolombia, Nequi, Criptomonedas"
    },
    {
      question: "¿Cuanto demoran en entregar el contenido?",
      answer: "Por lo general, nuestro tiempo de entrega varía entre 3 a 7 días, aunque esto puede depender del paquete que selecciones y de la cantidad de diseños incluidos en el mismo. Además, el tiempo de entrega también está sujeto a la prontitud con la que nos proporcionas el material necesario cuando sea requerido."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq" id="faq">
      <h2>Preguntas Frecuentes</h2>
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