// Ícones originais (mesmos imports)
import ic_document_duplicate from '../../../../public/svgs/ic_document_duplicate.svg';
import ic_identification from '../../../../public/svgs/ic_identification.svg';
import ic_lock_closed from '../../../../public/svgs/ic_lock_closed.svg';

// Frases para Desktop
export const desktopHeaderPhrase = [
  "Conheça as Soluções", 
  "de Tecnologia da NC Sistem"
];

export const desktopParagraphPhrase = [
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
];

// Frases para Mobile
export const mobileHeaderPhrase = [
  "Conheça as Soluções", 
  "da NC Sistem"
];

/* 
// Caso precise de parágrafo para mobile:
export const mobileParagraphPhrase = [
  "Descubra as inovações da NC Sistem em tecnologia.",
  "Soluções seguras e personalizadas para transformar",
  "sua operação digital.",
];
*/

// Benefícios (edges) adaptados
export const edges = [
  {
    point: "Gestão de Documentos Digitais",
    details:
      "Soluções avançadas para armazenamento, organização e compartilhamento seguro de documentos em nuvem.",
    icon: ic_document_duplicate, // Ícone de documentos
  },
  {
    point: "Autenticação e Identificação",
    details:
      "Sistemas de verificação de identidade e acesso personalizáveis para sua equipe ou clientes.",
    icon: ic_identification, // Ícone de identificação
  },
  {
    point: "Segurança de Dados",
    details:
      "Proteção avançada contra ameaças cibernéticas, garantindo a integridade das suas informações.",
    icon: ic_lock_closed, // Ícone de cadeado
  },
];