import { useState } from "react";
import { kcSanitize } from "keycloakify/lib/kcSanitize";
import { clsx } from "keycloakify/tools/clsx";
import type { PageProps } from "keycloakify/login/pages/PageProps";
import type { KcContext } from "../KcContext";
import type { I18n } from "../i18n";

export default function Login(props: PageProps<Extract<KcContext, { pageId: "login.ftl" }>, I18n>) {
    const { kcContext, i18n } = props;

    const { social, realm, url, usernameHidden, login, auth, registrationDisabled, messagesPerField, message } = kcContext;

    const { msg, msgStr } = i18n;

    const [isLoginButtonDisabled, setIsLoginButtonDisabled] = useState(false);
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 p-4">
            <div className="w-full max-w-md">
                {/* Language Selector */}
                <div className="flex justify-end mb-4">
                    <div className="relative">
                        <select
                            value={i18n.currentLanguage.languageTag}
                            onChange={e => {
                                const selectedLanguage = i18n.enabledLanguages.find(lang => lang.languageTag === e.target.value);
                                if (selectedLanguage) {
                                    window.location.href = selectedLanguage.href;
                                }
                            }}
                            className="appearance-none bg-white border border-gray-300 rounded-lg px-3 py-2 pr-8 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        >
                            {i18n.enabledLanguages.map(language => (
                                <option key={language.languageTag} value={language.languageTag}>
                                    {language.label}
                                </option>
                            ))}
                        </select>
                        <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                            <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </div>
                    </div>
                </div>

                {/* Logo and Title */}
                <div className="text-center mb-8">
                    <h1 className="text-4xl font-bold text-gray-900 mb-2">Fiotech Account</h1>
                    <p className="text-gray-600">{msg("loginAccountTitle")}</p>
                </div>

                {/* Main Card */}
                <div className="bg-white rounded-2xl shadow-xl p-8">
                    {/* Error/Info Messages */}
                    {message && !messagesPerField.existsError("username", "password") && (
                        <div
                            className={clsx(
                                "mb-6 p-4 rounded-lg text-sm",
                                message.type === "success" && "bg-green-50 text-green-800 border border-green-200",
                                message.type === "warning" && "bg-yellow-50 text-yellow-800 border border-yellow-200",
                                message.type === "error" && "bg-red-50 text-red-800 border border-red-200",
                                message.type === "info" && "bg-blue-50 text-blue-800 border border-blue-200"
                            )}
                            dangerouslySetInnerHTML={{ __html: kcSanitize(message.summary) }}
                        />
                    )}

                    {/* Social Providers */}
                    {realm.password && social?.providers !== undefined && social.providers.length !== 0 && (
                        <div className="mb-6">
                            <div className="grid gap-3">
                                {social.providers.slice(0, 2).map(p => (
                                    <a
                                        key={p.alias}
                                        id={`social-${p.alias}`}
                                        href={p.loginUrl}
                                        className="flex items-center justify-center gap-3 px-4 py-3 border-2 border-gray-200 rounded-xl hover:border-blue-500 hover:bg-blue-50 transition-all duration-200 font-medium text-gray-700 hover:text-blue-700"
                                    >
                                        {p.iconClasses && <i className={clsx(p.iconClasses, "text-xl")} aria-hidden="true"></i>}
                                        <span>Continue with {p.displayName}</span>
                                    </a>
                                ))}
                                {social.providers.length > 2 && (
                                    <details className="mt-2">
                                        <summary className="cursor-pointer text-sm text-gray-600 hover:text-gray-900 text-center py-2">
                                            Show {social.providers.length - 2} more options
                                        </summary>
                                        <div className="grid gap-3 mt-3">
                                            {social.providers.slice(2).map(p => (
                                                <a
                                                    key={p.alias}
                                                    id={`social-${p.alias}`}
                                                    href={p.loginUrl}
                                                    className="flex items-center justify-center gap-3 px-4 py-3 border-2 border-gray-200 rounded-xl hover:border-blue-500 hover:bg-blue-50 transition-all duration-200 font-medium text-gray-700 hover:text-blue-700"
                                                >
                                                    {p.iconClasses && <i className={clsx(p.iconClasses, "text-xl")} aria-hidden="true"></i>}
                                                    <span>Continue with {p.displayName}</span>
                                                </a>
                                            ))}
                                        </div>
                                    </details>
                                )}
                            </div>
                            <div className="relative my-6">
                                <div className="absolute inset-0 flex items-center">
                                    <div className="w-full border-t border-gray-200"></div>
                                </div>
                                <div className="relative flex justify-center text-sm">
                                    <span className="px-4 bg-white text-gray-500">Or continue with email</span>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Login Form */}
                    {realm.password && (
                        <form
                            id="kc-form-login"
                            onSubmit={() => {
                                setIsLoginButtonDisabled(true);
                                return true;
                            }}
                            action={url.loginAction}
                            method="post"
                            className="space-y-5"
                        >
                            {/* Username/Email Field */}
                            {!usernameHidden && (
                                <div>
                                    <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-2">
                                        {!realm.loginWithEmailAllowed
                                            ? msg("username")
                                            : !realm.registrationEmailAsUsername
                                              ? msg("usernameOrEmail")
                                              : msg("email")}
                                    </label>
                                    <input
                                        tabIndex={2}
                                        id="username"
                                        name="username"
                                        defaultValue={login.username ?? ""}
                                        type="text"
                                        autoFocus
                                        autoComplete="username"
                                        aria-invalid={messagesPerField.existsError("username", "password")}
                                        className={clsx(
                                            "w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200",
                                            messagesPerField.existsError("username", "password")
                                                ? "border-red-300 focus:ring-red-500"
                                                : "border-gray-300"
                                        )}
                                        placeholder="Enter your email or username"
                                    />
                                    {messagesPerField.existsError("username", "password") && (
                                        <p
                                            className="mt-2 text-sm text-red-600"
                                            dangerouslySetInnerHTML={{
                                                __html: kcSanitize(messagesPerField.getFirstError("username", "password"))
                                            }}
                                        />
                                    )}
                                </div>
                            )}

                            {/* Password Field */}
                            <div>
                                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                                    {msg("password")}
                                </label>
                                <div className="relative">
                                    <input
                                        tabIndex={3}
                                        id="password"
                                        name="password"
                                        type={isPasswordVisible ? "text" : "password"}
                                        autoComplete="current-password"
                                        aria-invalid={messagesPerField.existsError("username", "password")}
                                        className={clsx(
                                            "w-full px-4 py-3 pr-12 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200",
                                            messagesPerField.existsError("username", "password")
                                                ? "border-red-300 focus:ring-red-500"
                                                : "border-gray-300"
                                        )}
                                        placeholder="Enter your password"
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setIsPasswordVisible(!isPasswordVisible)}
                                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                                        aria-label={msgStr(isPasswordVisible ? "hidePassword" : "showPassword")}
                                    >
                                        {isPasswordVisible ? (
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
                                                />
                                            </svg>
                                        ) : (
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                                />
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                                                />
                                            </svg>
                                        )}
                                    </button>
                                </div>
                                {usernameHidden && messagesPerField.existsError("username", "password") && (
                                    <p
                                        className="mt-2 text-sm text-red-600"
                                        dangerouslySetInnerHTML={{
                                            __html: kcSanitize(messagesPerField.getFirstError("username", "password"))
                                        }}
                                    />
                                )}
                            </div>

                            {/* Remember Me & Forgot Password */}
                            <div className="flex items-center justify-between">
                                <div className="flex items-center">
                                    {realm.rememberMe && !usernameHidden && (
                                        <label className="flex items-center cursor-pointer">
                                            <input
                                                tabIndex={5}
                                                id="rememberMe"
                                                name="rememberMe"
                                                type="checkbox"
                                                defaultChecked={!!login.rememberMe}
                                                className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
                                            />
                                            <span className="ml-2 text-sm text-gray-700">{msg("rememberMe")}</span>
                                        </label>
                                    )}
                                </div>
                                {realm.resetPasswordAllowed && (
                                    <a
                                        tabIndex={6}
                                        href={url.loginResetCredentialsUrl}
                                        className="text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors"
                                    >
                                        {msg("doForgotPassword")}
                                    </a>
                                )}
                            </div>

                            {/* Submit Button */}
                            <input type="hidden" id="id-hidden-input" name="credentialId" value={auth.selectedCredential} />
                            <button
                                tabIndex={7}
                                disabled={isLoginButtonDisabled}
                                type="submit"
                                className={clsx(
                                    "w-full py-3 px-4 rounded-xl font-semibold text-white transition-all duration-200",
                                    isLoginButtonDisabled
                                        ? "bg-gray-400 cursor-not-allowed"
                                        : "bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                                )}
                            >
                                {msgStr("doLogIn")}
                            </button>
                        </form>
                    )}

                    {/* Registration Link */}
                    {realm.password && realm.registrationAllowed && !registrationDisabled && (
                        <div className="mt-6 text-center">
                            <p className="text-sm text-gray-600">
                                {msg("noAccount")}{" "}
                                <a
                                    tabIndex={8}
                                    href={url.registrationUrl}
                                    className="font-medium text-blue-600 hover:text-blue-700 transition-colors"
                                >
                                    {msg("doRegister")}
                                </a>
                            </p>
                        </div>
                    )}
                </div>

                {/* Footer */}
                <div className="mt-8 text-center text-sm text-gray-500">
                    <p>© 2025 Fiotech Labs. All rights reserved.</p>
                </div>
            </div>
        </div>
    );
}
