'use client';
import Image from 'next/image';
import future_banner from '../../../../public/images/help_banner.jpg';
import future_mobile_banner from '../../../../public/images/help_banner.jpg';
import {
  Wrapper,
  Inner,
  Header,
  CardContainer,
  Card,
  TextCtn,
  SVGCtn,
  Stats,
  Stat,
  Banner,
} from './styles';
import MaskText from '@/components/Common/MaskText';
import { useIsMobile } from '../../../../libs/useIsMobile';
import {
  cardsInfo,
  desktopHeaderPhrase,
  desktopParagraphPhrase,
  mobileHeaderPhrase,
  mobileParagraphPhrase,
  stats,

} from './constants';

const FinancialFuture = () => {
  const isMobile = useIsMobile();



  return (
    <Wrapper>
      <Inner>
        <Header>
          {isMobile ? (
            <>
              {Array.isArray(mobileHeaderPhrase) && mobileHeaderPhrase.length > 0 ? (
                <MaskText phrases={mobileHeaderPhrase} tag="h1" />
              ) : (
                <h1>Header não disponível</h1>
              )}
              {Array.isArray(mobileParagraphPhrase) && mobileParagraphPhrase.length > 0 ? (
                <MaskText phrases={mobileParagraphPhrase} tag="p" />
              ) : (
                <p>Parágrafo não disponível</p>
              )}
            </>
          ) : (
            <>
              {Array.isArray(desktopHeaderPhrase) && desktopHeaderPhrase.length > 0 ? (
                <MaskText phrases={desktopHeaderPhrase} tag="h1" />
              ) : (
                <h1>Header não disponível</h1>
              )}
              {Array.isArray(desktopParagraphPhrase) && desktopParagraphPhrase.length > 0 ? (
                <MaskText phrases={desktopParagraphPhrase} tag="p" />
              ) : (
                <p>Parágrafo não disponível</p>
              )}
            </>
          )}
        </Header>
        <CardContainer>
          {Array.isArray(cardsInfo) && cardsInfo.length > 0 ? (
            cardsInfo.map((info, i) => (
              <Card key={i}>
                <TextCtn>
                  {typeof info.title === 'string' ? (
                    <MaskText phrases={[info.title]} tag="h3" />
                  ) : (
                    <h3>Título não disponível</h3>
                  )}
                  {typeof info.details === 'string' ? (
                    <MaskText phrases={[info.details]} tag="p" />
                  ) : (
                    <p>Detalhes não disponíveis</p>
                  )}
                </TextCtn>
                {info.icon && (
                  <SVGCtn>
                    <Image src={info.icon} alt="icon" />
                  </SVGCtn>
                )}
              </Card>
            ))
          ) : (
            <p>Nenhum card disponível</p>
          )}
        </CardContainer>
        <Stats>
          {Array.isArray(stats) && stats.length > 0 ? (
            stats.map((stat, i) => (
              <Stat key={i}>
                {typeof stat.number === 'string' ? (
                  <MaskText phrases={[stat.number]} tag="h1" />
                ) : (
                  <h1>Número não disponível</h1>
                )}
                {typeof stat.subtitle === 'string' ? (
                  <MaskText phrases={[stat.subtitle]} tag="p" />
                ) : (
                  <p>Subtítulo não disponível</p>
                )}
              </Stat>
            ))
          ) : (
            <p>Nenhuma estatística disponível</p>
          )}
        </Stats>
        {/* Seção para servicesInfo com grade 3x3 */}
       
      </Inner>
      <Banner>
        {isMobile ? (
          <Image src={future_mobile_banner} alt="future_banner" fill />
        ) : (
          <Image src={future_banner} alt="future_banner" fill />
        )}
      </Banner>
    </Wrapper>
  );
};

export default FinancialFuture;