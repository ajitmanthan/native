import axios from 'axios';
import { useState } from 'react';
import { Button, View, TextInput } from 'react-native';

export default function HomeScreen() {
  const [data, setData] = useState({
name:'',
password:''
  });



  const handleInputChange = (name,value) => {
    setData({...data,[name]:value});
  };


  const postData = async () => {
    const response = await axios.post('http://localhost:9999/createUser',data) 
   };

  return (
    <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <TextInput 
        value={data.name} 
        onChangeText={(text)=>handleInputChange('name',text)} 
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, width: '80%', marginBottom: 20 }}
        placeholder="Name" 
      />

      <TextInput 
        value={data.password} 
        onChangeText={(text)=>handleInputChange('password',text)} 
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, width: '80%', marginBottom: 20 }}
        placeholder="Password" 
      />


{/* fwa */}
      <Button title='Send' onPress={postData} />
    </View>
  );
}
