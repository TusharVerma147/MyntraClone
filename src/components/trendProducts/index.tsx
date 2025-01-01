import React from 'react';
import { View, Text, TouchableOpacity, Image,} from 'react-native';
import styles from './styles';
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


export default TrendProducts;
