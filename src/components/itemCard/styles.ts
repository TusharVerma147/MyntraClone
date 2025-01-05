import {StyleSheet} from 'react-native';
import {vh,SCREEN_WIDTH} from '../../theme/dimensions';
import { colors } from '../../theme';

const styles = StyleSheet.create({

  itemContainer: {
    flexDirection: 'row',
    paddingHorizontal: vh(10),
    paddingVertical: vh(10),
    marginVertical: vh(5),
    backgroundColor: colors.white,
  },
  itemImage: {
    width: SCREEN_WIDTH / 3,
    height: SCREEN_WIDTH / 2,
    borderRadius: 5,
    resizeMode: 'contain',
    backgroundColor: colors.platinum,
  },
  itemDetails: {
    flex: 1,
    marginHorizontal: 10,
  },
  itemName: {
    fontWeight: '700',
    fontSize: vh(16),
  },
  itemType: {
    color: colors.grey,
    fontSize: vh(14),
  },
  days: {
    fontWeight: '600',
    fontSize: vh(15),
    color: colors.charcol,
    marginLeft: vh(5),
  },
  priceview: {flexDirection: 'row', marginTop: vh(5)},
  itemdiscountPrice: {
    fontWeight: '700',
    fontSize: vh(15),
    color: colors.charcol,
  },
  itemPrice: {
    color: colors.grey,
    fontSize: vh(14),
    textDecorationLine: 'line-through',
    marginHorizontal: vh(10),
  },
  off: {
    color: colors.zeptored,
    marginHorizontal: vh(10),
    fontSize: vh(12),
  },
  quantityButton: {
    fontSize: vh(16),
    color: colors.charcol,
    fontWeight: '600',
  },
  cross: {height: vh(15), width: vh(15), tintColor: colors.textGrey},
  bottom: {
    height: vh(15),
    width: vh(15),
    tintColor: colors.textGrey,
  },

  imageContainer: {
    position: 'relative',
  },
  selectButton: {
    position: 'absolute',
    top: vh(5),
    left: vh(5),
    width: vh(20),
    height: vh(20),
    borderRadius: vh(15),
    backgroundColor: colors.white,
    borderColor: colors.grey,
    justifyContent: 'center',
    alignItems: 'center',
  },

  checkmark: {
    width: vh(10),
    height: vh(10),
    tintColor: colors.white,
  },
  checkmarkText: {
    fontSize: vh(12),
    color: colors.white,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  qtyview: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.screengrey,
    marginRight: vh(130),
    paddingHorizontal: vh(10),
    marginVertical: vh(10),
    borderRadius: 5,
  },
  return: {flexDirection: 'row', alignItems: 'center'},
});

export default styles;
