import React from 'react';
import styles from './styles';
import {FlatList, Image, Text, TouchableOpacity, View} from 'react-native';
import {BackIcon, HalfStar, StarRating} from '../../../Assets/Svgs';
import {useNavigation} from '@react-navigation/native';
import {DriverReivews} from '../../../utils/constant';

const DriverReviews = () => {
  const navigation = useNavigation<any>();
  return (
    <View style={styles.body}>
      <View style={styles.appBarStyle}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <BackIcon></BackIcon>
          </TouchableOpacity>
          <Text style={styles.TitleName}>Reviews</Text>
          <View></View>
        </View>
      </View>
      <View style={styles.content}>
        <View style={styles.RatingView}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <View style={{flexDirection: 'row'}}>
              <HalfStar></HalfStar>
              <Text style={styles.totalRating}>4.9</Text>
            </View>
            <Text style={styles.ratingText}>(702 reviews)</Text>
          </View>

          <FlatList
            data={DriverReivews}
            contentContainerStyle={{marginBottom: 200}}
            renderItem={({item, index}) => {
              return (
                <View style={[styles.RatingBox]}>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    }}>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                      <Image
                        style={styles.imageStyle}
                        source={require('../../../Assets/Images/user2.png')}></Image>
                      <Text style={styles.NameStyle}>{item.title}</Text>
                    </View>
                    <StarRating></StarRating>
                  </View>
                  <Text style={styles.ReviewText}>{item.description}</Text>
                  <Text style={styles.ReviewTime}>{item.time}</Text>
                </View>
              );
            }}
          />
        </View>
      </View>
    </View>
  );
};

export default DriverReviews;
