import React, { useEffect, useState } from "react";
import { validateLoginPassword } from "../../../utils/validation/password-validation";
import FormBackdrop from "../../ui/wrappers/form-backdrop";
import FillButton from "../../ui/buttons/fill-button";
import FormField from "../../general/form-fields/FormField";
import HeaderModal from "./HeaderModal/HeaderModal";
import styles from "./styles.module.scss";
import { createClient } from '../../../api/addClient';

interface Props {
  isVisible: boolean;
  onClose: () => void;
}

const AddClientModal: React.FC<Props> = (props) => {
  const [name, setName] = useState<string>("");
  const [nameError, setNameError] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  useEffect(() => {
    name && setNameError("");
  }, [name]);

  useEffect(() => {
    if (description.length > 30) {
      setDescription(description.slice(0, 30));
    }
  }, [description]);

  const onSubmit = async () => {
    const validate = await validateLoginPassword(name);

    if (!validate.success) {
      setNameError(validate.error);
      return;
    }
    createClient({ name, description });
    setName("");
    setDescription("");
    props.onClose();
  };

  if (!props.isVisible) {
    return null;
  }

  return (
    <FormBackdrop onClick={props.onClose}>
      <div
        className={styles.modalContainer}
        onClick={(e) => e.stopPropagation()}
      >
        <HeaderModal
          onClose={props.onClose}
          title="Add client"
          description=" Add a client to keep track of your past sessions and notes."
        />
        <div className={styles.subContainer}>
          <div className={styles.formContainer}>
            <FormField
              fieldName="Client name*"
              type="text"
              placeholder="e.g. Linda Brook"
              value={name}
              setValue={setName}
              isRequired={true}
              errorMessage={nameError}
            />
            <div className={styles.descriptionField}>
              <FormField
                fieldName="Short description"
                type="text"
                placeholder="Client suffers from CPTSD"
                value={description}
                setValue={setDescription}
                isRequired={false}
              />
              <span className={styles.desctiprionLength}>
                {description.length}/30 characters
              </span>
            </div>
          </div>
        </div>

        <div className={styles.buttonsContainer}>
          <FillButton buttonText="Add client" onClick={onSubmit} />
          <FillButton
            buttonText="Cancel"
            onClick={props.onClose}
            isWhiteButton={true}
          />
        </div>
      </div>
      ;
    </FormBackdrop>
  );
};

export default AddClientModal;
