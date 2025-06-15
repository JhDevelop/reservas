import React from 'react';
import { Modal, View, Text, StyleSheet, Image } from 'react-native';
import { ButtonPrimary } from '../buttons';

export interface PopupProps {
  visible: boolean;
  onClose: () => void;
}

export const MapPopup: React.FC<PopupProps> = ({ visible, onClose }) => {
  return (
    <Modal
      visible={visible}
      transparent={true}
      animationType="fade"
      onRequestClose={onClose}
    >
      <View style={styles.modalOverlay}>
        <View style={styles.modalContainer}>
          <View style={styles.imageContainer}>
            <Image
              style={styles.image}
              source={{
                uri: 'https://picsum.photos/200',
              }}
            />
          </View>

          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>¡Este es un Popup!</Text>
            <Text style={styles.modalMessage}>hoo</Text>

            <ButtonPrimary title="Cerrar" func={onClose} />
          </View>

          <View style={styles.modalFooter}></View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(8, 32, 53, 0.679)',
  },
  modalContainer: {
    backgroundColor: 'white',
    borderRadius: 28,
    alignItems: 'center',
    width: 250,
    overflow: 'hidden',
  },
  imageContainer: {
    width: 200,
    height: 200,
    borderRadius: 100,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: -100,
    zIndex: 1,
    
  },
  image: {
    width: 170,
    height: 170,
    borderRadius: 85,
  },
  modalContent: {
    marginTop: 90,
    padding: 20,
    alignItems: 'center',
    zIndex: 0,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  modalMessage: {
    fontSize: 14,
    marginBottom: 20,
  },
  modalFooter: {
    width: '100%',
    height: 40,
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 100,
    backgroundColor: 'white',
  },
});

