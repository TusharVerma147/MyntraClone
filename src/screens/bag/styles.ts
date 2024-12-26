import {StyleSheet} from 'react-native';
import {vh, vw, SCREEN_WIDTH} from '../../theme/dimensions';
import {colors} from '../../theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    padding: vh(15),
  },
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
    resizeMode: 'cover',
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
  footer: {
    padding: vh(15),
    borderColor: colors.grey,
    backgroundColor: colors.white,
  },
  emptyContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: vh(10),
  },
  emptybag: {
    height: vh(200),
    width: vw(200),
  },
  emptyMessage: {
    fontSize: vh(18),
    fontWeight: '600',
    color: colors.charcol,
    textAlign: 'center',
  },
  emptysubMessage: {
    fontSize: vh(12),
    fontWeight: '400',
    color: colors.textGrey,
    textAlign: 'center',
  },
  priceDetailsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: vh(5),
  },
  priceDetailsText: {
    fontSize: vh(14),
    color: colors.charcol,
  },
  priceDetailsValue: {
    fontSize: vh(14),
    color: colors.charcol,
  },
  discountValue: {
    fontSize: vh(14),
    color: colors.zeptored,
  },
  freeShipping: {
    fontSize: vh(14),
    color: colors.green,
  },
  totalAmountContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: vh(10),
    borderTopWidth: 1,
    borderTopColor: colors.platinum,
    paddingTop: vh(10),
  },
  totalText: {
    fontSize: vh(16),
    fontWeight: '700',
    color: colors.charcol,
  },
  totalValue: {
    fontSize: vh(16),
    fontWeight: '700',
    color: colors.charcol,
  },
  checkoutButton: {
    marginTop: vh(10),
    backgroundColor: colors.zeptored,
    padding: vh(15),
    borderRadius: 5,
    alignItems: 'center',
  },
  checkoutButtonText: {
    fontSize: vh(16),
    color: colors.white,
    fontWeight: '700',
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
  couponcontainer: {padding: vh(20), backgroundColor: colors.white},
  couponbutton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  applycoupon: {
    fontSize: vh(16),
    fontWeight: '600',
    color: colors.charcol,
  },
  viewcoupon: {
    fontSize: vh(16),
    fontWeight: '600',
    color: colors.zeptored,
  },
  infoview: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: vh(20),
  },
  iconview: {alignItems: 'center'},
  icon: {
    height: vh(30),
    width: vh(30),
    tintColor: colors.charcol,
  },
  infotext: {fontSize: vh(10)},
  taglinecont: {flexDirection: 'row', paddingHorizontal: vh(20)},
  taglinetext: {
    fontSize: vh(12),
    textAlign: 'justify',
    fontWeight: '500',
    color: colors.charcol,
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
  button: {margin: vh(10)},
  buttontext: {fontSize: vh(16)},
});

export default styles;
