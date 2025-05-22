'use client';
import React, { useRef, useState } from 'react';
import { AnimatePresence, useInView } from 'framer-motion';
import {
  Accordion,
  AccordionItem,
  Answer,
  Inner,
  Question,
  Wrapper,
} from './styles';
import Image from 'next/image';
import ic_chevron_down from '../../../../public/svgs/ic_chevron_down.svg';
import { MaskText } from '@/components';
import { useIsMobile } from '../../../../libs/useIsMobile';

// Constantes adaptadas para a NC System
const mobileHeaderPhrase = ['Perguntas Frequentes da NC System'];
const desktopHeaderPhrase = ['Respostas para Suas Dúvidas sobre as Soluções da NC System'];

const faqData = [
  {
    question: 'Quais tipos de software a NC System desenvolve?',
    answer:
      'A NC System desenvolve softwares personalizados, incluindo aplicativos móveis, sistemas de gestão empresarial (ERP), plataformas de e-commerce e soluções de automação. Nossos produtos são adaptados às necessidades específicas de cada cliente.',
  },
  {
    question: 'Como funciona o suporte técnico da NC System?',
    answer:
      'Oferecemos suporte técnico 24/7 para todos os nossos clientes. Você pode entrar em contato via e-mail, telefone ou nosso portal de suporte online. Além disso, fornecemos atualizações regulares e manutenção preventiva.',
  },
  {
    question: 'Quanto tempo leva para implementar um sistema da NC System?',
    answer:
      'O tempo de implementação varia conforme a complexidade do projeto, mas geralmente leva de 4 a 12 semanas. Fazemos uma análise detalhada para fornecer um cronograma personalizado antes de iniciar o projeto.',
  },
  {
    question: 'Os sistemas da NC System são compatíveis com outras plataformas?',
    answer:
      'Sim, nossos sistemas são projetados para serem altamente compatíveis e podem ser integrados com plataformas como CRMs, ERPs de terceiros e APIs externas. Garantimos uma integração fluida para otimizar seus processos.',
  },
  {
    question: 'Qual é o custo dos serviços da NC System?',
    answer:
      'O custo depende do escopo do projeto e das funcionalidades desejadas. Oferecemos orçamentos personalizados após uma consulta inicial gratuita. Entre em contato para mais detalhes!',
  },
];

const animate = {
  initial: { opacity: 0, y: 50 },
  open: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: index * 0.2, duration: 0.5 },
  }),
};

const FAQ = () => {
  const [openItem, setOpenItem] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenItem(openItem === index ? null : index);
  };

  const accordionRef = useRef(null);
  const isInView = useInView(accordionRef, {
    once: true,
    margin: '-10%',
    amount: 0.4,
  });

  const isMobile = useIsMobile();

  return (
    <Wrapper>
      <Inner>
        {isMobile ? (
          <MaskText phrases={mobileHeaderPhrase} tag="h1" />
        ) : (
          <MaskText phrases={desktopHeaderPhrase} tag="h1" />
        )}
        <Accordion ref={accordionRef}>
          {faqData.map((item, index) => (
            <AccordionItem
              variants={animate}
              initial="initial"
              animate={isInView ? 'open' : ''}
              custom={index}
              key={index}
            >
              <Question onClick={() => toggleItem(index)}>
                {item.question}
                <Image src={ic_chevron_down} alt="Seta para baixo" />
              </Question>
              <AnimatePresence>
                {openItem === index && (
                  <Answer
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                  >
                    {item.answer}
                  </Answer>
                )}
              </AnimatePresence>
            </AccordionItem>
          ))}
        </Accordion>
      </Inner>
    </Wrapper>
  );
};

export default FAQ;