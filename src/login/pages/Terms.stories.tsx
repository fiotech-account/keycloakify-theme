import type { Meta, StoryObj } from "@storybook/react-vite";
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

export const Vietnamese: Story = {
    render: () => (
        <KcPageStory
            kcContext={{
                locale: {
                    currentLanguageTag: "vi"
                },
                "x-keycloakify": {
                    messages: {
                        termsText: `
                            <h1>Fiotech Account - Điều khoản dịch vụ</h1>
                            <p><strong>Phiên bản 1.0.0 • Cập nhật lần cuối: 2025-10-09</strong></p>
                            
                            <h2>Giới thiệu</h2>
                            <p>Tài liệu này mô tả Điều khoản Dịch vụ điều chỉnh việc sử dụng các sản phẩm và dịch vụ của Fiotech. Bằng cách truy cập hoặc sử dụng bất kỳ phần nào của dịch vụ Fiotech, bạn đồng ý với các điều khoản này một cách đầy đủ.</p>
                            <p>Các điều khoản này áp dụng cho tất cả cá nhân và tổ chức đăng ký, truy cập hoặc sử dụng bất kỳ dịch vụ nào do Fiotech Solutions Ltd cung cấp.</p>
                            
                            <h2>Định nghĩa</h2>
                            <p><strong>"Dịch vụ Fiotech"</strong> đề cập đến, nhưng không giới hạn, các sản phẩm và dịch vụ khác do Fiotech Solutions Ltd cung cấp.</p>
                            <p><strong>"Người dùng"</strong> đề cập đến bất kỳ cá nhân hoặc tổ chức nào đăng ký và sử dụng Tài khoản Fiotech để truy cập, quản lý hoặc tương tác với Dịch vụ Fiotech.</p>
                            
                            <h2>Điều khoản dịch vụ</h2>
                            
                            <h3>1. Chấp nhận điều khoản</h3>
                            <p>Bằng cách truy cập hoặc sử dụng bất kỳ phần nào của Dịch vụ Fiotech, bạn đồng ý bị ràng buộc bởi các Điều khoản Dịch vụ này. Nếu bạn không đồng ý với bất kỳ điều khoản nào, bạn phải ngừng sử dụng dịch vụ của chúng tôi ngay lập tức.</p>
                            
                            <h3>2. Tài khoản người dùng</h3>
                            <p>Người dùng có trách nhiệm duy trì tính bảo mật của thông tin đăng nhập của họ. Bất kỳ hành động nào được thực hiện bằng tài khoản đều được coi là do chủ tài khoản khởi tạo. Người dùng có thể yêu cầu chấm dứt tài khoản của họ bất cứ lúc nào bằng cách gửi yêu cầu đến support@fiotech.vn.</p>
                            
                            <h3>3. Trách nhiệm của người dùng</h3>
                            <p>Người dùng không được sử dụng Dịch vụ Fiotech cho bất kỳ mục đích bất hợp pháp nào, để gây hại cho hệ thống hoặc xâm phạm quyền của người khác. Fiotech bảo lưu quyền đình chỉ hoặc chấm dứt các tài khoản vi phạm các điều khoản này hoặc luật pháp hiện hành.</p>
                            
                            <h3>4. Quyền riêng tư và dữ liệu cá nhân</h3>
                            <p>Fiotech Solutions Ltd cam kết bảo vệ quyền riêng tư của người dùng và xử lý dữ liệu cá nhân phù hợp với Chính sách Bảo mật của chúng tôi. Người dùng có thể yêu cầu truy cập, sửa đổi hoặc xóa dữ liệu của họ bằng cách liên hệ privacy@fiotech.vn.</p>
                            
                            <h3>5. Bảo mật</h3>
                            <p>Fiotech thực hiện các biện pháp kỹ thuật và tổ chức thích hợp để bảo vệ thông tin và dữ liệu. Tuy nhiên, người dùng thừa nhận rằng không có hệ thống nào hoàn toàn an toàn và đồng ý rằng Fiotech sẽ không chịu trách nhiệm cho các sự cố ngoài tầm kiểm soát hợp lý.</p>
                            
                            <h3>6. Giới hạn trách nhiệm</h3>
                            <p>Fiotech sẽ không chịu trách nhiệm cho bất kỳ thiệt hại gián tiếp, ngẫu nhiên hoặc hậu quả nào phát sinh từ việc sử dụng hoặc không thể sử dụng dịch vụ của mình. Người dùng hoàn toàn chịu trách nhiệm cho các hành động và nội dung họ thực hiện hoặc gửi qua hệ thống.</p>
                            
                            <h3>7. Thay đổi điều khoản</h3>
                            <p>Fiotech có thể cập nhật các Điều khoản Dịch vụ này theo thời gian. Phiên bản mới nhất sẽ được xuất bản tại https://account.fiotech.vn/terms. Người dùng được khuyến khích xem lại các điều khoản định kỳ để có thông tin mới nhất.</p>
                            
                            <h3>8. Luật điều chỉnh và giải quyết tranh chấp</h3>
                            <p>Các Điều khoản Dịch vụ này được điều chỉnh bởi luật pháp Việt Nam. Bất kỳ tranh chấp nào phát sinh từ hoặc liên quan đến việc sử dụng Dịch vụ Fiotech sẽ được giải quyết trước tiên thông qua đàm phán; nếu không giải quyết được, chúng sẽ được đệ trình lên các tòa án có thẩm quyền của Việt Nam.</p>
                            
                            <h2>Thông tin liên hệ</h2>
                            <p><strong>Hỗ trợ:</strong> support@fiotech.vn</p>
                            <p><strong>Quyền riêng tư:</strong> privacy@fiotech.vn</p>
                            <p><strong>Pháp lý:</strong> legal@fiotech.vn</p>
                            
                            <h2>Thông tin công ty</h2>
                            <p><strong>Tên tiếng Anh:</strong> Fiotech Solutions Ltd</p>
                            <p><strong>Tên tiếng Việt:</strong> Công ty TNHH Giải Pháp Fiotech</p>
                            <p><strong>Mã số thuế:</strong> 0315055651</p>
                            <p><strong>Tên miền:</strong> fiotech.vn</p>
                            <p><strong>Địa chỉ:</strong> Tòa nhà Thanh Long, 456 Xô Viết Nghệ Tĩnh, Phường 25, Quận Bình Thạnh, TP. Hồ Chí Minh, 717333, Việt Nam</p>
                            
                            <p><em>Fiotech Solutions Ltd bảo lưu quyền giải thích cuối cùng đối với các Điều khoản Dịch vụ này.</em></p>
                        `
                    }
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
