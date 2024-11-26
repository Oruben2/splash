import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native'; // Corregimos la importación de Text y View
import { Badge, Divider } from 'react-native-paper'; // Badge y Divider sí están en react-native-paper

export default function TabTwoScreen() {
  // Estado para el número del Badge
  const [badgeCount, setBadgeCount] = useState(3);

  // Función para aumentar el número del Badge cuando se hace clic en el botón
  const handleButtonClick = () => {
    setBadgeCount(badgeCount + 1);
  };

  return (
    <View style={styles.container}> {/* Usamos View en lugar de ThemedView */}
      {/* Ejemplo de Badge sobre el botón Explore */}
      <Text style={styles.title}>Badge</Text> {/* Usamos Text en lugar de ThemedText */}
      <Text>
        El componente Badge se utiliza para mostrar una pequeña etiqueta con un número o texto. Es comúnmente usado para
        notificaciones o para mostrar cantidades.
      </Text>
      
      {/* Botón Explore con Badge */}
      <TouchableOpacity style={styles.button} onPress={handleButtonClick}>
        <Text style={styles.buttonText}>Explore</Text> {/* Usamos Text en lugar de ThemedText */}
        <Badge style={styles.badge}>{badgeCount}</Badge> {/* Badge sobre el botón con número variable */}
      </TouchableOpacity>

      <Divider style={styles.divider} /> {/* Divider para separar los ejemplos */}
      
      {/* Ejemplo de Divider con lista de nombres */}
      <Text style={styles.title}>Divider</Text>
      <Text>
        El componente Divider crea una línea divisoria que se utiliza para separar visualmente diferentes secciones de
        contenido.
      </Text>

      {/* Lista de nombres con Divider */}
      <Text style={styles.title}>Lista de nombres:</Text> {/* Usamos Text en lugar de ThemedText */}
      <View style={styles.listContainer}>
        <Text>Salmerón Rodríguez Jonathan Alexis – 20151671</Text>
        <Divider style={styles.divider} />
        <Text>Cardona Zúñiga Yahaira Viviana – 19150308</Text>
        <Divider style={styles.divider} />
        <Text>Ruvalcaba Brayan Sebastián – 19150358</Text>
        <Divider style={styles.divider} />
        <Text>Espinosa Martínez Antonio Alejandro – 19151676</Text>
        <Divider style={styles.divider} />
        <Text>García García Oscar Adrían - 19150345</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  badge: {
    backgroundColor: '#6200ee',
    color: 'white',
    position: 'absolute',
    top: -15,
    right: -15,
    fontSize: 20, // Hacemos el badge más grande
    minWidth: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#6200ee',
    paddingVertical: 8, // Hacemos el botón más pequeño
    paddingHorizontal: 15,
    borderRadius: 5,
    position: 'relative',
    alignItems: 'center',
    marginVertical: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 16, // Hacemos el texto del botón un poco más pequeño
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  listContainer: {
    marginVertical: 20,
  },
  divider: {
    marginVertical: 10,
    backgroundColor: '#ddd',
  },
});
