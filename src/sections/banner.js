/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Flex, Box, Heading, Text, Image, Button, Link } from 'theme-ui';
import React, { useState } from 'react';
import ModalVideo from 'react-modal-video';
import { FaPlayCircle } from 'react-icons/fa';
import BannerBG from 'assets/bannerBg.png';
import BannerThumb from 'assets/banner-thumb-new-1080.jpg';

import affiliate1 from 'assets/affiliate/dot-logo.png';
import affiliate2 from 'assets/affiliate/ptaa-logo-175.png';
import affiliate3 from 'assets/affiliate/philtoa-member-logo.png';
import affiliate4 from 'assets/affiliate/pats-member-logo.png';


const data = [
  {
    id: 1,
    path: 'https://beta.tourism.gov.ph/',
    image: affiliate1,
    title: 'Department of Tourism (DoT)',
  },
  {
    id: 1,
    path: 'http://ptaa.org.ph/',
    image: affiliate2,
    title: 'Philippine Travel Agencies Association (PTAA)',
  },
  {
    id: 2,
    path: 'https://philtoa.com/',
    image: affiliate3,
    title: 'Philippine Tour Operators Association (PHILTOA)',
  },
  {
    id: 3,
    path: 'https://www.facebook.com/groups/PATSociety/',
    image: affiliate4,
    title: 'Pampanga Agents Travel Society (PATS)',
  },
];

export default function Banner() {
  const [videoOpen, setVideoOpen] = useState(false);
  const handleClick = (e) => {
    e.preventDefault();
    setVideoOpen(true);
  };
  return (
    <section sx={styles.banner} id="home">
      <Container sx={styles.banner.container}>
        <Box sx={styles.banner.contentBox}>
          <Heading as="h1" variant="heroPrimary">
            Experience the world, just book and go!
          </Heading>
          <Text as="p" variant="heroSecondary"> 
            Enjoy comfortable travels and memorable trips with hassle-free bookings
            and affordable packages for both international and domestic destinations.
          </Text>
          <Flex>
            <Link href="#contact" variant="default">
              <Button variant="whiteButton" aria-label="Get Started">
                Book Now
              </Button>
            </Link>
            <>
              <ModalVideo
                channel="youtube"
                isOpen={videoOpen}
                videoId="4UGlhbnt8Gg"
                onClose={() => setVideoOpen(false)}
              />
              <Button
                variant="textButton"
                aria-label="Watch Video"
                onClick={handleClick}
              >
                <FaPlayCircle /> Watch Video
              </Button>
            </>
          </Flex>
          <Flex sx={styles.sponsorBox}>
            <Text sx={styles.sponsorTitle}>Affiliations:</Text>
            <Box sx={styles.sponsorBox.sponsor}>
              {data.map((item, index) => (
                <Link href={item.path} key={`client-key${index}`}>
                  <Image src={item.image} alt={item.title} />
                </Link>
              ))}
            </Box>
          </Flex>
        </Box>

        <Box sx={styles.banner.imageBox}>
          <Image src={BannerThumb} alt="banner" />
        </Box>
      </Container>
    </section>
  );
}

const styles = {
  banner: {
    overflow: ['hidden', 'initial', null, 'hidden'],
    backgroundImage: `url(${BannerBG})`,
    backgroundRepeat: `no-repeat`,
    backgroundPosition: 'top left',
    backgroundSize: 'cover',
    borderBottomRightRadius: [100, 150, null, null, null, 250],
    pt: ['150px', null, null, null, null, null, '140px', '130px'],
    pb: ['100px', null, null, '110px', null, 10, '150px'],
    backgroundColor: 'primary',
    container: {
      display: 'flex',
    },
    contentBox: {
      width: ['100%', null, '85%', '55%', '50%', '55%'],
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      flexShrink: 0,
      pt: [0, null, null, null, null, null, 5, 7],
    },
    imageBox: {
      display: ['none', null, null, 'block'],
      justifyContent: 'center',
      // ml: [0, null, null, '-110px', '-115px', '-150px', '-210px', '-270px'],
      // mr: [0, null, null, '-145px', '-160px', '-180px', '-220px', '-290px'],
      // mt: [0, null, null, '40px', 4, 7, 0],
      // mb: [0, null, null, null, '-45px', '-70px', null, '-115px'],
      overflow: 'hidden',
      textAlign: 'right',
      width: '100%',
    },
  },
  sponsorTitle: {
    color: 'white',
    fontSize: [1, 2],
    opacity: 0.6,
    pr: 20,
    flexShrink: 0,
    pb: [2, null, 0],
  },
  sponsorBox: {
    pt: ['35px', null, null, null, null, '45px'],
    flexDirection: ['column', null, 'row'],
    alignItems: 'center',
    sponsor: {
      display: 'flex',
      alignItems: 'center',
      '> a': {
        mr: [5, null, null, 4, 6],
        display: 'flex',
        '&:last-of-type': {
          mr: 0,
        },
      },
    },
  },
};
