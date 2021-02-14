import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

const validate=(values: any) => {
    const errors = {};
    return errors;
}

const UsersSearchForm = () => {
    const submit = (values: { term: string }, { setSubmitting }: {setSubmitting: (isSubmitting: boolean) => void}) => {

        setSubmitting(false);
    };

    return (
        <div>
            <Formik
                initialValues={{ term: ''}}
                validate={validate}
                onSubmit={submit}
            >
                {({ isSubmitting }) => (
                    <Form>
                        <Field type="text" name="term" />
                        <button type="submit" disabled={isSubmitting}>
                            Find
                        </button>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default UsersSearchForm;