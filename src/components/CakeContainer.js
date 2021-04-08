import React from 'react';
import {buyCake} from '../redux/cake/cakeAction';
import { connect } from 'react-redux';

const CakeContainer = (props) => {
    return ( 
        <div>
            <h2>Number of Cakes : {props.numOfCakes}</h2>
            <button onClick={()=>props.buyCake()}>Buy Cake</button>
        </div>
     );
}

const mapStateToProps = (state) =>{
    console.log(state)
    return {
        numOfCakes: state.cake.numOfCakes
    }
}

const mapDispachToProps = dispatch => {
    return {
      buyCake: () => dispatch(buyCake())
    };
  };
 
export default connect(
    mapStateToProps,
    mapDispachToProps)(CakeContainer);
