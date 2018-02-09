/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  View
} from 'react-native';
import Svg,{
    Circle,
    Ellipse,
    G,
    LinearGradient,
    RadialGradient,
    Line,
    Path,
    Polygon,
    Polyline,
    Rect,
    Symbol,
    Text,
    Use,
    Defs,
    Stop
} from 'react-native-svg';

import { AreaChart,YAxis  } from 'react-native-svg-charts'
import * as shape from 'd3-shape'
const data = [ 12, 10, 11, 8, 6, 7, 5, 2, 3, 1,]
const dataT = [ 8, 12, 9, 6, 4, 5, 2,]
const dataDate = ['Aug 03, 2017','Aug 06, 2017','Aug 09, 2017','Aug 12, 2017','Aug 15, 2017','Aug 18, 2017','Aug 21, 2017','Aug 24, 2017','Aug 27, 2017','Aug 30, 2017']
const deltaX = 320
const deltaY = 200
const x = 40
const y = -20
type Props = {};
export default class App extends Component<Props> {
  constructor(props){
    super(props);
    this.state=({
      index: 0,
      value: 0
    })
  }
  render() {  
    Xlabel = <View/>
    i = -1;
    Xlabel = data.map(function(item) {
      i++;
      return(
        <Text     key={item}
                  x={x + i*deltaX/27 }
                  y={y + i*deltaX/10 }
                  stroke="#000"
                  fill="#000"
                  textAnchor="start"
              >
                  Aug 09,2017</Text> 
        )
    })

    XlabelT = <View/>
    i = -1;
    XlabelT = dataT.map(function(item) {
      i++;
      return(
        <Text     key={item}
                  x={x -10  + i*deltaX/12.5}
                  y={y + i*deltaX/7.3}
                  stroke="#000"
                  fill="#000"
                  textAnchor="start"
              >
                  Aug 09,2017</Text> 
        )
    })

        const Tooltip = ({ x, y }) => (
            <G
                x={ x(this.state.index) }
                key={ 'tooltip' }
                
            > 
              <Rect
                        height={ 30 }
                        width={ 100 }
                        stroke={ 'black' }
                        fill={ 'black' }
                        ry={ 10 }
                        rx={ 10 }
                        x={ -45}
                        y={ 0}
                    />
              <Text
                  x={ 5 }
                  y={ 20 }
                  textAnchor={ 'middle' }
                  stroke={ 'white' }
              >
                  { dataDate[this.state.index] } 
              </Text>
            </G>
        )
    
    return (
      <View style={styles.container}>
      <Svg
            height="100"
            width="200"
        >
        <Text
                    x="50"
                    y="40"
                    size="30"
                    stroke="#600"
                    fill="#600"
                    textAnchor="start"
                >
                    Weight</Text>
          <Text
            x="50"
            y="90"
            stroke="#600"
            fill="#600"
            textAnchor="start"
            >
                  kg/lbs</Text>
        </Svg>
        <View style={{flexDirection:'row',marginTop: 10}}>
          <View style={{width: 50}}>
            <Svg
              height="100"
              width="50"
              >
              <Text
                          x="30"
                          y="10"
                          stroke="#000"
                          fill="#000"
                          textAnchor="start"
                      >
                          97</Text>
                <Text
                  x="30"
                  y="50"
                  stroke="#000"
                  fill="#000"
                  textAnchor="start"
                  >
                        92</Text>
                  <Text
                  x="30"
                  y="100"
                  stroke="#000"
                  fill="#000"
                  textAnchor="start"
                  >
                        87</Text>      
              </Svg>
          </View>
          <AreaChart
                      numberOfTicks = {2}
                      style={ { height: 100, width: 320 , } }
                      dataPoints={ data }
                      contentInset={ { top: 10, left: 5,right: 10, bottom: 15} }
                      curve={shape.curveNatural}
                      svg={{
                          fill: 'rgba(134, 65, 244, 0.2)',
                          stroke: 'rgb(134, 65, 244)',
                      }}
                      extras={ [  Tooltip ] }
                      renderExtra={ ({ item, ...args }) => item(args) }

                      renderDecorator={ ({ x, y, index, value }) => (
                        <Circle
                          key={ index }
                          cx={ x(index) }
                          cy={ y(value) }
                          r={ 4 }
                          stroke={ 'rgb(134, 65, 244)' }
                          fill={ 'white' }
                          onPress={ () => this.setState({index: index,value: value }) }
                        />
                    ) }
                  />
        </View>    
        
          <Svg
                height="100"
                width="400"
            >
            <G
                rotation="-70"
                origin="110, 30"

            >   
              {Xlabel}                                        
            </G> 
          </Svg>
          <Svg
            height="100"
            width="200"
        >
        <Text
                    x="50"
                    y="75"
                    size="30"
                    stroke="#600"
                    fill="#600"
                    textAnchor="start"
                >
                    Total Circumference</Text>
          <Text
            x="50"
            y="90"
            stroke="#600"
            fill="#600"
            textAnchor="start"
            >
                  cm/inch</Text>
        </Svg>
        <View style={{flexDirection:'row',marginTop: 10}}>
          <View style={{width: 50}}>
            <Svg
              height="100"
              width="50"
              >
              <Text
                          x="20"
                          y="10"
                          stroke="#000"
                          fill="#000"
                          textAnchor="start"
                      >
                          600</Text>
                <Text
                  x="20"
                  y="40"
                  stroke="#000"
                  fill="#000"
                  textAnchor="start"
                  >
                        400</Text>
                  <Text
                  x="20"
                  y="70"
                  stroke="#000"
                  fill="#000"
                  textAnchor="start"
                  >
                        200</Text>  
                  <Text
                  x="20"
                  y="100"
                  stroke="#000"
                  fill="#000"
                  textAnchor="start"
                  >
                        0</Text>            
              </Svg>
          </View>
          <AreaChart  
                      numberOfTicks = {3}
                      style={ { height: 100, width: 320 , } }
                      dataPoints={ dataT }
                      contentInset={ { top: 5, left: 5,right: 10, bottom: 5} }
                      curve={shape.curveNatural}
                      svg={{
                          fill: 'rgba(134, 65, 244, 0.2)',
                          stroke: 'rgb(134, 65, 244)',
                      }}
                      renderDecorator={ ({ x, y, index, value }) => (
                        <Circle
                          key={ index }
                          cx={ x(index) }
                          cy={ y(value) }
                          r={ 4 }
                          stroke={ 'rgb(134, 65, 244)' }
                          fill={ 'white' }
                        />
                    ) }
                  />
        </View>    
        
          <Svg
                height="100"
                width="400"
            >
            <G
                rotation="-60"
                origin="110, 30"
            >   
              {XlabelT}                        
            </G> 
          </Svg>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
