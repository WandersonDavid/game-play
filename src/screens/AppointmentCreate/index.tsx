import React, { useState } from 'react';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native'
import { Text, View, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import { Background } from '../../components/Background';
import { Header } from '../../components/Header';
import { styles } from './styles'
import { CategorySelect } from '../../components/CategorySelect';
import { Feather } from '@expo/vector-icons'
import { theme } from '../../global/styles/theme';
import { GuidIcon } from '../../components/GuidIcon';
import { SmallInput } from '../../components/SmallInput';
import { TextArea } from '../../components/TextArea';
import { Button } from '../../components/Button';


export const AppointmentCreate = () => {

  const [category, setCategory] = useState('')

  const handleCategorySelected = (categoryId: string) => {
    categoryId === category ? setCategory('') : setCategory(categoryId);
  }
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <ScrollView>
        <Header
          title="Agendar partida"
        />

        <Text style={[styles.label, { marginLeft: 24, marginTop: 32, marginBottom: 18 }]}>
          Categoria
      </Text>

        <CategorySelect
          hasCheckBox
          categorySelected={category}
          setCategory={handleCategorySelected}
        />

        <View style={styles.form}>
          <RectButton>
            <View style={styles.select}>

              {
                <GuidIcon />
                // <View style={styles.image} />
              }

              <View style={styles.selectBory}>
                <Text style={styles.label}>
                  Selecione um servidor
              </Text>
              </View>
              <Feather
                name="chevron-right"
                color={theme.colors.highlight}
                size={18}
              />
            </View>
          </RectButton>

          <View style={styles.field}>

            <View>
              <Text style={styles.label}>
                Dia e mês
            </Text>
              <View style={styles.column}>
                <SmallInput maxLength={2} />
                <Text style={styles.divider}>
                  /
            </Text>
                <SmallInput maxLength={2} />
              </View>
            </View>

            <View>
              <Text style={styles.label}>
                Horário
            </Text>
              <View style={styles.column}>
                <SmallInput maxLength={2} />
                <Text style={styles.divider}>
                  :
            </Text>
                <SmallInput maxLength={2} />
              </View>
            </View>

          </View>
          <View style={[styles.field, { marginBottom: 12 }]}>
            <Text style={styles.label}>
              Descrição
          </Text>
            <Text style={styles.caracteresLimit}>
              Max 100 caracteres
          </Text>
          </View>
          <TextArea
            multiline
            maxLength={100}
            numberOfLines={5}
            autoCorrect={false}
          />
          <View style={styles.footer}>
            <Button text="Agendar" />
          </View>
        </View>

      </ScrollView>
    </KeyboardAvoidingView>
  );
}
