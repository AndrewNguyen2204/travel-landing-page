import styled from 'styled-components';



export const SignUpContainer = styled.div`
    position: relative;
    width: 100%;
    min-height: 100vh;
    background: #fff;
    overflow: hidden;

    &:before{
        content: "";
        position: absolute;
        width: 2000px;
        height: 2000px;
        border-radius: 50%;
        background: linear-gradient(-45deg,  var(--primary-color),var(--icon-color));
        top: -10%;
        right: ${({modeOn})=>(modeOn? '52%' : '48%')};
        transform:  ${({modeOn})=>(modeOn? 'translate(100%, -50%)' : 'translateY(-50%)')};;
        z-index: 6;
        transition: 1.8s ease-in-out;
    }
   

    @media (max-width:870px){
        min-height: 800px;
        height: 100vh;
        &:before{
            width: 1500px;
            height: 1500px;
            left:30%;
            bottom:   ${({modeOn})=>(modeOn? '32%' : '68%')};
            transform:  ${({modeOn})=>(modeOn? 'translate(-50%,100%)' : 'translateX(-50%)')};
            right: initial;
            top: initial;
            transition: 2s ease-in-out;
        }
        
    }

    @media (max-width:570px){
        &:before{
            bottom:  ${({modeOn})=>(modeOn? '28%' : '72%')};
            left: 50% ;
        }
       
    }
`;

export const LogoWrap = styled.div`
    position: relative;
    width: 100%;
    height: 80px;
    display: fixed;
    top: 0;
    z-index:999;
    



`;

export const FormContainer = styled.div`

    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;

`;

export const FormWrapper = styled.div`
    position: absolute;
    top: 50%;
    left: ${({modeOn})=>(modeOn? '25%' : '75%')};
    transform: translate(-50%, -50%);
    width: 50%;
    display: grid;
    grid-template-columns: 1fr;
    z-index: 5;
    transition: 1s 0.7s ease-in-out;
    
    @media (max-width:870px){
        width: 100%;
        left: 50%;
        top: ${({modeOn})=>(modeOn? '5%' : '95%')};
        transform:  ${({modeOn})=>(modeOn? 'translate(-50%, 0)' : 'translate(-50%, -100%)')};
        transition: 1s 0.8s ease-in-out;
    }

`;

export const Form = styled.form`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    grid-column: 1/2;
    grid-row: 1/2;
    transition: 0.2s 0.7s ease-in-out;
    z-index: ${({modeOn,signIn})=>(signIn? `${modeOn? '2' : '1'}` : `${modeOn? '1' : '2'}`)};
    opacity: ${({modeOn,signIn})=>(signIn? `${modeOn? '1' : '0'}`: `${modeOn? '0' : '1'}`)};

    @media (max-width:570px){
        padding: 0 1.5rem;
    }

`;


export const FormTitle = styled.h2`

    font-size: 2.2rem;
    color: #444;
    margin-bottom: 10px;

`;

export const InputField = styled.div`
    max-width: 380px;
    width: 100%;
    height: 55px;
    background: #f0f0f0;
    margin: 10px 0;
    border-radius: 55px;
    display: grid;
    grid-template-columns: 15% 85%;
    padding: 0 0.4rem;    
    

`;
export const InputFieldIcon = styled.div`
        width: 100%;
        height: 100%;
        color: #acacac;
        font-size: 1.1rem;
        display: flex;
        justify-content: center;
        align-items: center;

`;

export const Input = styled.input`
    background: none;
    outline: none;
    border: none;
    line-height: 1;
    font-weight: 600;
    font-size: 1.1rem;
    color: #333;
    &::placeholder{
        color: #aaa;
        font-weight: 400;
    }
`;


export const SocialText = styled.p`
padding: 0.7rem 0;
  font-size: 1rem;

`;


export const SocialMedia = styled.div`

display: flex;
justify-content: center;

`;

export const SocialIcon = styled.a`

    height: 46px;
  width: 46px;
  border: 1px solid #333;
  margin: 0 0.45rem;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  color: #333;
  font-size: 1.1rem;
  border-radius: 50%;
  transition: 0.3s;

    &:hover{
        color: var(--primary-color);
        border-color: var(--primary-color);
    }
`;

export const PanelsContainer = styled.div`

    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    display: grid;
    grid-template-columns: repeat(2, 1fr);

  @media (max-width:870px){
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 2fr 1fr;
  }


`;


export const LeftPanel = styled.div`

    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: space-around;
    text-align: center;
    padding: 3rem 17% 2rem 12%;
    pointer-events: ${({modeOn})=>(modeOn? 'none':'all')};
    z-index: 7;

    @media (max-width:870px){
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        padding: 2.5rem 8%;
        grid-row: 1/2;
    }

`;


export const RightPanel = styled.div`

    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: space-around;
    text-align: center;
    padding: 3rem 12% 2rem 17%;
    pointer-events: ${({modeOn})=>(modeOn? 'all':'none')};
    z-index: 7;

  @media (max-width:870px){
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    padding: 2.5rem 8%;
    grid-row: 3/4;
}

`;


export const LeftPanelContent = styled.div`

    color: var(--text-black);
    transition: 1.1s 0.4s ease-in-out;
    transform: ${({modeOn})=>(modeOn? 'translateX(-800px)':'translateX(0px)')};

    @media (max-width:870px) {
        padding-right: 15%;
        transition: 0.9s 0.6s ease-in-out;
        transform:  ${({modeOn})=>(modeOn? 'translateY(-300px)' : 'translateY(0)')};
    }

    @media (max-width:570px) {
        padding: 0.5rem 1rem;
    }

`;

export const RightPanelContent = styled.div`

    color: var(--text-black);
    transition: 1.1s 0.4s ease-in-out;
    transform: ${({modeOn})=>(modeOn? 'translateX(0px)':'translateX(800px)')};

    @media (max-width:870px) {
        padding-right: 15%;
        transition: 0.9s 0.6s ease-in-out;
        transform:  ${({modeOn})=>(modeOn? 'translateY(0px)' : 'translateY(300px)')};
    }

    @media (max-width:570px) {
        padding: 0.5rem 1rem;
    }

`;

export const LeftPanelImg = styled.img`
    width: min(480px,100%);
    
  transition: 0.9s 0.6s ease-in-out;
  transform: ${({modeOn})=>(modeOn? 'translateX(-800px)':'translateX(0px)')};

  @media (max-width:870px) {
    width: 200px;
    transition: 0.9s 0.6s ease-in-out;
    transform:  ${({modeOn})=>(modeOn? 'translateY(-500px)' : 'translateY(0)')};
}
@media (max-width: 570px){
    display: none;
}
`;

export const RightPanelImg = styled.img`
width: min(480px,100%);
  transition: 0.9s 0.6s ease-in-out;
  transform:  ${({modeOn})=>(modeOn? 'translateX(0px)':'translateX(800px)')};

  @media (max-width:870px) {
    width: 200px;
    transition: 0.9s 0.6s ease-in-out;
    transform:  ${({modeOn})=>(modeOn? 'translateY(0px)' : 'translateY(500px)')};
}
@media (max-width: 570px){
    display: none;
}
`;


export const PanelH3 = styled.h3`
font-weight: 600;
  line-height: 1;
  font-size: 1.5rem;
  @media (max-width:870px){
    font-size: 1.2rem;
  }

  

`;

export const PanelP = styled.p`
font-size: 0.95rem;
  padding: 0.7rem 0;

@media (max-width:870px){
    font-size: 0.7rem;
padding: 0.5rem 0;
  }


`;

