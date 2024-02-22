import {
  Stack,
  Flex,
  Text,
  Title,
  createStyles,
  ScrollArea,
  Image,
} from '@mantine/core';
import ProfilePicture from '../../public/assets/profile_pic.webp';
import GeneralLayoutContainer from './GeneralLayoutContainer';
import TemplateCard from './ResourceCards/CardTemplate';
import GithubIcon from '../../public/assets/github_logo.png';
import LinkedInIcon from '../../public/assets/linkedin_logo.png';

const useStyles = createStyles((theme) => ({
  contentContainer: {
    alignItems: 'center',
    gap: '4rem',
    height: '100%',
    justifyContent: 'center',
    marginTop: '54px',
    maxWidth: '1280px',
    minHeight: 'calc(100vh - 54px)' /* 54px (header) + 80px (footer) */,
    padding: '1rem',
    paddingBottom: '100px',
    width: '100%',

    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      flexDirection: 'column',
      minHeight: 'calc(100vh - 54px)' /* 54px (header) + 147px (footer) */,
      paddingBottom: '180px',
    },
  },
  imageContainer: { maxWidth: '380px' },
  iconContainer: {
    height: '28px',
    width: 'auto',
    display: 'flex',
    textDecoration: 'none',
    gap: '1rem',
    alignItems: 'center',
    color: theme.colorScheme === 'dark' ? 'white' : 'black',

    '&:hover': {
      color: theme.colors.red[5],
      img: {
        filter: `${
          theme.colorScheme === 'light'
            ? 'invert(64%) sepia(85%) saturate(3667%) hue-rotate(324deg) brightness(100%) contrast(101%)'
            : 'invert(64%) sepia(85%) saturate(3667%) hue-rotate(134deg) brightness(100%) contrast(70%)'
        }`,
      },
    },
  },
  iconImage: {
    maxWidth: '28px',
    filter: theme.colorScheme === 'dark' ? 'invert()' : 'inherit',
  },
  textContainer: {
    maxHeight: 'inherit',
    maxWidth: '50%',
    position: 'relative',

    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      maxWidth: '95%',
      alignItems: 'center',
    },
  },
}));

function AboutPage() {
  const { classes } = useStyles();

  return (
    <GeneralLayoutContainer>
      <Flex className={classes.contentContainer}>
        <Stack align="center" className={classes.imageContainer}>
          <TemplateCard
            viewButtonSettings={{
              imageURL: ProfilePicture,
              alt: 'JP pic photo',
            }}
            card={{
              image: ProfilePicture,
              info: 'Software Developer behind IN/DEEZER',
              link: '',
              title: 'Juan Pablo Bernard',
            }}
            isExplicit={false}
            isRound
          />
          <Flex w="100%" justify="space-evenly" gap={4}>
            <a
              href="https://www.linkedin.com/in/juan-pablo-bernard/"
              target="_blank"
              rel="noreferrer"
              className={classes.iconContainer}
            >
              <Image
                src={LinkedInIcon}
                alt="linkedin-icon"
                className={classes.iconImage}
              />
              LinkedIn
            </a>
            <a
              href="https://github.com/bernardjp/"
              target="_blank"
              rel="noreferrer"
              className={classes.iconContainer}
            >
              <Image
                src={GithubIcon}
                alt="github-icon"
                className={classes.iconImage}
              />
              Github
            </a>
          </Flex>
        </Stack>
        <Stack className={classes.textContainer}>
          <Title mb={10}>ABOUT THIS PROJECT</Title>
          <ScrollArea h="378px" type="always" scrollbarSize={6}>
            <Text size="md" mb={8}>
              <b>IN/DEEZER</b> was conceive as an educational -personal-
              project. The idea behind it was to put into practice multiple
              concepts that I have learned -or tried to- during my journey as
              programmer and Software Developer, aswell adding some new tools to
              increase the challenge and keep the <b>learning process </b>
              interesting and engaging.
            </Text>
            <Text size="md" mb={12}>
              Even though this project started as a simple SPA to keep the
              learning curve low and steady, some <b>unexpected challenges </b>
              risen from curiosity:{' '}
              <i>
                What is a music-streaming site without a functional music
                player?
              </i>{' '}
              and the answer was:<b> an unfinished exercise!</b>. So from this
              question arose a self-imposed challenge: to build a functional
              audio player.
            </Text>
            <Title size="md" mb={8}>
              THE CHALLENGE
            </Title>
            <Text size="md" mb={8}>
              Building a custom audio player for this project came with two
              particular issues: first, masking the default audio player with
              MantineUI components was troublesome because of the opinionated
              styling method inherent to the component library; second, the
              audio player needed to keep its state during navigation so a
              global state manager was required; and third, the interactions
              between the audio player API and the new UI were of imperative
              nature, so tying the application state to the UI and the audio API
              was prone to side-effects.
            </Text>
            <Text size="md" mb={12}>
              All in all the new audio player ended up witb a -sometimes-
              convoluted but{' '}
              <b>functional solution, and the learning challenge, completed!</b>
            </Text>
          </ScrollArea>
        </Stack>
      </Flex>
    </GeneralLayoutContainer>
  );
}

export default AboutPage;
