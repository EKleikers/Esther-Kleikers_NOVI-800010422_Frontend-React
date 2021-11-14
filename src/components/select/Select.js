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
            {/*<label*/}
            {/*    className="label_form"*/}
            {/*    htmlFor={input_id}*/}
            {/*>*/}

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
                    // value={value}
                    // label={label}
                    // options={options}
                    // onChange={onChange}
                >
                    <option hidden value="">All</option>
                    {children}

                    {/*{options.map(option => {*/}
                    {/*    return (<option key={option.value} value={option.value}>{option.text}</option>);*/}
                    {/*})}*/}
                </select>
                {/*{errors[input_id] && <p className={styles.error_message}>{errors[input_id].message}</p>}*/}
            {/*</label>*/}
            </div>
        </>
    )
}


export default Select;
