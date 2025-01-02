import React, {useRef, useState} from 'react';
import {View, Text,TouchableOpacity,Image,} from 'react-native';
import Video, { VideoRef } from 'react-native-video';
import {Icons} from '../../assets';
import styles from './styles';


interface VideoItem {
  title: string;
  followers: string;
  video: string;
  likes: number;
  isLike: boolean;
}

interface SingleReelProps {
  item: VideoItem;
  index: number;
  currentIndex: number;
  navigation: any; 
  isScreenFocused: boolean;
}


const SingleReel : React.FC <SingleReelProps> = ({
  item,
  index,
  currentIndex,
  navigation,
  isScreenFocused,

}) => {


  const videoRef = useRef<VideoRef | null>(null);

  const onBuffer = (buffer:any) => {
    console.log('buffring', buffer);
  };
  const onError = (error:any) => {
    console.log('error', error);
  };

  const [mute, setMute] = useState<boolean>(false);
  const [isFollowing, setIsFollowing] = useState<boolean>(false);
  const [like, setLike] = useState<boolean>(item.isLike);

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
              ref={videoRef}
              onBuffer={onBuffer}
              onError={onError}
              repeat
              resizeMode="cover"
              // paused={currentIndex === index ? false : true}
              // paused={currentIndex !== index}
              paused={!isScreenFocused || currentIndex !== index}

              source={ item.video}
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
