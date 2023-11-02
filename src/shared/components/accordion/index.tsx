import {Text} from '@components';
import React, {useState} from 'react';
import {arrowDown, arrowUp} from '@assets';
import {View, StyleSheet, Image} from 'react-native';
import Accordion from 'react-native-collapsible/Accordion';
import {RouteProp, useTheme} from '@react-navigation/native';

interface Props {
  data: any;
  navigation: any;
  route: RouteProp<{
    params: {
      data?: any;
    };
  }>;
}
const CustomAccordion = (props: Partial<Props>) => {
  const {data} = props;
  const theme: any = useTheme();
  const styles: any = useStyles(theme.colors);
  const [activeSection, setActiveSection] = useState([]);

  //   const _renderSectionTitle = (section: any) => {
  //     return (
  //       <View style={styles.content}>
  //         <Text>{section.content}</Text>
  //       </View>
  //     );
  //   };

  const _renderHeader = (section: any, index: any) => {
    let flag = false;

    if (index == activeSection[0]) {
      flag = true;
    } else {
      false;
    }

    return (
      <View style={styles.header}>
        <Text color={theme.colors.blackText} size={14} regular>
          {section.title}
        </Text>
        <Image source={flag ? arrowUp : arrowDown} style={styles.arrow} />
      </View>
    );
  };

  const _renderContent = (section: any) => {
    const sec = section.content;

    return (
      <View style={styles.content}>
        {sec.map((s: any, index: any) => (
          <Text key={index} style={styles.contentText}>
            {s}
          </Text>
        ))}
      </View>
    );
  };

  const _updateSections = (activeSections: any) => {
    setActiveSection(activeSections);
  };
  return (
    <Accordion
      activeSections={activeSection}
      sections={data}
      //   renderSectionTitle={_renderSectionTitle}
      renderHeader={_renderHeader}
      renderContent={_renderContent}
      onChange={_updateSections}
    />
  );
};

export default CustomAccordion;

export const useStyles = StyleSheet.create((color: any) => ({
  header: {
    height: 51,
    width: '100%',
    backgroundColor: color.lightGray,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 14,
  },
  headerText: {},
  content: {
    paddingHorizontal: 14,
  },
  contentText: {
    lineHeight: 48,
    borderBottomColor: 'gray',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  arrow: {
    width: 15.5,
    height: 9,
  },
}));
