import react from 'react-native';
import {RNCamera} from 'react-native-camera';
import {useEffect, useRef, useState} from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import {useRoute, useNavigation} from '@react-navigation/native';
import styles from './styles';
import awaitAsyncGenerator from '@babel/runtime/helpers/esm/awaitAsyncGenerator';

const CreatePost = () => {
  const [isRecording, setIsRecording] = useState(false);
  const camera = useRef();

  const onRecord = async () => {
    if (isRecording) {
      camera.current.stopRecording();
    } else {
      const data = await camera.current.recordAsync();
      console.log(data);


  return (
    <View style={styles.container}>
      <RNCamera
        ref={camera}
        onRecordingStart={() => setIsRecording(true)}
        onRecordingEnd={() => setIsRecording(false)}
        style={styles.preview}
      />
      <TouchableOpacity
        onPress={onRecord}
        style={
          isRecording ? styles.buttonStop : styles.buttonRecord
        }
/>
      <TextInput
        value={description}
        onChangeText={setDescription}
        numberOfLines={5}
        placeholder={'Description'}
        style={styles.textInput}
      />
      <TouchableOpacity onPress={onPublish}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>Publish</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};
    }};
//export default Camera;

export default CreatePost;
