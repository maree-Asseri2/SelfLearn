import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Alert,
  ScrollView,
  Image,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const Cards = ({navigation}) => {
  return (
    <LinearGradient colors={['#00D3A0', '#5ab3f0']} style={styles.container}>
      <ScrollView>
        <View>
          <View style={styles.row}>
            <TouchableOpacity
              style={styles.Bcard}
              onPress={() => navigation.navigate('PL')}>
              <View style={styles.Cicon}>
                <Image
                  source={require('../../assets/Images/coding.png')}
                  style={styles.icon}
                />
              </View>
              <View style={styles.card}>
                <Text style={styles.title}>Programming Languages</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.Bcard}
              onPress={() => navigation.navigate('Ad')}>
              <View style={styles.Cicon}>
                <Image
                  source={require('../../assets/Images/photoshop.png')}
                  style={styles.icon}
                />
              </View>
              <View style={styles.card}>
                <Text style={styles.title}>AD Photoshop</Text>
              </View>
            </TouchableOpacity>
          </View>

          <View style={styles.row}>
            <TouchableOpacity
              style={styles.Bcard}
              onPress={() => navigation.navigate('Accounting')}>
              <View style={styles.Cicon}>
                <Image
                  source={require('../../assets/Images/accounting.png')}
                  style={styles.icon}
                />
              </View>
              <View style={styles.card}>
                <Text style={styles.title}>Accounting</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.Bcard}>
              <View style={styles.Cicon}>
                <Image
                  source={require('../../assets/Images/marketing.png')}
                  style={styles.icon}
                />
              </View>
              <View style={styles.card}>
                <Text style={styles.title}>Marketing</Text>
              </View>
            </TouchableOpacity>
          </View>

          <View style={styles.row}>
            <TouchableOpacity style={styles.Bcard}>
              <View style={styles.Cicon}>
                <Image
                  source={require('../../assets/Images/translation.png')}
                  style={styles.icon}
                />
              </View>
              <View style={styles.card}>
                <Text style={styles.title}>Languages</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.Bcard}>
              <View style={styles.Cicon}>
                <Image
                  source={require('../../assets/Images/ai.png')}
                  style={styles.icon}
                />
              </View>
              <View style={styles.card}>
                <Text style={styles.title}>Artificial Intelligence</Text>
              </View>
            </TouchableOpacity>
          </View>

          <View style={styles.row}>
            <TouchableOpacity style={styles.Bcard}>
              <View style={styles.Cicon}>
                <Image
                  source={require('../../assets/Images/shopping.png')}
                  style={styles.icon}
                />
              </View>
              <View style={styles.card}>
                <Text style={styles.title}>E-Commerce</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.Bcard}>
              <View style={styles.Cicon}>
                <Image
                  source={require('../../assets/Images/time.png')}
                  style={styles.icon}
                />
              </View>
              <View style={styles.card}>
                <Text style={styles.title}>Business Managment</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.row}>
            <TouchableOpacity style={styles.Bcard}>
              <View style={styles.Cicon}>
                <Image
                  source={require('../../assets/Images/data-science.png')}
                  style={styles.icon}
                />
              </View>
              <View style={styles.card}>
                <Text style={styles.title}>Data Science</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.Bcard}>
              <View style={styles.Cicon}>
                <Image
                  source={require('../../assets/Images/net.png')}
                  style={styles.icon}
                />
              </View>
              <View style={styles.card}>
                <Text style={styles.title}>Networks</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.row}>
            <TouchableOpacity style={styles.Bcard}>
              <View style={styles.Cicon}>
                <Image
                  source={require('../../assets/Images/embedded.png')}
                  style={styles.icon}
                />
              </View>
              <View style={styles.card}>
                <Text style={styles.title}>Embedded Systems</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.Bcard}>
              <View style={styles.Cicon}>
                <Image
                  source={require('../../assets/Images/cw.png')}
                  style={styles.icon}
                />
              </View>
              <View style={styles.card}>
                <Text style={styles.title}> Content writing</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.row}>
            <TouchableOpacity style={styles.Bcard}>
              <View style={styles.Cicon}>
                <Image
                  source={require('../../assets/Images/game-development.png')}
                  style={styles.icon}
                />
              </View>
              <View style={styles.card}>
                <Text style={styles.title}>Games Development</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.Bcard}>
              <View style={styles.Cicon}>
                <Image
                  source={require('../../assets/Images/testing.png')}
                  style={styles.icon}
                />
              </View>
              <View style={styles.card}>
                <Text style={styles.title}>Testing</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.row}>
            <TouchableOpacity style={styles.Bcard}>
              <View style={styles.Cicon}>
                <Image
                  source={require('../../assets/Images/devops.png')}
                  style={styles.icon}
                />
              </View>
              <View style={styles.card}>
                <Text style={styles.title}>DevOps</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.Bcard}>
              <View style={styles.Cicon}>
                <Image
                  source={require('../../assets/Images/linux.png')}
                  style={styles.icon}
                />
              </View>
              <View style={styles.card}>
                <Text style={styles.title}>Linux</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.row}>
            <TouchableOpacity style={styles.Bcard}>
              <View style={styles.Cicon}>
                <Image
                  source={require('../../assets/Images/cyber-security.png')}
                  style={styles.icon}
                />
              </View>
              <View style={styles.card}>
                <Text style={styles.title}>Cyber Security</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.Bcard}>
              <View style={styles.Cicon}>
                <Image
                  source={require('../../assets/Images/database.png')}
                  style={styles.icon}
                />
              </View>
              <View style={styles.card}>
                <Text style={styles.title}>Database</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.row}>
            <TouchableOpacity style={styles.Bcard}>
              <View style={styles.Cicon}>
                <Image
                  source={require('../../assets/Images/exchange.png')}
                  style={styles.icon}
                />
              </View>
              <View style={styles.card}>
                <Text style={styles.title}> Currency exchange</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.Bcard}>
              <View style={styles.Cicon}>
                <Image
                  source={require('../../assets/Images/photographer.png')}
                  style={styles.icon}
                />
              </View>
              <View style={styles.card}>
                <Text style={styles.title}>Photographer</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.row}>
            <TouchableOpacity style={styles.Bcard}>
              <View style={styles.Cicon}>
                <Image
                  source={require('../../assets/Images/web-development.png')}
                  style={styles.icon}
                />
              </View>
              <View style={styles.card}>
                <Text style={styles.title}>Web Development</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.Bcard}>
              <View style={styles.Cicon}>
                <Image
                  source={require('../../assets/Images/app-development.png')}
                  style={styles.icon}
                />
              </View>
              <View style={styles.card}>
                <Text style={styles.title}>Mobile Development</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.row}>
            <TouchableOpacity style={styles.Bcard}>
              <View style={styles.Cicon}>
                <Image
                  source={require('../../assets/Images/graphic-designer.png')}
                  style={styles.icon}
                />
              </View>
              <View style={styles.card}>
                <Text style={styles.title}>Graphic Design</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.Bcard}>
              <View style={styles.Cicon}>
                <Image
                  source={require('../../assets/Images/responsive.png')}
                  style={styles.icon}
                />
              </View>
              <View style={styles.card}>
                <Text style={styles.title}> ICDL</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.row}>
            <TouchableOpacity style={styles.Bcard}>
              <View style={styles.Cicon}>
                <Image
                  source={require('../../assets/Images/motion-graphic.png')}
                  style={styles.icon}
                />
              </View>
              <View style={styles.card}>
                <Text style={styles.title}>Motion Graphic</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.Bcard}>
              <View style={styles.Cicon}>
                <Image
                  source={require('../../assets/Images/motherboard.png')}
                  style={styles.icon}
                />
              </View>
              <View style={styles.card}>
                <Text style={styles.title}> Arduino</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.row}>
            <TouchableOpacity style={styles.Bcard}>
              <View style={styles.Cicon}>
                <Image
                  source={require('../../assets/Images/youtube.png')}
                  style={styles.icon}
                />
              </View>
              <View style={styles.card}>
                <Text style={styles.title}>Youtube Content</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.Bcard}>
              <View style={styles.Cicon}>
                <Image
                  source={require('../../assets/Images/self-employed.png')}
                  style={styles.icon}
                />
              </View>
              <View style={styles.card}>
                <Text style={styles.title}> Freelancer</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.row}>
            <TouchableOpacity
              style={styles.Bcard}
              onPress={() => navigation.navigate('SEO')}>
              <View style={styles.Cicon}>
                <Image
                  source={require('../../assets/Images/seo.png')}
                  style={styles.icon}
                />
              </View>
              <View style={styles.card}>
                <Text style={styles.title}>SEO</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.Bcard}>
              <View style={styles.Cicon}>
                <Image
                  source={require('../../assets/Images/actors.png')}
                  style={styles.icon}
                />
              </View>
              <View style={styles.card}>
                <Text style={styles.title}>Voiceover</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.row}>
            <TouchableOpacity style={styles.Bcard}>
              <View style={styles.Cicon}>
                <Image
                  source={require('../../assets/Images/news-anchor.png')}
                  style={styles.icon}
                />
              </View>
              <View style={styles.card}>
                <Text style={styles.title}>Press and Media</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.Bcard}>
              <View style={styles.Cicon}>
                <Image
                  source={require('../../assets/Images/ux-design.png')}
                  style={styles.icon}
                />
              </View>
              <View style={styles.card}>
                <Text style={styles.title}>UI/UX</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: '#20c7b7',
  },

  title: {
    fontSize: 15,
    fontWeight: 'bold',
    top: 15,
    textAlign: 'center',
    color: 'black',
  },
  Bcard: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    marginHorizontal: 10,
    marginVertical: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 4,
    width: 150,
    height: 150,
    top: 40,
    left: 10,
  },
  row: {
    flexDirection: 'row',
    bottom: 30,
  },
  icon: {
    width: 70,
    height: 70,
  },
  Cicon: {
    alignItems: 'center',
  },
});

export default Cards;
