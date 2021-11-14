import React from 'react';
import styles from './Input.module.scss';

export default function Input({
                                  children, value, placeholder,
                                  input_id, input_type,
                                  register, register_name, errors,
                                  required_value, required_message,
                                  pattern_value, pattern_message,
                                  minlength_value, minlength_message,
                                  maxlength_value, maxlength_message,
                                  min_value, min_message,
                                  max_value, max_message
                              }) {
    return (
        <>
            <div className={styles["input-container"]}>
                <label
                    className="label_form"
                    htmlFor={input_id}
                >
                    {children}
                    <input
                        type={input_type}
                        id={input_id}
                        placeholder={placeholder}
                        value={value}  //added for type radio
                        {...register(register_name, {
                            required: {
                                value: required_value,
                                message: required_message
                            },
                            pattern: {
                                value: pattern_value,
                                message: pattern_message
                            },
                            minLength: {
                                value: minlength_value,
                                message: minlength_message
                            },
                            maxLength: {
                                value: maxlength_value,
                                message: maxlength_message
                            },
                            min: {
                                value: min_value,
                                message: min_message
                            },
                            max: {
                                value: max_value,
                                message: max_message
                            },
                        })}
                    />
                    {errors[input_id] && <p className={styles.error_message}>{errors[input_id].message}</p>}
                </label>
            </div>
        </>
    )
}



