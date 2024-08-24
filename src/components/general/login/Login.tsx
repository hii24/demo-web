import React, { useEffect, useState } from "react";
import FillButton from "../../ui/buttons/fill-button";
import TextButton from "../../ui/buttons/text-button";
import Checkbox from "../form-fields/Checkbox/Checkbox";
import FormField from "../form-fields/FormField";
import LoginHeader from "./LoginHeader/LoginHeader";
import SignupButton from "./SignupButton/SignupButton";
import styles from "./style.module.scss";

import { observer } from "mobx-react";
import { useNavigate } from "react-router-dom";
import { getGoogleLink } from "../../../api/googleLogin";
import { signIn } from "../../../api/signIn";
import { ReactComponent as GoogleIcon } from "../../../assets/vectors/google.svg";
import authStore from "../../../store/store";
import { validationMessage } from "../../../utils/translations";
import { validateEmail } from "../../../utils/validation/email-validation";
import { validateLoginPassword } from "../../../utils/validation/password-validation";
import Modal from "../../modals/Modal";

const Login: React.FC = observer(() => {
  const [email, setEmail] = useState<string>("");
  const [emailError, setEmailError] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [passwordError, setPasswordError] = useState<string>("");
  const [rememberLogin, setRememberLogin] = useState<boolean>(false);
  const [inactiveButton, setInactiveButton] = useState<boolean>(false);
  const navigate = useNavigate();

  useEffect(() => {
    email && setEmailError("");
    password && setPasswordError("");
  }, [email, password]);

  const navigateToForgotPassword = () => {
    navigate("/getEmail");
  };

  const onSubmitForm = async () => {
    let error = false;

    const validEmail = await validateEmail(email);
    const validPassword = await validateLoginPassword(password);

    if (!validEmail.success) {
      error = true;
      setEmailError(validEmail.error);
    }
    if (!validPassword.success) {
      error = true;
      setPasswordError(validPassword.error);
    }

    if (error) {
      return;
    }

    const remember = rememberLogin ? 1 : 0;

    await setInactiveButton(true);
    const response = await signIn(email, password, remember);
    await setInactiveButton(false);

    if (response.errorMessage) {
      if (response.statusCode === 401) {
        setPassword("");
        setPasswordError(validationMessage.incorrectCredentials);
      }

      return;
    }
    if (
      response.data &&
      response.data.token &&
      typeof response.data.token === "string" &&
      response.data.user
    ) {
      authStore.login(response.data.token, response.data.user);
      navigate("/startSession");
    }
  };

  const googleSignIn = async () => {
    await setInactiveButton(true);
    const response = await getGoogleLink();
    await setInactiveButton(false);

    if (response.errorMessage) {
      alert(response.errorMessage);
      return;
    }
  };

  return (

      <Modal>
        <LoginHeader
          title="Log in to your account"
          subTitle="Welcome back! Please enter your details."
        />
        <SignupButton
          text="Don’t have an account?"
          buttonText="Sign up"
          onClick={() => navigate("/chooseRole")}
        />
        <div className={styles.fieldsContainer}>
          <FormField
            type="text"
            placeholder="Enter your email"
            fieldName="Email"
            isRequired={true}
            setValue={setEmail}
            value={email}
            errorMessage={emailError}
          />
          <FormField
            type="password"
            placeholder="••••••••"
            fieldName="Password"
            isRequired={true}
            setValue={setPassword}
            value={password}
            errorMessage={passwordError}
          />
        </div>
        <div className={styles.checkboxContainer}>
          <Checkbox
            text="Remember for 30 days"
            setValue={setRememberLogin}
            checked={rememberLogin}
            filedName="remeberLogin"
          />
          <TextButton
            onClick={navigateToForgotPassword}
            buttonText="Forgot password"
          />
        </div>
        <div className={styles.buttonsContainer}>
          <FillButton
            onClick={onSubmitForm}
            buttonText="Sign in"
            inactive={inactiveButton}
          />
          <FillButton
            onClick={googleSignIn}
            buttonText="Sign in with Google"
            isWhiteButton={true}
            inactive={inactiveButton}
          >
            <GoogleIcon />
          </FillButton>
        </div>
      </Modal>
  );
});

export default Login;
