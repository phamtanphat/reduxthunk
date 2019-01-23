import React , {Component} from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../redux/reducer/actionCreators'
//stateless component
//functional component
// export function Word(){
//     return(
//         <div>
//             <h3>One</h3>
//             <p3>Mot</p3>
//         </div>
//     );
// }
// const Word = (props) =>{
//     return(
//         <div>
//             <h3 style={{color : props.wordinfo.isMemorized ? 'green' : 'red'}}>
//                 {props.wordinfo.en}
//             </h3>
//             <p3>Mot</p3>
//         </div>
//     );
// }
// export default Word;

class Word extends Component{
    render(){
        const { word } = this.props
        const {en , vn , isMemorized} = word;
        return(
        <div className="word">
            <div className="word-container">
            <h3 className="text-success">{en}</h3>
            <h3 className="text-danger">
                {isMemorized ? '----' : vn}
            </h3>
            </div>
            <div className="btn-container">
            <button
                className={isMemorized ? "btn btn-success" : "btn btn-danger"}
                onClick={() => this.props.toggleWord(word._id ,!word.isMemorized)}>
                {isMemorized ? 'Forgot' : 'isMemorized'}
            </button>
            <button 
                className="btn btn-warning"
                onClick={() => this.props.removeWord(word._id)}>
                Remove
            </button>
            </div>
        </div>
        );
    }
}
export default connect(null,actionCreators)(Word);
