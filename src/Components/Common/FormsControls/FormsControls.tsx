import React from "react";
import s from "./FormsControls.module.css"

const FormControl = (
    {
        input, meta, child, element, ...props
    }: any) => {
    const hasError = meta.touched && meta.error
    const finalClassName = hasError ? `${s.formControl} ${s.error}` : s.formControl
    return (
        <div className={finalClassName}>
            <div>
                {props.children}
            </div>
            <div>
                {hasError && <span>{meta.error}</span>}
            </div>
        </div>
    )

}

export const Textarea = (props: any) => {
    const {input, meta, child, element, ...restProps} = props
    return <FormControl {...props}><textarea {...input} {...restProps}/></FormControl>
}

export const Input = (props: any) => {
    const {input, meta, child, element, ...restProps} = props
    return <FormControl {...props}><input {...input} {...restProps}/></FormControl>
}