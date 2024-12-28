import React, {useRef, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native';
import Video from 'react-native-video';
import {Icons} from '../../assets';

import styles from './styles';

const SingleReel = ({item, index, currentIndex, navigation}) => {
  const videoRef = useRef(null);

  const onBuffer = buffer => {
    console.log('buffring', buffer);
  };
  const onError = error => {
    console.log('error', error);
  };

  const [mute, setMute] = useState(false);
  const [isFollowing, setIsFollowing] = useState(false);
  const [like, setLike] = useState(item.isLike);

  return (
    <>
      <View style={styles.details}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={Icons.back} style={styles.back} />
        </TouchableOpacity>
        <View style={styles.userDetails}>
          <View style={styles.profileImg}>
            <Image source={Icons.profile} style={styles.img} />
          </View>
          <View>
            <Text style={styles.userName}>{item.title}</Text>
            <Text style={styles.followers}>{item.followers}</Text>
          </View>
        </View>
        <TouchableOpacity
          activeOpacity={0.8}
          style={styles.followbutton}
          onPress={() => setIsFollowing(!isFollowing)}>
          <Text style={styles.userName}>
            {isFollowing ? 'Following' : 'Follow'}
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.mainContainer}>
        <View style={styles.container}>
          <View style={styles.reelContainer}>
            <View style={styles.details}></View>
            <Video
              videoRef={videoRef}
              onBuffer={onBuffer}
              onError={onError}
              repeat={false}
              resizeMode="cover"
              // paused={currentIndex === index ? false : true}
              paused={currentIndex !== index}

              source={{uri: item.video}}
              muted={mute}
              style={styles.reels}
            />
          </View>
          <TouchableOpacity onPress={() => setMute(!mute)} style={styles.sound}>
            <Image
              source={mute ? Icons.mute : Icons.sound}
              style={styles.likeImg}
            />
          </TouchableOpacity>
          <View style={styles.iconsContainer}>
            <TouchableOpacity
              activeOpacity={0.9}
              style={styles.iconview}
              onPress={() => setLike(!like)}>
              <Image
                source={like ? Icons.liked : Icons.like}
                style={styles.likeImg}
              />
            </TouchableOpacity>
            <Text style={styles.likeCounts}>{item.likes}</Text>

            <TouchableOpacity style={styles.iconview}>
              <Image source={Icons.save} style={styles.likeImg} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconview}>
              <Image source={Icons.share} style={styles.likeImg} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </>
  );
};

export default SingleReel;