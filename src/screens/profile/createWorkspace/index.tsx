import {
  Image,
  StyleSheet,
  View,
  ScrollView,
  FlatList,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';
import {
  Cards,
  CustomButton,
  DropDown,
  EnterDetail,
  FAQs,
  ImagePickers,
  PortfolioModal,
  Text,
  TextHeader,
  Wrapper,
} from '@components';
import {RF} from '@theme';
import {forward} from '@assets';
import {navigationRef} from '@services';

const CreateWorkspace = ({navigation}: any) => {
  const [changeColor, setCangeColor] = useState('#DD730A');
  const [visible, setVisible] = useState(false);

  const [completStep, setCompleteStep] = useState<any>(0);
  const [inputText, setInputText] = useState('');

  const formatDescription = (text: any) => {
    const words = text.split(' ');
    const formattedText = [];
    let currentLine = '';

    for (const word of words) {
      if ((currentLine + word).length <= 15) {
        currentLine += word + ' ';
      } else {
        formattedText.push(currentLine.trim());
        currentLine = word + ' ';
      }
    }

    if (currentLine.trim() !== '') {
      formattedText.push(currentLine.trim());
    }

    return formattedText.join('\n');
  };
  const handleTextChange = (text: any) => {
    if (text.length <= 50) {
      setInputText(text);
    }
  };
  const handlePress = () => {
    setCompleteStep(completStep + 1);
    setCangeColor('#4BD31A');
    if (completStep === 2) {
      setCompleteStep(completStep);
      setVisible(!visible);
    }
    console.log(completStep);
  };
  const handleBackPress = () => {
    setCompleteStep(Math.max(completStep - 1, 0));
    setCangeColor('#DD730A');
    if (completStep == 0) {
      navigation.goBack();
    }
  };
  const onClose = () => {
    setVisible(!visible);
  };

  return (
    <Wrapper>
      <TextHeader
        title={'Create Workspace'}
        _back
        f_Size={20}
        navigation={navigation}
        handleBack={handleBackPress}
      />
      <View style={styles.stepView}>
        <STEPS noLine color={'#4BD31A'} step={'1'} desc={'Over View'} />
        <STEPS
          color={(completStep === 0 && '#DD730A') || '#4BD31A'}
          step={'2'}
          desc={'Enter Detail'}
        />
        <STEPS
          color={
            completStep === 1 ? '#DD730A' : completStep ? changeColor : 'gray'
          }
          step={'3'}
          desc={'Add Photos'}
        />
        <STEPS
          color={
            completStep === 2
              ? '#DD730A'
              : completStep === 2
              ? changeColor
              : 'gray'
          }
          step={'4'}
          desc={'Publish'}
        />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        {!completStep && <Cards />}
        {completStep === 1 && (
          <>
            <View style={{paddingHorizontal: RF(16)}}>
              <View style={styles.fadedContainer}>
                <View>
                  <Text semiBold color={'#1D263A'}>
                    Description
                  </Text>
                  <TextInput
                    placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do"
                    placeholderTextColor={'#4F5E7B'}
                    value={formatDescription(inputText)}
                    onChangeText={handleTextChange}
                    multiline
                    style={styles.input}
                  />
                  <View style={{alignItems: 'flex-end', marginTop: RF(8)}}>
                    <Text regular size={12}>
                      {inputText.length} / 50 max
                    </Text>
                  </View>
                </View>
              </View>
            </View>
            <EnterDetail />
            <FAQs />
          </>
        )}
        {completStep === 2 && <ImagePickers />}

        <View style={{paddingHorizontal: RF(15)}}>
          <CustomButton
            title={'Continue'}
            onPress={handlePress}
            renderIcon={() => <Image source={forward} style={styles.icon} />}
          />
        </View>
      </ScrollView>
      <PortfolioModal Visible={visible} onclose={onClose} />
    </Wrapper>
  );
};

export default CreateWorkspace;

const STEPS = ({color, step, desc, noLine}: any) => {
  return (
    <>
      {noLine ? null : <View style={[styles.line, {backgroundColor: color}]} />}
      <View style={[styles.roundView, {backgroundColor: color}]}>
        <Text size={6} color={'#fff'}>
          {step}
        </Text>
      </View>
      <Text size={9} color={color} style={{marginLeft: 4}} regular>
        {desc}
      </Text>
    </>
  );
};

const styles = StyleSheet.create({
  padding: {
    paddingHorizontal: RF(20),
  },
  stepView: {
    paddingVertical: RF(13),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    backgroundColor: '#F8F8F8',
  },
  roundView: {
    height: RF(12.5),
    width: RF(12.5),
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'gray',
  },
  line: {
    width: RF(12),
    height: 1.59,
    marginHorizontal: RF(2),
  },
  icon: {
    height: RF(24),
    width: RF(24),
    resizeMode: 'contain',
    marginLeft: RF(8),
  },
  fadedContainer: {
    width: '100%',
    paddingHorizontal: RF(16),
    paddingVertical: RF(20),
    backgroundColor: '#F8F8F8',
    borderRadius: RF(8),
    marginTop: RF(16),
  },
  input: {
    backgroundColor: '#FFFFFF',
    height: RF(77),
    borderRadius: RF(8),
    textAlignVertical: 'top',
    marginTop: RF(16),
    paddingHorizontal: RF(16),
  },
});
