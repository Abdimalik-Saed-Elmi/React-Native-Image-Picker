import { useState } from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity, Modal, ActivityIndicator, Alert, ToastAndroid} from 'react-native';

export default function AboutScreen() {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [loading, setLoading] = useState(false);

  const AnimationLoading = () => {
    if(name | password == ""){
      ToastAndroid.show("Please enter your name or password", 
        ToastAndroid.SHORT,
        ToastAndroid.TOP
      )
      return;
    }
    else
    setLoading(true);
    setTimeout(() => {
      setModalVisible(true);
      setLoading(false);
      ToastAndroid.show("Successefully Submitted", ToastAndroid.TOP);
    }, 1000);
      // delay in ms. here it's 2 seconds.
  }

 

  return (
   
   
    <View style={styles.container}>
       <Text style={{color: '#fff', fontSize: 30, marginBottom: 25 }}>About Screen</Text>
      <TextInput style={styles.input} 
                 placeholder='Enter Your name' 
                 value={name}
                 onChangeText={(name)=> setName(name)}/>
      <TextInput style={styles.input} 
                 placeholder='Enter Your Password' 
                 value={password}
                 secureTextEntry={true}  //for password visibility toggle
                 onChangeText={(password)=> setPassword(password)}/>

                 <ActivityIndicator size='large'  color='red' animating={loading} />
      <TouchableOpacity style={styles.button} onPress={()=> AnimationLoading()}>
        <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 18}}>Submit</Text>
      </TouchableOpacity>

      <Modal visible={modalVisible} 
      animationType="slide" 
      >
        <View style={styles.modalvisible}>
          <Text style={styles.ModalData}>Hello {name}! Your password is <Text style={styles.ColorPass}>{password}</Text>. </Text>
          <TouchableOpacity style={styles.Modalbutton} onPress={() => setModalVisible(false)}>
            <Text style={styles.ModalText}>Close</Text>
          </TouchableOpacity>
        </View>
      </Modal>


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginBottom: 20,
    width: '80%',
    borderColor: '#777',
    borderWidth: 1,
    borderRadius: 5,
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    backgroundColor: '#333',
  },
  button: {
    padding: 10,
    backgroundColor: '#4CAF50',
    borderRadius: 5,
    width: '80%',
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  modalvisible:{
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 20,
    borderRadius: 10,
    justifyContent: 'center',
    
  },

  Modalbutton: {
    padding: 10,
    backgroundColor: '#2196F3',
    borderRadius: 5,
    width: '50%',
    marginTop: 20,
  },
  ModalText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
  },

  ModalData: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 20,
  },

  ColorPass: {
    color: '#192A56',
    fontWeight: 'bold',
    fontSize: 22111111,
    textAlign: 'center',
    marginBottom: 10,
  },

  ToastAndroid:{
    backgroundColor: '#000',
    color: '#fff',
    marginBottom: 20,
    padding: 10,
    borderRadius: 5,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 18,
    width: '80%',
    marginTop: 20,
    marginLeft: 'auto',
    marginRight: 'auto',
    justifyContent: 'center',
    alignItems: 'center',
  }

});
