/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Grid, Box, Heading, Image, Link, Text } from 'theme-ui';
import SectionHeader from 'components/section-header';

import PatternBG from 'assets/patternBG.png';
import ArrowOdd from 'assets/arrowOdd.png';
import ArrowEven from 'assets/arrowEven.png';
import Facebook from 'assets/social-media/facebook-48.svg';

const data = [
  {
    id: 1,
    title: 'Set disbursement Instructions',
    text:
      'Get your blood tests delivered at home collect a sample from the your blood tests.',
  },
  {
    id: 2,
    title: 'Assembly retrieves funds from your account',
    text:
      'Get your blood tests delivered at home collect a sample from the your blood tests.',
  },
  {
    id: 3,
    title: 'Assembly initiates disbursement',
    text:
      'Get your blood tests delivered at home collect a sample from the your blood tests.',
  },
  {
    id: 4,
    title: 'Customer receives funds payment',
    text:
      'Get your blood tests delivered at home collect a sample from the your blood tests.',
  },
];

export default function Contact() {
  return (
    <section sx={styles.workflow} id="contact">
      <Container>
        <SectionHeader
          slogan="Contact Us"
          title="Just book and go"
          isWhite={true}
        />

        <Grid sx={styles.grid}>
          {/* {data.map((item) => (
            <Box sx={styles.card} key={item.id}>
              <Box sx={styles.iconBox}>{`0${item.id}`}</Box>
              <Box sx={styles.wrapper}>
                <Heading sx={styles.wrapper.title}>{item.title}</Heading>
                <Text sx={styles.wrapper.subTitle}>{item.text}</Text>
              </Box>
            </Box>
          ))} */}
          <Box sx={styles.wrapper}>
            <Heading sx={styles.wrapper.title}>Location</Heading>
            <Text sx={styles.wrapper.subTitle}>Address: #14 2nd Floor Jasmin St., Perpetual Village, Brgy. Tanyag, Taguig City</Text>
          </Box>
          <Box sx={styles.wrapper}>
            <Heading sx={styles.wrapper.title}>Contact Numbers</Heading>
            <Text sx={styles.wrapper.subTitle}>Landline:</Text>
            <Text sx={styles.wrapper.subTitle}>02 8354 3875</Text>
            <hr sx={{width: '15%'}}/>
            <Text sx={styles.wrapper.subTitle}>Mobile Numbers:</Text>
            <Text sx={styles.wrapper.subTitle}>+63 917 510 9402</Text>
            <Text sx={styles.wrapper.subTitle}>+63 926 643 5057</Text>
            <Text sx={styles.wrapper.subTitle}>+63 908 396 8688</Text>
            <Text sx={styles.wrapper.subTitle}>+63 960 4749 854</Text>
            <hr sx={{width: '15%'}}/>
            <Text sx={styles.wrapper.subTitle}>Email Address:</Text>
            <Text sx={styles.wrapper.subTitle}>bookngotravel_tours@yahoo.com</Text>
            <Text sx={styles.wrapper.subTitle}>bng_reservation06@yahoo.com</Text>
          </Box>
          <Box sx={styles.wrapper}>
            <Heading sx={styles.wrapper.title}>Follow us on</Heading>
            <Link href="https://www.facebook.com/bookngotravelandtours/">
              <Image src={Facebook} alt={'Facebook'} sx={{color: 'gray'}}/>
            </Link>
          </Box>
        </Grid>
      </Container>
    </section>
  );
}

const styles = {
  workflow: {
    backgroundColor: 'primary',
    backgroundImage: `url(${PatternBG})`,
    backgroundRepeat: `no-repeat`,
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
    position: 'relative',
    py: [8, null, 9, null, null, 10],
    // '&::before': {
    //   position: 'absolute',
    //   content: '""',
    //   top: 0,
    //   right: 0,
    //   background:
    //     'linear-gradient(-45deg, rgba(42,72,125, 0.3) 25%, transparent 25%, transparent 50%, rgba(42,72,125, 0.3) 50%, rgba(42,72,125, 0.3) 75%, transparent 75%, transparent)',
    //   width: '100%',
    //   backgroundSize: '350px 350px',
    //   height: '100%',
    //   opacity: 0.3,
    //   zIndex: 0,
    // },
  },
  grid: {
    mb: -1,
    pt: 0,
    gridGap: [
      '35px 0',
      null,
      '45px 0px',
      null,
      '50px 5px',
      null,
      null,
      '50px 25px',
    ],
    gridTemplateColumns: [
      'repeat(1,1fr)',
      null,
      'repeat(1,1fr)',
      null,
      'repeat(3,1fr)',
    ],
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    textAlign: ['center', null, 'left'],
    width: ['100%', '80%', '100%'],
    mx: 'auto',
    '&::before': {
      position: 'absolute',
      content: '""',
      top: 0,
      left: [0, null, null, null, null, 75, null, 100],
      backgroundRepeat: `no-repeat`,
      backgroundPosition: 'center center',
      width: 215,
      height: 60,
      opacity: 0.3,
      '@media screen and (max-width:1220px)': {
        display: 'none',
      },
    },
    '&:nth-of-type(2n-1)::before': {
      backgroundImage: `url(${ArrowOdd})`,
    },
    '&:nth-of-type(2n)::before': {
      backgroundImage: `url(${ArrowEven})`,
      top: 17,
    },
    '&:last-child::before': {
      display: 'none',
    },
  },

  iconBox: {
    width: ['50px', null, '60px', null, null, '70px'],
    height: ['50px', null, '60px', null, null, '70px'],
    flexShrink: 0,
    borderRadius: [15, null, 23, null, null, 30],
    backgroundColor: 'white',
    display: 'flex',
    alignItems: 'center',
    mb: [5, null, null, null, null, 6],
    mx: ['auto', null, 0],
    fontSize: [6, null, 7, null, null, '30px'],
    fontWeight: 700,
    justifyContent: 'center',
    color: '#234582',
  },
  wrapper: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    mt: '-5px',
    title: {
      fontSize: [3, null, 4, null, null, 5],
      color: 'white',
      lineHeight: [1.4, null, null, null, null, 1.55],
      pr: [0, null, null, null, null, 2],
      mb: [2, 3],
    },

    subTitle: {
      fontSize: 1,
      fontWeight: 400,
      lineHeight: [1.85, null, null, 1.9, 2],
      color: 'white',
      opacity: 0.65,
      // pr: [0, null, null, null, null, 5],
    },
  },
};
