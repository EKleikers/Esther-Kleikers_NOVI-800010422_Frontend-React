import React from "react";
import styles from './Select.module.scss';

function Select({
                    children, value, label, options, onChange,
                    input_id, input_name,
                    register, register_name, errors,
                    required_value, required_message,
                }) {
    return (

        <>
            <div className={styles["select-container"]}>
                <select
                    name={input_name}
                    id={input_id}
                    className={styles.option}
                    {...register(register_name, {
                        required: {
                            value: required_value,
                            message: required_message
                        },
                    })}
                >
                    <option hidden value="">All</option>
                    {children}
                </select>
            </div>
        </>
    )
}


export default Select;
