import React from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class App extends React.Component {


  componentWillMount() {
    this.getOrientation();
  }

  getOrientation() {
    const { mywidth, myheight } = Dimensions.get('window');
  }

  render() {
    return(
    <View
      onLayout={ () => this.handleLayoutChange}
      style={styles.container}
    >
      <Text style={styles.text}>
        {this.state.orientation}  
      </Text> 
      <Text>
        HERE IT IS</Text>  
        <Text style={styles.textbox}>gizmo</Text>  
    </View>
    );
  }


handleLayoutChange(){
  this.getOrientation()
}



getOrientation() {
  const { width, height } = Dimensions.get('window');
  const orientation = height > width ? 'Portrait' : 'Landscape';
  this.setState ({
    orientation
  });
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff'   
  },
  text: {
    fontsize: 40,
  },
  textbox: {
    height: 50,
    width: 210,
    paddingTop: 14,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
  }

});
