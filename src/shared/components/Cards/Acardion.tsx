import {arrowDown} from '@assets';
import {RF} from '@theme';
import React, {useState} from 'react';
import {View, TouchableOpacity, Image} from 'react-native';
import Text from '../text';
const data = [
  {
    title: 'graphic designing',
    contents: ['graphic designing', 'graphic designing'],
  },
  {
    title: 'web designing',
    content: 'Content for section 2',
  },
];

const AccordionItem = ({
  title,
  content,
  index,
  selectedIndex,
  onToggle,
}: any) => {
  const isExpanded = index === selectedIndex;

  const toggleAccordion = () => {
    onToggle(index);
  };

  return (
    <View>
      <TouchableOpacity
        style={{
          padding: RF(10),
          backgroundColor: isExpanded ? '#fff' : '#fff',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          borderRadius: RF(8),
          paddingVertical: RF(16),
          marginTop: RF(8),
          elevation: 0.5,
        }}
        onPress={toggleAccordion}>
        <Text>{title}</Text>
        <Image
          source={arrowDown}
          style={{width: RF(16), height: RF(16), resizeMode: 'contain'}}
        />
      </TouchableOpacity>

      {isExpanded && (
        <View>
          {Array.isArray(content) ? (
            content.map((item, contentIndex) => (
              <TouchableOpacity
                style={{
                  padding: RF(10),
                  backgroundColor: '#FFF',
                  marginTop: RF(8),
                }}>
                <Text key={contentIndex} color={'black'}>
                  {item}
                </Text>
              </TouchableOpacity>
            ))
          ) : (
            <TouchableOpacity
              style={{
                padding: RF(10),
                backgroundColor: '#FFF',
                marginTop: RF(8),
              }}>
              <Text color={'black'}>{content}</Text>
            </TouchableOpacity>
          )}
        </View>
      )}
    </View>
  );
};

const Accordion = () => {
  const [selectedContent, setSelectedContent] = useState(null);

  const handleToggle = (index: any) => {
    setSelectedContent(prevIndex => (prevIndex === index ? null : index));
  };

  return (
    <View>
      {data.map((item, index) => (
        <AccordionItem
          key={index}
          index={index}
          title={item.title}
          content={item.content || item.contents}
          selectedIndex={selectedContent}
          onToggle={handleToggle}
        />
      ))}
    </View>
  );
};

export default Accordion;
