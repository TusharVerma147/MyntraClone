import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { Icons } from '../../assets';
import styles from './styles';
import { colors } from '../../theme';

const ItemCard = ({
  item,
  isSelected,
  onSelectItem,
  onQtyChange,
  onRemoveItem,
}: any) => (
  <View style={styles.itemContainer}>
    <View style={styles.imageContainer}>
      <Image source={item.product.image} style={styles.itemImage} />
      <TouchableOpacity
        style={[
          styles.selectButton,
          isSelected && { backgroundColor: colors.zeptored}, // You can replace this with your color
        ]}
        onPress={onSelectItem}>
        {isSelected && <Text style={styles.checkmarkText}>✓</Text>}
      </TouchableOpacity>
    </View>
    <View style={styles.itemDetails}>
      <Text style={styles.itemName}>{item.product.brand}</Text>
      <Text style={styles.itemType}>{item.product.type}</Text>
      <View style={styles.priceview}>
        <Text style={styles.itemdiscountPrice}>
          {item.product.DiscountedPrice}
        </Text>
        <Text style={styles.itemPrice}>{item.product.Price}</Text>
        <Text style={styles.off}>{item.product.off}</Text>
      </View>
      <TouchableOpacity
        style={styles.qtyview}
        onPress={() => onQtyChange(item.id, item.quantity)}>
        <Text style={styles.quantityButton}>Qty:{item.quantity}</Text>
        <Image source={Icons.bottomsecond} style={styles.bottom} />
      </TouchableOpacity>
      <View style={styles.return}>
        <Image source={Icons.return} style={styles.cross} />
        <Text style={styles.days}>
          14 days <Text style={styles.itemType}>return available</Text>
        </Text>
      </View>
    </View>
    <TouchableOpacity onPress={() => onRemoveItem(item.id)}>
      <Image source={Icons.cross} style={styles.cross} />
    </TouchableOpacity>
  </View>
);

export default ItemCard;
