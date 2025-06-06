import { styled } from 'styled-components';
import card_grid from '../../../../public/images/card_grid.png';

export const Wrapper = styled.section`
  padding-top: 7.75rem;
`;

export const Inner = styled.div`
  width: 90%;
  max-width: 1440px;
  margin: 0 auto;
`;

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  max-width: 56rem;
  margin-bottom: 6.25rem;

  h1 {
    font-size: 4.75rem;
    font-weight: 400;
  }

  p {
    max-width: 41.75rem;
    color: var(--link-color);
    font-size: 1.25rem;
    font-weight: 400;
    line-height: 1.75rem;
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 2.25rem;
    }

    p {
      font-size: 1rem;
      line-height: 1.5rem;
    }
  }
`;

export const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* Grade 3x3 para servicesInfo */
  gap: 2rem; /* Reduzido de 3.5rem para um layout mais compacto */

  @media (max-width: 768px) {
    grid-template-columns: 1fr; /* Uma coluna em mobile */
    gap: 1.5rem;
  }
`;

export const Card = styled.div`
  height: 30rem; /* Reduzido de 41.875rem */
  border-radius: 0.75rem;
  border: 1px solid var(--stroke, rgba(255, 255, 255, 0.04));
  background: #131313;

  @media (max-width: 768px) {
    height: 20rem; /* Reduzido de 27.5rem */
  }
`;

export const TextCtn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem; /* Reduzido de 1rem */
  max-width: 28rem; /* Reduzido de 32.25rem */
  margin: 2rem; /* Reduzido de 3.25rem */

  h3 {
    font-size: 1.5rem; /* Reduzido de 2rem */
    font-weight: 500;
    line-height: 1.5rem; /* Ajustado */
  }

  p {
    color: var(--link-color);
    font-size: 1rem; /* Reduzido de 1.25rem */
    font-weight: 400;
    line-height: 1.5rem; /* Ajustado */
  }

  @media (max-width: 768px) {
    margin: 1.25rem; /* Reduzido de 1.5rem */
    h3 {
      font-size: 1.25rem; /* Reduzido de 1.5rem */
      line-height: 1.5rem;
    }

    p {
      font-size: 0.875rem; /* Reduzido de 1rem */
      line-height: 1.25rem;
    }
  }
`;

export const SVGCtn = styled.div`
  background: url(${card_grid.src});
  height: 18rem; /* Reduzido de 24.55rem */
  display: grid;
  place-items: center;

  @media (max-width: 768px) {
    height: 10rem; /* Reduzido de 15.28219rem */
    background-position: center center;
    background-size: contain;

    img {
      width: 5rem; /* Reduzido de 7.5rem */
      height: 5rem;
    }
  }
`;

export const Stats = styled.div`
  margin: 6.25rem auto;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 768px) {
    margin: 3.75rem auto;
  }
`;

export const Stat = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 1rem;

  h1 {
    font-size: 5rem;
    font-weight: 600;
  }

  p {
    color: var(--link-color);
    font-size: 1.125rem;
    font-weight: 500;
    text-transform: uppercase;
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 1.25rem;
    }

    p {
      font-size: 0.75rem;
    }
  }
`;

export const Banner = styled.div`
  height: 45rem;
  width: 100%;
  position: relative;

  img {
    object-fit: cover;
  }

  @media (max-width: 768px) {
    height: 31.25rem;
    img {
      object-fit: contain;
    }
  }
`;