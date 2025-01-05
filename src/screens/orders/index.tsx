import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, ActivityIndicator } from 'react-native';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import { colors } from '../../theme';
import { vh } from '../../theme/dimensions';
import styles from './styles';
import AppHeader from '../../components/appHeader';
import { Icons } from '../../assets';
import AppWrapper from '../../components/appWrapper';
import Toast from 'react-native-simple-toast'

const Orders = () => {
  const [orders, setOrders] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOrders = async () => {
      const userId = auth().currentUser?.uid;
      if (userId) {
        try {
          const ordersSnapshot = await firestore()
            .collection('users')
            .doc(userId)
            .collection('orders')
            .orderBy('orderDate', 'desc')
            .get();

          const ordersList = ordersSnapshot.docs.map((doc) => {
            const orderData = doc.data();
            const itemCount = orderData.items ? orderData.items.length : 0;
            const brands = orderData.items.map((item: any) => item.brand).join(', ');

            return { ...orderData, itemCount, brands };
          });

          setOrders(ordersList);
        } catch (error) {
          Toast.show('Orders could not be fetched', Toast.SHORT);
        } finally {
          setLoading(false);
        }
      }
    };

    fetchOrders();
  }, []);

  const renderOrderItem = ({ item }: any) => {
    return (
      <View style={styles.orderItem}>
        <Text style={styles.orderId}>
          ORDER ID:{' '}<Text style={styles.idText}>{item.orderId}</Text>
        </Text>
        <Text style={styles.orderId}>
          PAYMENT ID:{' '}<Text style={styles.idText}>{item.paymentId || 'Not Available'}</Text>
        </Text>
        <Text style={styles.orderDate}>
          Order Date:{' '}<Text style={styles.idText}>{item.orderDate.toDate().toLocaleDateString()}</Text>
        </Text>

        <Text style={styles.orderDate}>Total Amount:{' '}<Text style={styles.idText}>₹{item.totalAmount}</Text></Text>
        <Text style={styles.orderDate}>Status:{' '}<Text style={styles.idText}>{item.status}</Text></Text>
        <Text style={styles.orderDate}>Items:{' '}<Text style={styles.idText}>{item.itemCount}</Text></Text>
        {/* <Text style={styles.orderStatus}>Brands: {item.brands}</Text> */}
      </View>
    );
  };

  return (
    <AppWrapper>
      <AppHeader
        title="Order History"
        backicon={Icons.back}
        backColor={colors.charcol}
        backHeight={vh(20)}
        backWidth={vh(20)}
        marginLeft={vh(10)}
      />

      {loading ? (
        <ActivityIndicator size="large" color={colors.charcol} style={styles.activity} />
      ) : orders.length === 0 ? (
        <Text style={styles.noOrderText}>
          No orders have been done yet
        </Text>
      ) : (
        <FlatList
          data={orders}
          renderItem={renderOrderItem}
          keyExtractor={(item, index) => index.toString()}
        />
      )}
    </AppWrapper>
  );
};

export default Orders;
