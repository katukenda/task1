import *as actionTypes from'../actions/actionTypes';

const initialState ={ 

    email:'',
    password:'',
    fullname:'',
    number:'',
    emailReg: '',
    passwordReg: '',
    repassword:'',
    showLogin:true,
    
}



const reducer = (state = initialState , action) => {
   
    switch(action.type){
        
        case actionTypes.LOGIN_EMAIL:
            
            return{
                ...state,
               email:[action.loginData],
               
            };

            case actionTypes.LOGIN_PASSWORD:
            return{
                ...state,
                password:[action.loginData]

            };
            case actionTypes.REG_FULLNAME:
                return{
                    ...state,
                   fullname:[action.regData]
    
                };
                case actionTypes.REG_EMAIL:
                    return{
                        ...state,
                        emailReg:[action.regData]
        
                    };
                    case actionTypes.REG_PASSWORD:
                        return{
                            ...state,
                            passwordReg:[action.regData]
            
                        };
                        case actionTypes.REG_REPASSWORD:
                            return{
                                ...state,
                                repassword:[action.regData]
                
                            };
                            case actionTypes.REG_NUMBER:
                                return{
                                    ...state,
                                    number:[action.regData]
                    
                                };

        default: 
        return  state;
      
    }
   
   

    

};

export default reducer;