import React from 'react';
import { ScrollView, View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { SCREEN_WIDTH, vh } from '../../theme/dimensions';
import { colors } from '../../theme';
import { Images } from '../../assets'; 
import { Icons } from '../../assets'; 

interface TrendProductsProps {
    heading: string;
    data: {
      id: string;
      Price: string;
      DiscountedPrice: string;
      image: any;
    }[];
  }


const TrendProducts: React.FC<TrendProductsProps & { navigation: any }> = ({ data, heading, navigation }) => {
  return (
    <View style={styles.productmain}>
      <Text style={styles.productHeading}>{heading}</Text>
      <View style={styles.productSub}>
        <View style={styles.productSmall}>
          <View style={styles.productSubSmall}>
            {data.slice(0, 2).map((item, index) => (
              <TouchableOpacity
                key={index}
                style={styles.productButton}
                activeOpacity={0.8}
                onPress={() => navigation.navigate('Details', { item })}
              >
                <Image source={item.image} style={styles.productImage} />
                <View style={styles.prizeview}>
                  <Text style={styles.priceCutText}>{item.Price}</Text>
                  <Text style={styles.priceText}>{item.DiscountedPrice}</Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>
          <View style={styles.productSubSmall}>
            {data.slice(2, 4).map((item, index) => (
              <TouchableOpacity
                key={index}
                style={styles.productButton}
                activeOpacity={0.8}
                onPress={() => navigation.navigate('Details', { item })}
              >
                <Image source={item.image} style={styles.productImage} />
                <View style={styles.prizeview}>
                  <Text style={styles.priceCutText}>{item.Price}</Text>
                  <Text style={styles.priceText}>{item.DiscountedPrice}</Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </View>
        <View style={styles.productLarge}>
          <TouchableOpacity
            style={styles.productButton}
            activeOpacity={0.8}
            onPress={() => navigation.navigate('Details', { item: data[4] })}
          >
            <Image source={data[4].image} style={styles.productLargeImage} />
            <View style={styles.prizeview}>
              <Text style={styles.priceCutText}>{data[4].Price}</Text>
              <Text style={styles.priceText}>{data[4].DiscountedPrice}</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity style={styles.button} activeOpacity={0.8}  onPress={() => navigation.navigate('Items', { categoryTitle: 'Products' })}>
        <Text style={styles.buttonText} >View 33 Products</Text>
        <Image source={Icons.forward} style={styles.forwardIcon} />
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
    productmain: {
        padding: vh(15),
        width: SCREEN_WIDTH,
        backgroundColor: colors.white,
        marginBottom:vh(10)
      },
      productHeading: {
        fontSize: vh(18),
        fontWeight: '700',
        paddingBottom: vh(10),
      },
      productSub: {flexDirection: 'row', width: '100%', gap: vh(10)},
      productSmall: {flex: 1, gap: vh(8)},
      productSubSmall: {flexDirection: 'row', gap: vh(8)},
      productButton: {
        flex: 1,
        backgroundColor: colors.platinum,
        borderRadius: 10,
      },
      prizeview: {
        position: 'absolute',
        flexDirection: 'row',
        gap: vh(2),
        alignItems: 'center',
        bottom: 0,
        left: vh(10),
        shadowColor: 'black',
        shadowOffset: { width: 10, height: 10 },
        shadowOpacity: 1.0,
        shadowRadius: 20,
        elevation: 10,
      },
      priceCutText: {
        fontSize: vh(10),
        textDecorationLine: 'line-through',
        color: colors.screengrey,
      },
      priceText: {
        fontSize: vh(12),
        color: colors.white,
        fontWeight: '600',
      },
      productLarge: {
        flex: 1,
      },
      productImage: {
        width: '100%',
        height: vh(130),
        resizeMode: 'cover',
        borderRadius: 10,
      },
      productLargeImage: {
        width: '100%',
        height: vh(270),
        resizeMode: 'cover',
        borderRadius: 10,
      },
    
      button: {
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        marginTop: vh(10),
        paddingVertical: vh(10),
        borderRadius: 10,
        flexDirection: 'row',
        gap: vh(10),
        borderColor: colors.screengrey,
        backgroundColor: colors.screengrey,
      },
      buttonText: {
        fontSize: vh(15),
        fontWeight: '600',
      },
      forwardIcon: {height: vh(10), width: vh(10)},
    });

export default TrendProducts;
