import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import { ILoginRequest } from 'models/auth.model';
import { AuthPageWrapper, FormAuthWrapper } from 'containers/auth/form-auth.styled';

import inputStyle from 'styles/util-modules/input.module.scss';
import buttonStyle from 'styles/util-modules/button.module.scss';
import { useTranslation } from 'react-i18next';

interface ILoginProps {}

const Login: React.FunctionComponent<ILoginProps> = () => {
    const [t] = useTranslation();
    const initialValues: ILoginRequest = {
        email: '',
        password: '',
    };
    const validationSchema = Yup.object().shape({
        email: Yup.string().email().required(),
        password: Yup.string().required(),
        confirmPassword: Yup.string().required(),
    });
    const formik = useFormik({
        initialValues,
        validationSchema,
        validate: (e) => {
            console.log(e);
        },
        onSubmit: (values, action) => {
            console.log(values, action);
        },
    });
    return (
        <AuthPageWrapper>
            <FormAuthWrapper>
                <h1>{t('auth.login.title')}</h1>
                <form onSubmit={formik.handleSubmit}>
                    <div className={inputStyle.form_group}>
                        <label htmlFor="email">Email</label>
                        <input
                            className={inputStyle.form_control}
                            id="email"
                            name="email"
                            placeholder="Nhập email"
                            autoComplete="off"
                        />
                    </div>
                    <div className={inputStyle.form_group}>
                        <label htmlFor="password">Password</label>
                        <input
                            className={inputStyle.form_control}
                            id="password"
                            name="password"
                            placeholder="Nhập mật khẩu"
                            autoComplete="off"
                        />
                    </div>
                    <button className={buttonStyle.btn_primary} type="submit">
                        Đăng nhập
                    </button>
                </form>
            </FormAuthWrapper>
        </AuthPageWrapper>
    );
};
export default Login;
