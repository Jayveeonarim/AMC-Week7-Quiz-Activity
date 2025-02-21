import React, {useState} from 'react';
import {ScrollView, Text, View, Switch, TouchableOpacity, Alert, StyleSheet, Image} from 'react-native';


const MyChoices =() => {

  const [selectedChoices, setSelectedChoices] = useState({});
  const toggleSwitch = (choice1, choice2) =>  {
    setSelectedChoices((prev) => ({
      ...prev,
      [choice1]: !prev[choice1],
      [choice2]: prev[choice1],

    }));
  };
     const handleSubmit = () => {
      const selected = Object.keys(selectedChoices).filter((key) => selectedChoices[key]);
      const message = selected.length > 0 
      ? selected.map((choice, index) => `${index + 1}. ${choice}`).join('\n')
      : 'No Choices Selected';
      Alert.alert('Selected Choices', message)
     };

  const coffeePairs =[
    ['lights off', 'lights on'],[ 'Chugi', 'Chorva'], ['Sex', 'Chocolate'], ['mahal ko', 'mahal ako'],
  ];

  return ( 
  
    <ScrollView style={styles.container}>
  <Text style={styles.title}>Fast Talk</Text>
   <Image
          source={{
            uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGgXZowuo-3LU1El4i9lrmIoRBFPXPluRAcA&s',
          }}
         style={styles.image}
        />
 {coffeePairs.map(([choice1, choice2]) => (
<View key={choice1} style={styles.text}>
<Text style={styles.text, {color: selectedChoices[choice1] ? 'black' : 'grey'}}>{choice1}</Text>
<Switch
value={selectedChoices[choice1] || false}
onValueChange = {() => toggleSwitch(choice1, choice2)}
trackColor= {{true: 'blue', false: 'grey'}}
thumbColor={selectedChoices[choice1] ? 'blue' : 'grey'}
/>
<Text style={styles.text, {color: selectedChoices[choice2] ? 'black' : 'grey'}}>{choice2}</Text>
</View>
 ))}
<TouchableOpacity onPress={handleSubmit}>

<Text style={styles.button}>Submit</Text>
</TouchableOpacity>
  </ScrollView> 
   )
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#6a7585'
    
  },
  image: {
     
          width: 200,
          height: 200,
        
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 20,
  },  text: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 20,
    
  },
  button: {
    backgroundColor: 'blue',
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
    borderWidth: 1,
    borderRadius: 20,
   
  }
});

export default MyChoices;