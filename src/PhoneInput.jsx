import React , {Component} from 'react';

class PhoneInput extends Component{
    constructor(props){
        super(props);

        this.state = {
            phoneNumber:'',
            phoneFormat:''
        }
    }

    normalizePhone = (value) => {

        if (!value) {
          return value
        }
        const onlyNums = value.replace(/[^\d]/g, '')
        if(onlyNums.length>10){
            return onlyNums;
        }
        if (onlyNums.length < 3) {
            return '(' + onlyNums + ' )';
        }
        if (onlyNums.length <= 6) {
          return '(' + onlyNums.slice(0, 3) + ')' + ' ' + onlyNums.slice(3)
        }
        return '(' + onlyNums.slice(0, 3) + ')' + ' ' + onlyNums.slice(3, 6) + '-' + onlyNums.slice(6, 10)
      }

      doPhoneNormal = (value) =>{
          if(!value)
          return '';
          else
        return '+1' + value.replace(/[^\d]/g, '');
        
      }

    phoneInsert = (msg) => {
        let normalizePhone = this.normalizePhone(msg);
        let normalPhone = this.doPhoneNormal(msg);
        this.setState({phoneNumber:normalPhone,phoneFormat:normalizePhone})
    }

    render(){
        return(
            <div>
                <input
                placeholder='start typing your phone'
                value={this.state.phoneFormat}
                onChange={event => {this.phoneInsert(event.target.value)}}
                />
                <div>
                    value:{this.state.phoneNumber}
                </div>
            </div>
        )
    }

}

export default PhoneInput;


  