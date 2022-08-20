import {
  Anchor, Container, Text, createStyles
} from '@mantine/core';

const useStyles = createStyles(() => ({
  bannerContainer: {
    backgroundColor: '#2692b7',
    backgroundImage: 'linear-gradient(56deg,#0087c1 13%,#89d7bb)',
    borderRadius: '10px',
    display: 'flex',
    flexDirection: 'column',
    margin: '36px 16px',
    maxWidth: 'fit-content',
    overflowWrap: 'break-word',
    padding: '20px 16px'
  },
  bannerText: {
    fontSize: '13px',
    lineHeight: '18px',
    marginBottom: '1rem'
  },
  bannerAnchor: {
    alignItems: 'center',
    border: '1px solid white',
    borderRadius: '19px',
    color: 'white',
    display: 'flex',
    fontSize: '0.9rem',
    fontWeight: 'bold',
    height: '38px',
    justifyContent: 'center',
    transition: '0.2s',

    '&:hover': {
      backgroundColor: 'rgba(255, 255, 255, 0.12)',
      textDecoration: 'none'
    }
  }
}));

function ConversionBanner() {
  const { classes } = useStyles();

  return (
    <Container className={classes.bannerContainer}>
      <Text className={classes.bannerText}>
        You&apos;re on IN/Deezer Free. Upgrade & skip ads free for 1 month (placeholder)
      </Text>
      <Anchor className={classes.bannerAnchor}>EXPLORE</Anchor>
    </Container>
  );
}

export default ConversionBanner;
