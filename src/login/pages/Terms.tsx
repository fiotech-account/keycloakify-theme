import { kcSanitize } from "keycloakify/lib/kcSanitize";
import { clsx } from "keycloakify/tools/clsx";
import type { PageProps } from "keycloakify/login/pages/PageProps";
import type { KcContext } from "../KcContext";
import type { I18n } from "../i18n";

export default function Terms(props: PageProps<Extract<KcContext, { pageId: "terms.ftl" }>, I18n>) {
    const { kcContext } = props;

    const { message } = kcContext;

    // Terms content data
    const termsData = {
        version: "1.0.0",
        last_updated: "2025-10-09",
        company: {
            name_en: "Fiotech Solutions Ltd",
            name_vi: "Công ty TNHH Giải Pháp Fiotech",
            domain: "fiotech.vn",
            address: "Thanh Long Building, 456 Xo Viet Nghe Tinh Street, Ward 25, Binh Thanh District, Ho Chi Minh City, 717333, Vietnam",
            tax_id: "0315055651"
        },
        title: "Fiotech Account - Terms of Service",
        introduction: {
            summary:
                "This document outlines the Terms of Service governing the use of Fiotech's products and services. By accessing or using any part of Fiotech's services, you agree to these terms in full.",
            scope: "These terms apply to all individuals and organizations who register, access, or use any services provided by Fiotech Solutions Ltd."
        },
        definitions: {
            "Fiotech Services": '"Fiotech Services" refers to, but is not limited to, other products and services provided by Fiotech Solutions Ltd.',
            User: '"User" refers to any individual or organization that registers and uses a Fiotech Account to access, manage, or interact with Fiotech Services.'
        },
        sections: [
            {
                title: "1. Acceptance of Terms",
                content:
                    "By accessing or using any part of Fiotech Services, you agree to be bound by these Terms of Service. If you do not agree with any of the terms, you must discontinue using our services immediately."
            },
            {
                title: "2. User Account",
                content:
                    "Users are responsible for maintaining the confidentiality of their login information. Any actions performed using the account are deemed to be initiated by the account owner. Users may request to terminate their account at any time by sending a request to support@fiotech.vn."
            },
            {
                title: "3. User Responsibilities",
                content:
                    "Users must not use Fiotech Services for any unlawful purposes, to harm the system, or to infringe upon the rights of others. Fiotech reserves the right to suspend or terminate accounts that violate these terms or applicable laws."
            },
            {
                title: "4. Privacy and Personal Data",
                content:
                    "Fiotech Solutions Ltd is committed to protecting user privacy and handling personal data in accordance with our Privacy Policy. Users may request access, correction, or deletion of their data by contacting privacy@fiotech.vn."
            },
            {
                title: "5. Security",
                content:
                    "Fiotech implements appropriate technical and organizational measures to safeguard information and data. However, users acknowledge that no system is completely secure and agree that Fiotech shall not be held liable for incidents beyond reasonable control."
            },
            {
                title: "6. Limitation of Liability",
                content:
                    "Fiotech shall not be liable for any indirect, incidental, or consequential damages arising from the use or inability to use its services. Users are solely responsible for the actions and content they perform or submit through the system."
            },
            {
                title: "7. Changes to Terms",
                content:
                    "Fiotech may update these Terms of Service from time to time. The latest version will be published at https://account.fiotech.vn/terms. Users are encouraged to review the terms periodically for the most current information."
            },
            {
                title: "8. Governing Law and Dispute Resolution",
                content:
                    "These Terms of Service are governed by the laws of Vietnam. Any disputes arising from or relating to the use of Fiotech Services shall first be resolved through negotiation; if unresolved, they shall be submitted to the competent courts of Vietnam."
            }
        ],
        contact: {
            support: "support@fiotech.vn",
            privacy: "privacy@fiotech.vn",
            legal: "legal@fiotech.vn"
        },
        footer: {
            note: "Fiotech Solutions Ltd reserves the right of final interpretation of these Terms of Service.",
            address: "Thanh Long Building, 456 Xo Viet Nghe Tinh Street, Ward 25, Binh Thanh District, Ho Chi Minh City, 717333, Vietnam",
            tax_id: "0315055651"
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 p-4">
            <div className="max-w-4xl mx-auto">
                {/* Header */}
                <div className="text-center mb-8 pt-8">
                    <h1 className="text-4xl font-bold text-gray-900 mb-2">Fiotech Account</h1>
                    <p className="text-xl text-gray-600 mb-4">{termsData.title}</p>
                    <div className="text-sm text-gray-500">
                        <p>
                            Version {termsData.version} • Last updated: {termsData.last_updated}
                        </p>
                    </div>
                </div>

                {/* Main Content Card */}
                <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
                    {/* Error/Info Messages */}
                    {message && (
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

                    {/* Introduction */}
                    <div className="mb-8">
                        <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-6">
                            <h2 className="text-lg font-semibold text-blue-900 mb-3">Introduction</h2>
                            <p className="text-blue-800 mb-3">{termsData.introduction.summary}</p>
                            <p className="text-blue-800">{termsData.introduction.scope}</p>
                        </div>
                    </div>

                    {/* Definitions */}
                    <div className="mb-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Definitions</h2>
                        <div className="space-y-4">
                            {Object.entries(termsData.definitions).map(([term, definition]) => (
                                <div key={term} className="border-l-4 border-blue-500 pl-4">
                                    <h3 className="font-semibold text-gray-900 mb-1">{term}</h3>
                                    <p className="text-gray-700">{definition}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Terms Sections */}
                    <div className="mb-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">Terms of Service</h2>
                        <div className="space-y-6">
                            {termsData.sections.map((section, index) => (
                                <div key={index} className="border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow">
                                    <h3 className="text-lg font-semibold text-gray-900 mb-3">{section.title}</h3>
                                    <p className="text-gray-700 leading-relaxed">{section.content}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Contact Information */}
                    <div className="mb-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Information</h2>
                        <div className="grid md:grid-cols-3 gap-4">
                            <div className="bg-gray-50 rounded-xl p-4">
                                <h3 className="font-semibold text-gray-900 mb-2">Support</h3>
                                <a href={`mailto:${termsData.contact.support}`} className="text-blue-600 hover:text-blue-700 transition-colors">
                                    {termsData.contact.support}
                                </a>
                            </div>
                            <div className="bg-gray-50 rounded-xl p-4">
                                <h3 className="font-semibold text-gray-900 mb-2">Privacy</h3>
                                <a href={`mailto:${termsData.contact.privacy}`} className="text-blue-600 hover:text-blue-700 transition-colors">
                                    {termsData.contact.privacy}
                                </a>
                            </div>
                            <div className="bg-gray-50 rounded-xl p-4">
                                <h3 className="font-semibold text-gray-900 mb-2">Legal</h3>
                                <a href={`mailto:${termsData.contact.legal}`} className="text-blue-600 hover:text-blue-700 transition-colors">
                                    {termsData.contact.legal}
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Company Information */}
                    <div className="mb-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Company Information</h2>
                        <div className="bg-gray-50 rounded-xl p-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <h3 className="font-semibold text-gray-900 mb-2">English Name</h3>
                                    <p className="text-gray-700">{termsData.company.name_en}</p>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-gray-900 mb-2">Vietnamese Name</h3>
                                    <p className="text-gray-700">{termsData.company.name_vi}</p>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-gray-900 mb-2">Tax ID</h3>
                                    <p className="text-gray-700">{termsData.company.tax_id}</p>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-gray-900 mb-2">Domain</h3>
                                    <p className="text-gray-700">{termsData.company.domain}</p>
                                </div>
                            </div>
                            <div className="mt-4">
                                <h3 className="font-semibold text-gray-900 mb-2">Address</h3>
                                <p className="text-gray-700">{termsData.company.address}</p>
                            </div>
                        </div>
                    </div>

                    {/* Footer Note */}
                    <div className="border-t border-gray-200 pt-6">
                        <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4">
                            <p className="text-yellow-800 font-medium">{termsData.footer.note}</p>
                        </div>
                    </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                    <button
                        onClick={() => window.history.back()}
                        className="px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-xl hover:border-gray-400 hover:bg-gray-50 transition-all duration-200 font-medium"
                    >
                        Go Back
                    </button>
                    <button
                        onClick={() => window.print()}
                        className="px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl hover:from-blue-700 hover:to-blue-800 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 font-medium"
                    >
                        Print Terms
                    </button>
                </div>

                {/* Footer */}
                <div className="text-center text-sm text-gray-500 pb-8">
                    <p>© 2025 Fiotech Labs. All rights reserved.</p>
                    <p className="mt-1">Tax ID: {termsData.company.tax_id}</p>
                </div>
            </div>
        </div>
    );
}
