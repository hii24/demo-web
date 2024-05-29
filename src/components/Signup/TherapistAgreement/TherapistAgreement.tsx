import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ReactComponent as EditIcon } from "../../../assets/vectors/edit.svg";
import { ReactComponent as MailIcon } from "../../../assets/vectors/mail.svg";
import { errorEmptyFieldText } from "../../../utils/errorMessages";
import BackButton from "../../Buttons/BackButton/BackButton";
import FillButton from "../../Buttons/FillButton/FillButton";
import FormField from "../../FormField/FormField";
import BigModal from "../../Modal/BigModal/BigModal";
import ModalHeader from "../../Modal/ModalHeader/ModalHeader";
import Agreement from "./Agreement/Agreement";
import styles from "./styles.module.scss";

const TherapistAgreement: React.FC = () => {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState<string>("");
  const [firstNameError, setFirstNameError] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [lastNameError, setLastNameError] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  const [titleError, setTitleError] = useState<string>("");
  const [practice, setPractice] = useState<string>("");
  const [practiceError, setPracticeError] = useState<string>("");

  useEffect(() => {
    firstName && setFirstNameError("");
    lastName && setLastNameError("");
    title && setTitleError("");
    practice && setPracticeError("");
  }, [firstName, lastName, title, practice]);

  const onSubmitForm = () => {
    let isError = false;
    if (!firstName) {
      setFirstNameError(errorEmptyFieldText);
      isError = true;
    }
    if (!lastName) {
      setLastNameError(errorEmptyFieldText);
      isError = true;
    }
    if (!title) {
      setTitleError(errorEmptyFieldText);
      isError = true;
    }
    if (!practice) {
      setPracticeError(errorEmptyFieldText);
      isError = true;
    }

    if (isError) {
      return;
    }

    const state = {
      user_type: 1,
      first_name: firstName,
      last_name: lastName,
      title: title,
      practise_name: practice,
    };

    navigate("/createAccount", { state });
  };

  return (
    <BigModal>
      <div className={styles.container}>
        <ModalHeader
          title="Therapist Agreement"
          subTitle="Please sign therapist agreement to continue"
        >
          <MailIcon />
        </ModalHeader>
        <Agreement />

        <div className={styles.inputsContainer}>
          <FormField
            value={firstName}
            setValue={setFirstName}
            placeholder="e.g. Francine"
            fieldName="First Name*"
            isRequired={true}
            type="text"
            errorMessage={firstNameError}
          />
          <FormField
            value={lastName}
            setValue={setLastName}
            placeholder="e.g. Shapiro"
            fieldName="Last Name*"
            isRequired={true}
            type="text"
            errorMessage={lastNameError}
          />
        </div>
        <FormField
          value={title}
          setValue={setTitle}
          placeholder="Enter your title (e.g. LPC, LCSW etc.)"
          fieldName="Your Title*"
          isRequired={true}
          type="text"
          errorMessage={titleError}
        />
        <FormField
          value={practice}
          setValue={setPractice}
          placeholder="Practice that employs you"
          fieldName="Name of Practice*"
          isRequired={true}
          type="text"
          errorMessage={practiceError}
        />
        <FillButton buttonText="Sign agreement" onClick={onSubmitForm}>
          <EditIcon />
        </FillButton>
        <BackButton
          buttonText="Back to sign up"
          onClick={() => navigate("/chooseRole")}
        />
      </div>
    </BigModal>
  );
};

export default TherapistAgreement;
