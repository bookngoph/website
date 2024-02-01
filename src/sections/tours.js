/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Grid } from 'theme-ui';
import SectionHeader from 'components/section-header';
import FeatureCard from 'components/feature-card.js';
import UAE from 'assets/country/svg/ae.svg';
import Spain from 'assets/country/svg/es.svg';
import Europe from 'assets/country/svg/eu.svg';
import Setting from 'assets/feature/setting.svg';
import Design from 'assets/feature/design.svg';
import Chat from 'assets/feature/chat.svg';

const data = [
  {
    id: 1,
    imgSrc: UAE,
    altText: 'Dubai',
    title: 'Dubai - Holy Week',
    text:
      'Holy week in Dubai with Abu Dhabi (6 Days 5 Nights) at $1,988',
    link: 'assets/tours/bng-holy-week-in-dubai.pdf',
  },
  {
    id: 2,
    imgSrc: Spain,
    altText: 'Spain',
    title: 'Spain - Maravillosa España',
    text:
      'Portugal - Spain (11 Days 10 Nights) at $2,999',
  },
  {
    id: 3,
    imgSrc: Europe,
    altText: 'Europe',
    title: 'Europe - Trails of Europe',
    text:
      'Netherlands - Belgium - France - Switzerland with Grindelwald (11 Days 10 Nights) at $3,299',
  },
  // {
  //   id: 4,
  //   imgSrc: Setting,
  //   altText: 'Customization',
  //   title: 'Unlimited Customization',
  //   text:
  //     'Get your blood tests delivered at let home collect sample from the victory of the managements.',
  // },
  // {
  //   id: 5,
  //   imgSrc: Design,
  //   altText: 'Productivity',
  //   title: 'Boost Productivity',
  //   text:
  //     'Get your blood tests delivered at let home collect sample from the victory of the managements.',
  // },
  // {
  //   id: 6,
  //   imgSrc: Chat,
  //   altText: 'Support',
  //   title: 'Customer Support',
  //   text:
  //     'Get your blood tests delivered at let home collect sample from the victory of the managements.',
  // },
];

export default function Tour() {
  return (
    <section sx={{ variant: 'section.feature' }} id="package">
      <Container>
        <SectionHeader
          slogan="Featured Packages"
          title="Meet exciting tours we offer"
        />

        <Grid sx={styles.grid}>
          {data.map((item) => (
            <FeatureCard
              key={item.id}
              src={item.imgSrc}
              alt={item.title}
              title={item.title}
              text={item.text}
            />
          ))}
        </Grid>
      </Container>
    </section>
  );
}

const styles = {
  grid: {
    pt: [0, null, null, null, null, null, null, 3],
    gridGap: [
      '37px 0',
      null,
      '45px 30px',
      null,
      '50px 30px',
      null,
      null,
      '90px 70px',
    ],
    width: ['100%', '80%', '100%'],
    mx: 'auto',
    gridTemplateColumns: [
      'repeat(1,1fr)',
      null,
      'repeat(2,1fr)',
      null,
      'repeat(3,1fr)',
    ],
  },
};
