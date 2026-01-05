import "./forms.css"
import SideBar from ".././navbar/sidebar"
import { useState } from "react";
import { LuCopy } from "react-icons/lu";

function FormComponents() {

    const [loginUsername,setLoginUsername]=useState('');
    const [loginPassword,setLoginPassword]=useState('');
    const [loginErrorUser,setLoginErrorUser]=useState('');
    const [loginErrorPassword,setLoginErrorPassword]=useState('');
    const loginnamePattern=/^[a-zA-Z0-9](?:[a-zA-Z0-9._-]{1,18}[a-zA-Z0-9])$/;

    function loginUsernameHandler(event){
        setLoginUsername(event.target.value);
    }
    function loginUserNameCheck() {
        if(loginUsername===""){
            setLoginErrorUser('please enter username');
        }
        else if(!loginnamePattern.test(loginUsername)){
            setLoginErrorUser('please enter valid username');
        }
        else{
            setLoginErrorUser('');
        }
    }

    function loginPasswordHandler(event){
        setLoginPassword(event.target.value);
    }
    function loginPasswordCheck() {
        if(loginPassword===""){
            setLoginErrorPassword('please enter password');
        }
        else{
            setLoginErrorPassword('');
        }
    }

    function LoginHandler(event){
        event.preventDefault();
        loginUserNameCheck();
        loginPasswordCheck();
    }

    const [loginDivision,setLoginDivision]=useState({
        reactLogin:true,
        vennila:false,
        signupReact:true,
        signupVennila:false
    })

    function vennilaJsCodesHadler() {
        setLoginDivision({vennila:true});
    }
    function reactLogincodeHandler() {
        setLoginDivision({reactLogin:true});
    }

    const [loginCopied,setLoginCopied]=useState({
        reactCopied:false,
        vennilaCopied:false,
        signupreact:false,
        signupVennila:false
    });
    async function copyLoginHandler(type,text) {
        try{
            await navigator.clipboard.writeText(text);
           
            setLoginCopied(prev=>({...prev,[type]:false}));
            setTimeout(()=>{
                setLoginCopied(prev=>({...prev,[type]:true}));
            },700)
        }
        catch(error){
            console.log(`couldn't fetch`);
        }
    }
    const [codeShowbutton,setCodeShowButton]=useState(false);

    function codeShowingHadler() {
        if(codeShowbutton===false){
            setCodeShowButton(prev=>prev=true);
        }
        else{
            setCodeShowButton(prev=>prev=false);
        }
    }

const loginPreCodesReact=`
 function Login(){
    const [loginUsername,setLoginUsername]=useState('');
    const [loginPassword,setLoginPassword]=useState('');
    const [loginErrorUser,setLoginErrorUser]=useState('');
    const [loginErrorPassword,setLoginErrorPassword]=useState('');
    const loginnamePattern=/^[a-zA-Z0-9](?:[a-zA-Z0-9._-]{1,18}[a-zA-Z0-9])$/;

    function loginUsernameHandler(event){
        setLoginUsername(event.target.value);
    }
    function loginUserNameCheck() {
        if(loginUsername===""){
            setLoginErrorUser('please enter username');
        }
        else if(!loginnamePattern.test(loginUsername)){
            setLoginErrorUser('please enter valid username');
        }
        else{
            setLoginErrorUser('');
        }
    }

    function loginPasswordHandler(event){
        setLoginPassword(event.target.value);
    }
    function loginPasswordCheck() {
        if(loginPassword===""){
            setLoginErrorPassword('please enter password');
        }
        else{
            setLoginErrorPassword(' ');
        }
    }
    function LoginHandler(event){
        event.preventDefault();
        loginUserNameCheck();
        loginPasswordCheck();
    }

    <form className="loginForm">

        <div className="inputBox">
            <label for="logusername">Username:</label>
            <input type="text" placeholder="username"
            className="formInputs" value={loginUsername}
            onChange={loginUsernameHandler} id="logusername"/>
            <p className="formInputsnotDone"
            >{loginErrorUser}</p>
        </div>

        <div className="inputBox">
            <label for="logPassword">Password:</label>
            <input type="password" placeholder="password"
            className="formInputs" value={loginPassword}
            onChange={loginPasswordHandler} id="logPassword"/>
            <p className="formInputsnotDone">{loginErrorPassword}</p>
        </div>     

        <div>
            <button className="formButtons" onClick={LoginHandler}>Login</button>
        </div>

    </form>  
 }
 export default Login;  

 .loginForm{
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: center; 
    background-color: #F7F7F7;
    color: #0B0729; 
    padding: 20px;
    border-radius: 10px;
    width: 375px;
 }
 .inputBox{
    display: flex;
    flex-direction: column;
    gap: 4px;
 }
 .formInputs{
    width: 275px;
    outline: none;
    border: none;
    height: 35px;
    border-radius: 5px;
    padding-inline: 9px;
    color: #0B0729;
 }
 .formInputs::placeholder{
    color: #0B0729;
 }
 .formInputsnotDone{
    color: red;
    height: 20px;
 }
 .formButtons{
    width: 75px;
    border: none;
    outline: none;
    height: 30px;
    background-color: #0B0729;
    color: #ffffff;
    border-radius: 5px;
    margin: 5px 0px 0px 0px;
    transition: all 0.3s ease-in-out;
 }
 .formButtons:hover{
    background-color: rgb(35, 34, 92);
    cursor: pointer;
 }
`;


    const vennilaLoginCode=`vennila js codes are comming soon....`;




    const [signUpusername,setSignupUsername]=useState('');
    const [signupPassword,setSignupPassword]=useState('');
    const [signupEmail,setSignupEmail]=useState('');
    const [confirmSignup,setConfirmSignUp]=useState('');

    const [signupErrorMessage,setSignupErrorMessage]=useState({
        username:'',
        email:'',
        password:'',
        confirmPassword:''
    });
    const signupEmailPattern=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
;
    const signupusernamePattern=/^[a-zA-Z0-9](?:[a-zA-Z0-9._-]{1,18}[a-zA-Z0-9])$/;



    function signupUsernameHandler(event){
        setSignupUsername(event.target.value);
    }
   
    function signupusernameCheck() {
        if(signUpusername===""){
            setSignupErrorMessage(prev=>({
                ...prev
            }),
            {username:'please Enter username'});
        }
        else if(!signupusernamePattern.test(signUpusername)){
            setSignupErrorMessage(prev=>({
                ...prev
            }),
            {username:'Caps,nums,sml,_,-  only allowed'});
        }
        else{
            setSignupErrorMessage(prev=>({
                ...prev
            }),
            {username:''});
        }
    }

    function signupEmailHandler(event){
        setSignupEmail(event.target.value);
    }
    function signUpemailCheck(){
        if(signupEmail===""){
            setSignupErrorMessage(prev=>({
                ...prev
            }),{email:'please enter email'});
        }
        else if(!signupEmailPattern.test(signupEmail)){
            setSignupErrorMessage(prev=>({
                ...prev}),
            {email:'enter valid email'});
        }
        else{
            setSignupErrorMessage(prev=>({
                ...prev
            }),
            {email:''});
        }
    }

    function signupPasswordHandler(event){
        setSignupPassword(event.target.value);
    }
    function signupPasswordValid(){
        if(signupPassword===""){
            setSignupErrorMessage(prev=>({
                ...prev
            }),
            {password:'please enter password'});
        }
        else if(signupPassword.length<8){
            setSignupErrorMessage(prev=>({
                ...prev
            }),
            {password:'your password is weak'});
        }
        else{
            setSignupErrorMessage(prev=>({
                ...prev
            }),
            {password:''});
        }
    }

    function signupConfirmHandle(event){
        setConfirmSignUp(event.target.value);
    }
    function confirmPasswordValid() {
        if(confirmSignup===""){
            setSignupErrorMessage(prev=>({
                ...prev
            }),
            {confirmPassword:'please render to confirm password'});
        }
        else if(confirmSignup !== signupPassword){
             setSignupErrorMessage(prev=>({
                ...prev
             }),
             {confirmPassword:`password is didn't match`});
        }
        else{
             setSignupErrorMessage(prev=>({
                ...prev
             }),
             {confirmPassword:''});
        }
    }

     
    function SignUpValidation(event) {
        event.preventDefault();
     
        signupusernameCheck();
        signUpemailCheck();
        signupPasswordValid();
        confirmPasswordValid();
    }


    const signupReactCode=`
    
    const [signUpusername,setSignupUsername]=useState('');
    const [signupPassword,setSignupPassword]=useState('');
    const [signupEmail,setSignupEmail]=useState('');
    const [confirmSignup,setConfirmSignUp]=useState('');
    
    
    
<form className="loginForm">
    <div className="inputBox">
        <label htmlFor="name">Username:</label>
        <input type="text" placeholder="Username" className="formInputs" 
        id="name" value={signUpusername} onChange={signupUsernameHandler}/>

        <p className="formInputsnotDone">{signupErrorMessage.username}</p>
    </div>

    <div className="inputBox">
        <label htmlFor="email">Email:</label>
        <input type="email" placeholder="Email" className="formInputs" 
        id="email" value={signupEmail} onChange={signupEmailHandler}/>

        <p className="formInputsnotDone">{signupErrorMessage.email}</p>
    </div>
                            
    <div className="inputBox">
        <label htmlFor="passwords">Password:</label>
        <input type="password" placeholder="Password" className="formInputs" 
        id="passwords" value={signupPassword} onChange={signupPasswordHandler}/>

        <p className="formInputsnotDone">{signupErrorMessage.password}</p>
    </div>

    <div className="inputBox">
        <label htmlFor="confirm">Confirm Password:</label>
        <input type="password" placeholder="Confirm password" className="formInputs" 
        id="confirm" value={confirmSignup} onChange={signupConfirmHandle}/>

        <p className="formInputsnotDone">{signupErrorMessage.confirmPassword}</p>
    </div>

    <div>
        <button className="formButtons" onClick={SignUpValidation}>Sign Up</button>
    </div>
                            
</form>

.loginForm{
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: center; 
    background-color: #F7F7F7;
    color: #0B0729; 
    padding: 20px;
    border-radius: 10px;
    width: 375px;
}
.inputBox{
    display: flex;
    flex-direction: column;
    gap: 4px;
}
.formInputs{
    width: 275px;
    outline: none;
    border: none;
    height: 35px;
    border-radius: 5px;
    padding-inline: 9px;
    color: #0B0729;
}
.formInputs::placeholder{
    color: #0B0729;
}
.formButtons{
    width: 75px;
    border: none;
    outline: none;
    height: 30px;
    background-color: #0B0729;
    color: #fff;
    border-radius: 5px;
    margin: 5px 0px 0px 0px;
    transition: all 0.3s ease-in-out;
}
.formButtons:hover{
    background-color: rgb(35, 34, 92);
    cursor: pointer;
}
.formInputsnotDone{
    color: red;
    height: 20px;
}
`;

    const[showSignupCodes,setShowSignupCodes]=useState(false);
    function showcodeSignupHandler(){
        if(!showSignupCodes){
            setShowSignupCodes(true);
        }
        else{
            setShowSignupCodes(false);
        }
    }
    function signupreactCondition() {
        setLoginDivision({signupReact:true})
    }
    function signupVennilaCondition() {
      
        setLoginDivision({signupVennila:true})
    }

    return(
        <>
            <section className="formMainSection">

                <div className="formSidebar">
                    <SideBar />
                </div>

                <div className="wholeFormSection">

                    <div className="loginFormSection">
                        <h3 className="formHeading">Login Form Component</h3>

                        <form className="loginForm">
                            <div className="inputBox">
                                <label htmlFor="logusername">Username:</label>
                                <input type="text" placeholder="username"
                                className="formInputs" value={loginUsername}
                                onChange={loginUsernameHandler} id="logusername"/>

                                <p className="formInputsnotDone"
                                >{loginErrorUser}</p>
                            </div>

                            <div className="inputBox">
                                <label htmlFor="logPassword">Password:</label>
                                <input type="password" placeholder="password"
                                className="formInputs" value={loginPassword}
                                onChange={loginPasswordHandler} id="logPassword"/>

                                <p className="formInputsnotDone">{loginErrorPassword}</p>
                                {/* className={isloginDone.password ? "formInputsDone" : "formInputsnotDone" } */}
                            </div>
                            
                            <div>
                                <button className="formButtons" onClick={LoginHandler}>Login</button>
                            </div>
                        </form>

                        <div className="loginPreviewCode">
                            <h3 className="formHeading">Login Codes</h3>
                            <p>A login UI component react js and vennila js codes are available
                                click the show codes button to see and copy..
                            </p>
                            <button className="showButton" onClick={codeShowingHadler}>Show Codes</button>

                            {codeShowbutton && <div className="loginDivisions">
                                <div className="divisionDecide">
                                    <button className="reactButton" onClick={reactLogincodeHandler}>React js</button>
                                    <button className="jsButton" onClick={vennilaJsCodesHadler}>Vennila js</button>
                                </div>

                                {loginDivision.reactLogin && <div className="reactJsLogin">
                                    <LuCopy className={!loginCopied.reactCopied ? "formnotCopied" :  "formCopyicon"}
                                    onClick={()=>{copyLoginHandler('reactCopied',loginPreCodesReact)}}/>
                                    <pre className="loginreactpre">
                                        <p>{loginPreCodesReact}</p>
                                    </pre>
                                </div>}

                                {loginDivision.vennila &&  
                                <div className="vannilaJsLoginCode">
                                    <LuCopy className={!loginCopied.vennilaCopied ? "formnotCopied" :  "formCopyicon"}
                                    onClick={()=>{copyLoginHandler('vennilaCopied',vennilaLoginCode)}}/>
                                    <pre>
                                        <p>{vennilaLoginCode}</p>
                                    </pre>
                                </div>}

                            </div>}

                        </div>

                    </div>

                    <div className="signupSection">
                        <h3 className="formHeading">SignUp Form</h3>

                        <form className="loginForm">
                            <div className="inputBox">
                                <label htmlFor="name">Username:</label>
                                <input type="text" placeholder="Username" className="formInputs" 
                                id="name" value={signUpusername} onChange={signupUsernameHandler}/>

                                <p className="formInputsnotDone">{signupErrorMessage.username}</p>
                            </div>

                            <div className="inputBox">
                                <label htmlFor="email">Email:</label>
                                <input type="email" placeholder="Email" className="formInputs" 
                                id="email" value={signupEmail} onChange={signupEmailHandler}/>

                                <p className="formInputsnotDone">{signupErrorMessage.email}</p>
                            </div>
                            
                            <div className="inputBox">
                                <label htmlFor="passwords">Password:</label>
                                <input type="password" placeholder="Password" className="formInputs" 
                                id="passwords" value={signupPassword} onChange={signupPasswordHandler}/>

                                <p className="formInputsnotDone">{signupErrorMessage.password}</p>
                            </div>

                            <div className="inputBox">
                                <label htmlFor="confirm">Confirm Password:</label>
                                <input type="password" placeholder="Confirm password" className="formInputs" 
                                id="confirm" value={confirmSignup} onChange={signupConfirmHandle}/>

                                <p className="formInputsnotDone">{signupErrorMessage.confirmPassword}</p>
                            </div>

                            <div>
                                <button className="formButtons" onClick={SignUpValidation}>Sign Up</button>
                            </div>
                            
                        </form>

                        <div className="loginPreviewCode">

                            <div className="signUpPreview">
                                <h3 className="formHeading">SignUp Codes</h3>
                                <p>A signup form code are available in react js and vennila js click the show button to see and copy..</p>
                                <button className="showButton" onClick={showcodeSignupHandler}>Show Codes</button>

                                {showSignupCodes && <div className="loginDivisions">

                                    <div className="divisionDecide">
                                        <button className="reactButton" onClick={signupreactCondition}>React js</button>
                                        <button className="jsButton" onClick={signupVennilaCondition}>Vennila js</button>
                                    </div>

                                    {loginDivision.signupReact && <div className="signUpreactPreview">
                                        <LuCopy onClick={()=>{copyLoginHandler('signupreact',signupReactCode)}}
                                        className={!loginCopied.signupreact ? "formnotCopied" : "formCopyicon"}/>
                                        <pre className="loginreactpre">
                                            <p>{signupReactCode}</p>
                                        </pre>
                                    </div>}

                                    {loginDivision.signupVennila && <div className="signupvennilaPreview">
                                        <LuCopy />
                                        <pre className="loginreactpre">
                                            <p>vennila js code is coming soon..</p>
                                        </pre>
                                    </div>}

                                </div>}   
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </>
    );
}

export default FormComponents;