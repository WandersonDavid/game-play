import React, { ReactNode } from 'react';
import { Text, View } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';
import { LinearGradient } from 'expo-linear-gradient';
import { theme } from '../../global/styles/theme';
import { styles } from './styles';
import { Feather } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
type Props = {
  title: string;
  action?: ReactNode;
}

export const Header = ({ title, action }: Props) => {

  const navigation = useNavigation();

  const handlerGoBack = () => {
    navigation.goBack()
  }

  return (
    <LinearGradient
      style={styles.container}
      colors={[theme.colors.secondary100, theme.colors.secondary40]}
    >

      <BorderlessButton
      onPress={handlerGoBack}
      >
        <Feather
          name="arrow-left"
          size={24}
          color={theme.colors.heading}
        />
      </BorderlessButton>
      <Text style={styles.title}>
        {title}
      </Text>

      {action &&
        <View>
          {action}
        </View>
      }

    </LinearGradient>
  );
}