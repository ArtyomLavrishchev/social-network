import React from "react";
import s from "./FormsControls.module.css"
import {Field} from "redux-form";

const FormControl = (
    {
        input, meta: {touched, error}, child, element, children
    }: any) => {
    const hasError = touched && error
    const finalClassName = hasError ? `${s.formControl} ${s.error}` : s.formControl
    return (
        <div className={finalClassName}>
            <div>
                {children}
            </div>
            <div>
                {hasError && <span>{error}</span>}
            </div>
        </div>
    )

}

export const Textarea = (props: any) => {
    const {input, meta, child, element, ...restProps} = props
    return <FormControl {...props}><textarea {...input} {...restProps}/></FormControl>
}

export const Input = (props: any) => {
    const {input, meta, child, element, title, ...restProps} = props
    console.log(title)
    return <FormControl {...props}><input {...input} {...restProps} value={title}/></FormControl>
}

export const createField = (
    placeholder: string | null,
    name: string,
    validate: Array<any> | null,
    component: React.FC,
    text: string | null,
    restProps: any
) => {
    return (
        <div className={s.field}>
            <Field validate={validate} component={component} name={name} placeholder={placeholder} {...restProps} />
        </div>
    )
}