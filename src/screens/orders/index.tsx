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
import Toast from 'react-native-simple-toast';

const Orders = () => {
  const [orders, setOrders] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOrders = async () => {
      const userId = auth().currentUser?.uid;
   

      try {
        const ordersSnapshot = await firestore()
          .collection('users')
          .doc(userId) 
          .collection('user_orders')
          .get();
        
        if (!ordersSnapshot.empty) {
          const ordersData = ordersSnapshot.docs.map(doc => ({
            id: doc.id, 
            ...doc.data(), 
          }));
          setOrders(ordersData);
        } 
      } catch (error) {
        console.error('Error fetching orders:', error);
        Toast.showWithGravity('Failed to fetch orders', Toast.LONG, Toast.BOTTOM);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  const renderOrderItem = ({ item }: any) => {
    let orderDate = item.orderDate;

    if (orderDate instanceof firestore.Timestamp) {
      orderDate = orderDate.toDate();
    } 
    if (!(orderDate instanceof Date) || isNaN(orderDate.getTime())) {
      orderDate = new Date(); 
    }

    return (
      <View style={styles.orderItem}>
        <Text style={styles.orderId}>
          ORDER ID:{' '}<Text style={styles.idText}>{item.orderId}</Text>
        </Text>
        <Text style={styles.orderId}>
          PAYMENT ID:{' '}<Text style={styles.idText}>{item.paymentId || 'Not Available'}</Text>
        </Text>
        <Text style={styles.orderDate}>
          Order Date:{' '}<Text style={styles.idText}>{orderDate.toLocaleDateString()}</Text>
        </Text>
        <Text style={styles.orderDate}>Total Amount:{' '}<Text style={styles.idText}>₹{item.totalAmount}</Text></Text>
        <Text style={styles.orderDate}>Status:{' '}<Text style={styles.idText}>{item.status}</Text></Text>
        <Text style={styles.orderDate}>Items:{' '}<Text style={styles.idText}>{item.items.length}</Text></Text>
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

