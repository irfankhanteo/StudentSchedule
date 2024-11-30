import React, { useState } from 'react';
import { FlatList, ScrollView, StyleSheet, Text, View } from 'react-native';
import { colors } from '../assests/colors';
import Card from '../components/Card';
import HomeTab from '../components/HomeTab';

const HomeScreen = () => {
  const [selectedDay, setSelectedDay] = useState('Monday');
  const data = [
    {
      id: '1',
      title: 'Android Development',
      name: 'Ritesh Deshmukh',
      location: '704',
      time: '08:00 - 10:00',
      colors: ['#ff9a9e', '#fad0c4'],
    },
    {
      id: '2',
      title: 'Design Thinking',
      name: 'Kriti Sanon',
      location: '203',
      time: '13:30 - 15:00',
      colors: ['#ff6a00', '#ee0979'],
    },
    {
      id: '3',
      title: 'Data Visualization',
      name: 'Sunny Deol',
      location: '316',
      time: '16:30 - 17:30',
      colors: ['#7f7fd5', '#86a8e7'],
    },
  ];

  const renderCard = ({item}) => <Card item={item} />;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Time Table</Text>
      </View>
      <View>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            paddingHorizontal: 20,
            paddingVertical: 10,
            gap: 10,
          }}>
            {
                ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"].map((day, index) => (
                    <HomeTab selectedDay={selectedDay} onPress={()=>{
                        setSelectedDay(day);
                    }} key={index} title={day} />
                ))
            }
        </ScrollView>
      </View>
      <FlatList
        data={data}
        renderItem={renderCard}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.list}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: colors.white},
  header: {backgroundColor: colors.primary, padding: 15, alignItems: 'center'},
  headerTitle: {fontSize: 20, fontWeight: 'bold', color: colors.white},
  list: {paddingHorizontal: 20, paddingBottom: 80},
});

export default HomeScreen;
