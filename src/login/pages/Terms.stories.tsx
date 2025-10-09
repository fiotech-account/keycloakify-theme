import type { Meta, StoryObj } from "@storybook/react";
import { createKcPageStory } from "../KcPageStory";

const { KcPageStory } = createKcPageStory({ pageId: "terms.ftl" });

const meta = {
    title: "login/terms.ftl",
    component: KcPageStory
} satisfies Meta<typeof KcPageStory>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: () => (
        <KcPageStory
            kcContext={{
                "x-keycloakify": {
                    messages: {
                        termsText: `
                            <h1>Fiotech Account - Terms of Service</h1>
                            <p><strong>Version 1.0.0 • Last updated: 2025-10-09</strong></p>
                            
                            <h2>Introduction</h2>
                            <p>This document outlines the Terms of Service governing the use of Fiotech's products and services. By accessing or using any part of Fiotech's services, you agree to these terms in full.</p>
                            <p>These terms apply to all individuals and organizations who register, access, or use any services provided by Fiotech Solutions Ltd.</p>
                            
                            <h2>Definitions</h2>
                            <p><strong>"Fiotech Services"</strong> refers to, but is not limited to, other products and services provided by Fiotech Solutions Ltd.</p>
                            <p><strong>"User"</strong> refers to any individual or organization that registers and uses a Fiotech Account to access, manage, or interact with Fiotech Services.</p>
                            
                            <h2>Terms of Service</h2>
                            
                            <h3>1. Acceptance of Terms</h3>
                            <p>By accessing or using any part of Fiotech Services, you agree to be bound by these Terms of Service. If you do not agree with any of the terms, you must discontinue using our services immediately.</p>
                            
                            <h3>2. User Account</h3>
                            <p>Users are responsible for maintaining the confidentiality of their login information. Any actions performed using the account are deemed to be initiated by the account owner. Users may request to terminate their account at any time by sending a request to support@fiotech.vn.</p>
                            
                            <h3>3. User Responsibilities</h3>
                            <p>Users must not use Fiotech Services for any unlawful purposes, to harm the system, or to infringe upon the rights of others. Fiotech reserves the right to suspend or terminate accounts that violate these terms or applicable laws.</p>
                            
                            <h3>4. Privacy and Personal Data</h3>
                            <p>Fiotech Solutions Ltd is committed to protecting user privacy and handling personal data in accordance with our Privacy Policy. Users may request access, correction, or deletion of their data by contacting privacy@fiotech.vn.</p>
                            
                            <h3>5. Security</h3>
                            <p>Fiotech implements appropriate technical and organizational measures to safeguard information and data. However, users acknowledge that no system is completely secure and agree that Fiotech shall not be held liable for incidents beyond reasonable control.</p>
                            
                            <h3>6. Limitation of Liability</h3>
                            <p>Fiotech shall not be liable for any indirect, incidental, or consequential damages arising from the use or inability to use its services. Users are solely responsible for the actions and content they perform or submit through the system.</p>
                            
                            <h3>7. Changes to Terms</h3>
                            <p>Fiotech may update these Terms of Service from time to time. The latest version will be published at https://account.fiotech.vn/terms. Users are encouraged to review the terms periodically for the most current information.</p>
                            
                            <h3>8. Governing Law and Dispute Resolution</h3>
                            <p>These Terms of Service are governed by the laws of Vietnam. Any disputes arising from or relating to the use of Fiotech Services shall first be resolved through negotiation; if unresolved, they shall be submitted to the competent courts of Vietnam.</p>
                            
                            <h2>Contact Information</h2>
                            <p><strong>Support:</strong> support@fiotech.vn</p>
                            <p><strong>Privacy:</strong> privacy@fiotech.vn</p>
                            <p><strong>Legal:</strong> legal@fiotech.vn</p>
                            
                            <h2>Company Information</h2>
                            <p><strong>English Name:</strong> Fiotech Solutions Ltd</p>
                            <p><strong>Vietnamese Name:</strong> Công ty TNHH Giải Pháp Fiotech</p>
                            <p><strong>Tax ID:</strong> 0315055651</p>
                            <p><strong>Domain:</strong> fiotech.vn</p>
                            <p><strong>Address:</strong> Thanh Long Building, 456 Xo Viet Nghe Tinh Street, Ward 25, Binh Thanh District, Ho Chi Minh City, 717333, Vietnam</p>
                            
                            <p><em>Fiotech Solutions Ltd reserves the right of final interpretation of these Terms of Service.</em></p>
                        `
                    }
                }
            }}
        />
    )
};

