import React from 'react';
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {colors} from '../assests/colors';

const DashboardScreen = ({navigation, route}) => {
  const data = route?.params?.data;

  const gradeColors = ['#8B0000', '#2E8B57', '#4B0082', '#483D8B', '#556B2F'];

  function showTimeTable() {
    navigation.navigate('Home', {id: data?.StudentId});
  }

  const renderGradeCard = ({item, index}) => {
    const randomColor = gradeColors[index % gradeColors.length];
    return (
      <View style={[styles.gradeCard, {backgroundColor: randomColor}]}>
        <Text style={styles.grade}>{item.Grade}</Text>
        <Text style={styles.percentage}>{item.Percentage}%</Text>
        <Text style={styles.courseName}>{item.CourseName}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Student Dashboard</Text>
      </View>

      {/* Student Info */}
      <View style={styles.studentInfo}>
        <Text style={styles.infoText}>ID: {data?.StudentId}</Text>
        <Text style={styles.infoText}>Name: {data?.FullName}</Text>
        <Text style={styles.infoText}>College: {data?.CollegeName}</Text>
        <Text style={styles.infoText}>Term: {data?.Term}</Text>
        <Text style={styles.infoText}>CGPA: {data?.Cgpa}</Text>
        <Text style={styles.infoText}>Courses: {data?.NoOfCourses}</Text>
        <TouchableOpacity
          style={styles.timeTableButton}
          onPress={() => showTimeTable()}>
          <Text style={styles.timeTableButtonText}>Time Table</Text>
        </TouchableOpacity>
      </View>

      {/* Grades List */}
      <FlatList
        data={data?.grades}
        numColumns={2}
        renderItem={renderGradeCard}
        keyExtractor={item => item?.CourseId.toString()}
        contentContainerStyle={styles.list}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: colors.white},
  header: {backgroundColor: colors.primary, padding: 15, alignItems: 'center'},
  headerTitle: {fontSize: 20, fontWeight: 'bold', color: colors.white},
  studentInfo: {
    padding: 20,
    backgroundColor: '#F0F8FF',
    marginHorizontal: 15,
    borderRadius: 15,
    marginBottom: 20,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  infoText: {fontSize: 16, color: colors.black, marginBottom: 8},
  list: {paddingHorizontal: 20, paddingBottom: 80},
  gradeCard: {
    flex: 1,
    margin: 10,
    padding: 20,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'space-between',
    position: 'relative',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  courseName: {
    fontSize: 14,
    fontWeight: 'bold',
    color: colors.white,
    marginTop: 20,
  },
  grade: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.white,
    textAlign: 'center',
    textShadowColor: 'rgba(0, 0, 0, 0.3)',
    textShadowOffset: {width: 1, height: 1},
    textShadowRadius: 2,
  },
  percentage: {
    position: 'absolute',
    top: 10,
    right: 10,
    fontSize: 14,
    color: colors.white,
    fontWeight: 'bold',
  },
  timeTableButton: {
    marginTop: 10,
    backgroundColor: colors.primary,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: 'center',
  },
  timeTableButtonText: {
    fontSize: 16,
    color: colors.white,
    fontWeight: 'bold',
  },
});

export default DashboardScreen;
