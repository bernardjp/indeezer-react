import * as PropTypes from 'prop-types';

export type TrackCardPropType = {
  album: {
    cover: string,
    title: string
  },
  artist: {
    name: string,
    picture: string
  },
  duration: number,
  explicit_lyrics: boolean,
  id: number,
  link: string,
  title: string
}

TrackCard.propTypes = {
  data: PropTypes.shape({
    album: PropTypes.shape({
      cover: PropTypes.string,
      title: PropTypes.string
    }),
    artist: PropTypes.shape({
      name: PropTypes.string,
      picture: PropTypes.string
    }),
    duration: PropTypes.number,
    explicit_lyrics: PropTypes.bool,
    id: PropTypes.number,
    link: PropTypes.string,
    title: PropTypes.string
  }).isRequired
};

function TrackCard(props: { data: TrackCardPropType }) {
  const { data } = props;
  console.log(data);

  return <div>{data.title}</div>;
}

export default TrackCard;