export const French: Story = {
    render: () => (
        <KcPageStory
            kcContext={{
                locale: {
                    currentLanguageTag: "fr"
                },
                "x-keycloakify": {
                    // cSpell: disable
                    messages: {
                        termsText: "<p>Mes terme en <strong>Français</strong></p>"
                    }
                    // cSpell: enable
                }
            }}
        />
    )
};

export const Spanish: Story = {
    render: () => (
        <KcPageStory
            kcContext={{
                locale: {
                    currentLanguageTag: "es"
                },
                "x-keycloakify": {
                    messages: {
                        termsText: "<p>Mis términos en <strong>Español</strong></p>"
                    }
                }
            }}
        />
    )
};

export const LongMessage: Story = {
    render: () => (
        <KcPageStory
            kcContext={{
                "x-keycloakify": {
                    messages: {
                        termsText: `
                            <h1>Fiotech Account - Terms of Service</h1>
                            <p><strong>Version 1.0.0 • Last updated: 2025-10-09</strong></p>
                            
                            <h2>Introduction</h2>
                            <p>This document outlines the Terms of Service governing the use of Fiotech's products and services. By accessing or using any part of Fiotech's services, you agree to these terms in full.</p>
                            <p>These terms apply to all individuals and organizations who register, access, or use any services provided by Fiotech Solutions Ltd.</p>
                            
                            <h2>Definitions</h2>
                            <p><strong>"Fiotech Services"</strong> refers to, but is not limited to, other products and services provided by Fiotech Solutions Ltd.</p>
                            <p><strong>"User"</strong> refers to any individual or organization that registers and uses a Fiotech Account to access, manage, or interact with Fiotech Services.</p>
                            
                            <h2>Terms of Service</h2>
                            
                            <h3>1. Acceptance of Terms</h3>
                            <p>By accessing or using any part of Fiotech Services, you agree to be bound by these Terms of Service. If you do not agree with any of the terms, you must discontinue using our services immediately.</p>
                            
                            <h3>2. User Account</h3>
                            <p>Users are responsible for maintaining the confidentiality of their login information. Any actions performed using the account are deemed to be initiated by the account owner. Users may request to terminate their account at any time by sending a request to support@fiotech.vn.</p>
                            
                            <h3>3. User Responsibilities</h3>
                            <p>Users must not use Fiotech Services for any unlawful purposes, to harm the system, or to infringe upon the rights of others. Fiotech reserves the right to suspend or terminate accounts that violate these terms or applicable laws.</p>
                            
                            <h3>4. Privacy and Personal Data</h3>
                            <p>Fiotech Solutions Ltd is committed to protecting user privacy and handling personal data in accordance with our Privacy Policy. Users may request access, correction, or deletion of their data by contacting privacy@fiotech.vn.</p>
                            
                            <h3>5. Security</h3>
                            <p>Fiotech implements appropriate technical and organizational measures to safeguard information and data. However, users acknowledge that no system is completely secure and agree that Fiotech shall not be held liable for incidents beyond reasonable control.</p>
                            
                            <h3>6. Limitation of Liability</h3>
                            <p>Fiotech shall not be liable for any indirect, incidental, or consequential damages arising from the use or inability to use its services. Users are solely responsible for the actions and content they perform or submit through the system.</p>
                            
                            <h3>7. Changes to Terms</h3>
                            <p>Fiotech may update these Terms of Service from time to time. The latest version will be published at https://account.fiotech.vn/terms. Users are encouraged to review the terms periodically for the most current information.</p>
                            
                            <h3>8. Governing Law and Dispute Resolution</h3>
                            <p>These Terms of Service are governed by the laws of Vietnam. Any disputes arising from or relating to the use of Fiotech Services shall first be resolved through negotiation; if unresolved, they shall be submitted to the competent courts of Vietnam.</p>
                            
                            <h2>Contact Information</h2>
                            <p><strong>Support:</strong> support@fiotech.vn</p>
                            <p><strong>Privacy:</strong> privacy@fiotech.vn</p>
                            <p><strong>Legal:</strong> legal@fiotech.vn</p>
                            
                            <h2>Company Information</h2>
                            <p><strong>English Name:</strong> Fiotech Solutions Ltd</p>
                            <p><strong>Vietnamese Name:</strong> Công ty TNHH Giải Pháp Fiotech</p>
                            <p><strong>Tax ID:</strong> 0315055651</p>
                            <p><strong>Domain:</strong> fiotech.vn</p>
                            <p><strong>Address:</strong> Thanh Long Building, 456 Xo Viet Nghe Tinh Street, Ward 25, Binh Thanh District, Ho Chi Minh City, 717333, Vietnam</p>
                            
                            <p><em>Fiotech Solutions Ltd reserves the right of final interpretation of these Terms of Service.</em></p>
                        `
                    }
                }
            }}
        />
    )
};
