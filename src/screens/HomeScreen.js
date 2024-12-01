import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {colors} from '../assests/colors';
import Card from '../components/Card';
import HomeTab from '../components/HomeTab';
import api from '../services/axios-interceptor';

const HomeScreen = ({route}) => {
  const id = route?.params?.id;
  const [loading, setLoading] = useState(false);
  const [selectedDay, setSelectedDay] = useState('Monday');
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  const renderCard = ({item}) => <Card item={item} />;

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    // Filter data whenever the selected day changes
    const filtered = data.filter(item => item.Day === selectedDay);
    setFilteredData(filtered);
  }, [selectedDay, data]);

  const getData = async () => {
    setLoading(true);
    var response = await api.get('Students/GetSchedule/' + id);
    setLoading(false);
    if (response?.data) {
      setData(response?.data);
      // Set initial filtered data for the default day
      const filtered = response?.data.filter(item => item.Day === selectedDay);
      setFilteredData(filtered);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Time Table</Text>
      </View>
      {loading ? (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <ActivityIndicator size={'large'} color={'black'} />
        </View>
      ) : (
        <>
          <View>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{
                paddingHorizontal: 20,
                paddingVertical: 10,
                gap: 10,
              }}>
              {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'].map(
                (day, index) => (
                  <HomeTab
                    selectedDay={selectedDay}
                    onPress={() => setSelectedDay(day)}
                    key={index}
                    title={day}
                  />
                ),
              )}
            </ScrollView>
          </View>
          <FlatList
            data={filteredData} // Use filtered data
            renderItem={renderCard}
            keyExtractor={item => item.Id.toString()}
            contentContainerStyle={styles.list}
            ListEmptyComponent={() => (
              <View style={styles.emptyCard}>
                <Text style={styles.emptyText}>Off Day</Text>
              </View>
            )}
          />
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: colors.white},
  header: {backgroundColor: colors.primary, padding: 15, alignItems: 'center'},
  headerTitle: {fontSize: 20, fontWeight: 'bold', color: colors.white},
  list: {paddingHorizontal: 20, paddingBottom: 80, flexGrow: 1},
  emptyCard: {
    backgroundColor: colors.primary, // Light blue background
    padding: 20,
    marginHorizontal: 20,
    marginTop: 30,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.1,
    shadowRadius: 1,
    elevation: 1, // Shadow for Android
  },
  emptyText: {
    fontSize: 18,
    color: colors.white,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default HomeScreen;
