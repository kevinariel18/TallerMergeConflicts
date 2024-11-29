import { View, Text, StyleSheet, Button } from 'react-native'

export const Home = ({ navigation }) => {
    return <View style={styles.container}>
        <Text>kevin Catagña</Text>
        <Text>BIENVENIDO</Text>

        <View style={styles.botones}>

            <View style={styles.boton1}>
                <Button
                    title='CONTACTS'
                    color="#4CAF50"
                    onPress={() => {
                        navigation.navigate('ContactsNav');
                    }}
                />
            </View>



            <Button
                title='PRODUCTOS'
                color="#FF5722"
                onPress={() => {
                    navigation.navigate('ProductNav');
                }}
            />

        </View>

    </View>

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E3F2FD',
        alignItems: 'center',
        justifyContent: 'center',
    },
    botones: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 10,

    },
    boton1: {

        marginRight: 60,

    },
});
