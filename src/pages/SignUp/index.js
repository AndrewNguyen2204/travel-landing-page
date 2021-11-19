import React, { useState } from 'react';
import { ButtonSolid, ButtonTransparent } from '../../components/Button/ButtonElements';
import {FaUser, FaEnvelope, FaLock,FaTwitter,FaFacebookF,FaLinkedinIn} from 'react-icons/fa';
import { Form,LogoWrap, FormContainer, FormTitle, FormWrapper, Input, InputField, LeftPanel, LeftPanelContent, LeftPanelImg, PanelH3, PanelP, PanelsContainer, RightPanel, RightPanelContent, RightPanelImg, SignUpContainer, SocialIcon, SocialMedia, SocialText,InputFieldIcon } from './SignUpElements';
import Logo from '../../components/Logo';




const SignUp = () => {


    const [SignInMode, setSignInMode] = useState(false);

    const toggleMode = () => {
        setSignInMode(prevState => !prevState);
    }

    return (
        <SignUpContainer modeOn={SignInMode}>

            <LogoWrap>
                <Logo/>
            </LogoWrap>


            {/* Form */}

            <FormContainer>

                <FormWrapper modeOn={SignInMode}>

                    {/* Sign up form */}

                    <Form modeOn={SignInMode}>
                        <FormTitle>Sign Up</FormTitle>
                        <InputField>
                        <InputFieldIcon><FaUser /></InputFieldIcon>
                            
                            <Input type="text" placeholder="Username" />

                        </InputField>
                        <InputField>
                        <InputFieldIcon><FaEnvelope /></InputFieldIcon>
                            
                            <Input type="email" placeholder="Email" />

                        </InputField>
                        <InputField>
                        <InputFieldIcon><FaLock /></InputFieldIcon>
                            
                            <Input type="password" placeholder="Password" />

                        </InputField>
                        <ButtonSolid type="submit" value="Sign Up" />
                        <SocialText>Or Sign Up with social platforms</SocialText>
                        <SocialMedia>
                            <SocialIcon href="#">
                                <FaTwitter />
                            </SocialIcon>
                            <SocialIcon href="#">
                                <FaFacebookF />
                            </SocialIcon>
                            <SocialIcon href="#">
                                <FaLinkedinIn />
                            </SocialIcon>
                        </SocialMedia>
                    </Form>

                    {/* Sign in form */}

                    <Form modeOn={SignInMode} signIn>
                        <FormTitle>Sign In</FormTitle>
                        <InputField>
                        <InputFieldIcon><FaUser /></InputFieldIcon>
                            <Input type="text" placeholder="Username" />

                        </InputField>

                        <InputField>
                        <InputFieldIcon><FaLock /></InputFieldIcon>
                            <Input type="password" placeholder="Password" />

                        </InputField>
                        <ButtonSolid type="submit" value="Login" />
                        <SocialText>Or Sign In with social platforms</SocialText>
                        <SocialMedia>
                        <SocialIcon href="#">
                                <FaTwitter />
                            </SocialIcon>
                            <SocialIcon href="#">
                                <FaFacebookF />
                            </SocialIcon>
                            <SocialIcon href="#">
                                <FaLinkedinIn />
                            </SocialIcon>
                        </SocialMedia>
                    </Form>
                </FormWrapper>
            </FormContainer>

            {/* Panels */}

            <PanelsContainer>
                <LeftPanel modeOn={SignInMode}>
                    <LeftPanelContent modeOn={SignInMode}>
                        <PanelH3>One of us?</PanelH3>
                        <PanelP>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, nulla?</PanelP>
                        <ButtonTransparent onClick={toggleMode}>Sign In</ButtonTransparent>
                    </LeftPanelContent>
                    <LeftPanelImg modeOn={SignInMode} src="../../images/travel-girl-2.png" alt="travel-girl" />
                </LeftPanel>

                <RightPanel modeOn={SignInMode}>
                    <RightPanelContent modeOn={SignInMode}>
                        <PanelH3>New here?</PanelH3>
                        <PanelP>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, nulla?</PanelP>
                        <ButtonTransparent onClick={toggleMode}>Sign Up</ButtonTransparent>
                    </RightPanelContent>
                    <RightPanelImg modeOn={SignInMode} src="../../images/travel-girl-5.png" alt="travel-girl" />
                </RightPanel>

            </PanelsContainer>

        </SignUpContainer>
    )
}

export default SignUp;
