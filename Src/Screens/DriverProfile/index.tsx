import React, {useState} from 'react';
import {FlatList, Image, Text, TouchableOpacity, View} from 'react-native';
import styles from './styles';
import {BackIcon, HalfStar, StarRating, VerifyTick} from '../../Assets/Svgs';
import {useNavigation} from '@react-navigation/native';
import {DriverProfileTab, DriverReivews} from '../../utils/constant';

const DriverProfileCustomerSide = () => {
  const navigation = useNavigation<any>();
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <View style={styles.body}>
      <View style={styles.appBarStyle}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <BackIcon></BackIcon>
          </TouchableOpacity>
          <Text style={styles.TitleName}>Driver Profile</Text>
          <View></View>
        </View>
      </View>

      <View style={styles.ProfilePic}>
        <Image source={require('../../Assets/Images/ProfilePic.png')} />
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          alignSelf: 'center',
          marginTop: 14,
        }}>
        <Text style={styles.userName}>Robert Smith</Text>
        <VerifyTick></VerifyTick>
      </View>
      <Text style={styles.email}>useremail@email.com</Text>
      <View style={styles.content}>
        <View style={{alignItems: 'center', marginTop: 16}}>
          <FlatList
            data={DriverProfileTab}
            horizontal={true}
            ItemSeparatorComponent={() => <View style={{width: 20}}></View>}
            renderItem={({item, index}) => {
              return (
                <TouchableOpacity
                  onPress={() => setSelectedIndex(index)}
                  style={
                    selectedIndex === index
                      ? styles.SelectedTab
                      : styles.UnSelectedTab
                  }>
                  <Text
                    style={
                      selectedIndex === index
                        ? styles.TabSelectedText
                        : styles.TabUnSelectedText
                    }>
                    {item.title}
                  </Text>
                </TouchableOpacity>
              );
            }}
          />
        </View>
        {selectedIndex === 0 ? (
          <View>
            <View style={styles.PersonalView}>
              <Text style={styles.TitleText}>Phone#</Text>
              <Text style={styles.InFoText}>+1 234 567 8901</Text>
            </View>
            <View style={styles.PersonalView}>
              <Text style={styles.TitleText}>Address</Text>
              <Text style={styles.InFoText}>
                1234 Elm Street Springfield, IL 62701
              </Text>
            </View>
            <View style={styles.PersonalView}>
              <Text style={styles.TitleText}>Employee ID</Text>
              <Text style={styles.InFoText}>23984729</Text>
            </View>
          </View>
        ) : (
          <View style={styles.RatingView}>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <View style={{flexDirection: 'row'}}>
                <HalfStar></HalfStar>
                <Text>4.9</Text>
              </View>
              <Text>(702 reviews)</Text>
            </View>
            <FlatList
              data={DriverReivews}
              style={{marginBottom: 200}}
              renderItem={({item, index}) => {
                const isLastItem = index === DriverReivews.length - 1;
                return (
                  <View
                    style={[
                      styles.RatingBox,
           
                    ]}>
                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                      }}>
                      <View
                        style={{flexDirection: 'row', alignItems: 'center'}}>
                        <Image
                          style={styles.imageStyle}
                          source={require('../../Assets/Images/user2.png')}></Image>
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
        )}
      </View>
    </View>
  );
};

export default DriverProfileCustomerSide;
